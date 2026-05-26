import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const query     = searchParams.get('query') || '';
  const minFees   = parseInt(searchParams.get('minFees') || '0');
  const maxFees   = parseInt(searchParams.get('maxFees') || '2000000');
  const minRating = parseFloat(searchParams.get('minRating') || '0');

  try {
    const colleges = await prisma.college.findMany({
      where: {
        AND: [
          query ? {
            OR: [
              { name: { contains: query, mode: 'insensitive' } },
              { location: { contains: query, mode: 'insensitive' } },
              { state: { contains: query, mode: 'insensitive' } },
            ]
          } : {},
          { fees: { gte: minFees, lte: maxFees } },
          { rating: { gte: minRating } },
        ]
      },
      orderBy: { rating: 'desc' },
    });

    return NextResponse.json(colleges);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Failed to fetch colleges' }, { status: 500 });
  }
}
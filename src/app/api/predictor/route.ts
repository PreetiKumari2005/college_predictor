import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { exam, rank, category } = await request.json();

    if (!exam || !rank) {
      return NextResponse.json({ error: "Missing required tracking dimensions" }, { status: 400 });
    }

    const matches = await prisma.cutoff.findMany({
      where: {
        exam: exam,
        category: category || "General",
        closingRank: { gte: parseInt(rank) }
      },
      include: { college: true },
      orderBy: { closingRank: 'asc' }
    });

    return NextResponse.json(matches);
  } catch (error) {
    return NextResponse.json({ error: "Predictor operational fault" }, { status: 500 });
  }
}
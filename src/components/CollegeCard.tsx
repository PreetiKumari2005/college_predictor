'use client';

import Link from 'next/link';
import { College } from '@/types';

interface CollegeCardProps {
  college: College;
  onCompareToggle?: (id: string) => void;
  isCompared?: boolean;
}

export default function CollegeCard({ college, onCompareToggle, isCompared }: CollegeCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden group flex flex-col">
      {/* Header Banner */}
      <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-700 relative flex items-center justify-center">
        <span className="text-white text-4xl font-bold opacity-20">
          {college.name.charAt(0)}
        </span>
        <span className="absolute top-3 right-3 bg-slate-900/80 text-white text-xs font-bold px-2 py-1 rounded">
          ★ {college.rating.toFixed(1)}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-slate-800 text-base leading-tight mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
          {college.name}
        </h3>
        <p className="text-slate-500 text-sm mb-4">
          📍 {college.location}, {college.state}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-slate-50 rounded-lg p-3 text-center">
            <p className="text-xs text-slate-500 mb-1">Annual Fees</p>
            <p className="font-bold text-slate-800 text-sm">
              ₹{(college.fees / 100000).toFixed(1)}L
            </p>
          </div>
          <div className="bg-slate-50 rounded-lg p-3 text-center">
            <p className="text-xs text-slate-500 mb-1">Avg Package</p>
            <p className="font-bold text-slate-800 text-sm">
              ₹{college.placementAvg}L
            </p>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          {/* Compare Toggle Button */}
          {onCompareToggle && (
            <button
              onClick={() => onCompareToggle(college.id)}
              className={`w-full text-sm font-medium py-2.5 rounded-lg border transition-colors ${
                isCompared
                  ? 'bg-emerald-500 text-white border-emerald-500 hover:bg-emerald-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {isCompared ? '✓ Added to Compare' : '+ Add to Compare'}
            </button>
          )}

          {/* View Details */}
          <Link
            href={`/colleges/${college.slug}`}
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

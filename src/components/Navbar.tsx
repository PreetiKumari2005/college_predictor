'use client';
import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-slate-800">
          College<span className="text-blue-600">Discovery</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-slate-600 hover:text-blue-600 font-medium">Home</Link>
          <Link href="/colleges" className="text-slate-600 hover:text-blue-600 font-medium">Colleges</Link>
          <Link href="/compare" className="text-slate-600 hover:text-blue-600 font-medium">Compare</Link>
        </div>
      </div>
    </nav>
  );
}

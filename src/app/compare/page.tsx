"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { College } from '@/types';

export default function CompareEngine() {
  const [dataset, setDataset] = useState<College[]>([]);

  useEffect(() => {
    const fetchSelectedPayload = async () => {
      const bucket: string[] = JSON.parse(localStorage.getItem('compare_bucket') || '[]');
      if (bucket.length === 0) return;

      const res = await fetch('/api/colleges');
      const data: College[] = await res.json();
      setDataset(data.filter(c => bucket.includes(c.id)));
    };
    fetchSelectedPayload();
  }, []);

  // Remove a college from compare
  const removeFromCompare = (id: string) => {
    const updated = dataset.filter(c => c.id !== id);
    setDataset(updated);
    localStorage.setItem('compare_bucket', JSON.stringify(updated.map(c => c.id)));
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Compare Colleges</h2>
          {dataset.length > 0 && (
            <button
              onClick={() => {
                setDataset([]);
                localStorage.removeItem('compare_bucket');
              }}
              className="text-sm text-red-500 hover:text-red-600 font-medium"
            >
              Clear All
            </button>
          )}
        </div>

        {dataset.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg mb-4">No colleges selected for comparison.</p>
            <p className="text-slate-400 text-sm mb-6">Go to the search page and click <strong>"+ Add to Compare"</strong> on up to 3 colleges.</p>
            <Link
              href="/"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              ← Back to Search
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-4 text-sm font-semibold text-slate-500 w-48">Metric</th>
                  {dataset.map(c => (
                    <th key={c.id} className="p-4 text-sm font-bold text-slate-800">
                      <div className="flex items-start justify-between gap-2">
                        <span>{c.name}</span>
                        <button
                          onClick={() => removeFromCompare(c.id)}
                          className="text-slate-300 hover:text-red-400 transition-colors shrink-0 mt-0.5"
                          title="Remove"
                        >
                          ✕
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-500">Location</td>
                  {dataset.map(c => (
                    <td key={c.id} className="p-4 text-slate-700">{c.location}, {c.state}</td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-500">Annual Fees</td>
                  {dataset.map(c => (
                    <td key={c.id} className="p-4 font-semibold text-slate-900">
                      ₹{c.fees.toLocaleString('en-IN')}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-500">Avg Package</td>
                  {dataset.map(c => (
                    <td key={c.id} className="p-4 font-semibold text-emerald-600">
                      ₹{c.placementAvg} LPA
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-500">Max Package</td>
                  {dataset.map(c => (
                    <td key={c.id} className="p-4 text-slate-700">
                      {c.placementMax ? `₹${c.placementMax} LPA` : '—'}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-500">Rating</td>
                  {dataset.map(c => (
                    <td key={c.id} className="p-4 text-amber-500 font-bold">★ {c.rating}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

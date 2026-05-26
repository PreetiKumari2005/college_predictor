"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';

interface MatchResult {
  id: string;
  branch: string;
  closingRank: number;
  exam: string;
  college: {
    name: string;
    location: string;
    rating: number;
  };
}

export default function RankPredictor() {
  const [form, setForm] = useState({ exam: 'JEE_MAIN', rank: '', category: 'General' });
  const [predictions, setPredictions] = useState<MatchResult[]>([]);
  const [loading, setLoading] = useState(false);

  const executePrediction = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/predictor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (Array.isArray(data)) setPredictions(data);
    setLoading(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Admission Evaluation Predictor</h2>
          <form onSubmit={executePrediction} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase block mb-1">Target Exam</label>
              <select 
                value={form.exam} 
                onChange={e => setForm({...form, exam: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm"
              >
                <option value="JEE_MAIN">JEE Main</option>
                <option value="GATE">GATE</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase block mb-1">Achieved Rank / Score</label>
              <input 
                type="number" 
                required
                placeholder="e.g. 2500"
                value={form.rank} 
                onChange={e => setForm({...form, rank: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase block mb-1">Category</label>
              <select 
                value={form.category} 
                onChange={e => setForm({...form, category: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-sm"
              >
                <option value="General">General (Open)</option>
                <option value="OBC">OBC-NCL</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
            </div>
            <button type="submit" className="bg-blue-600 text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-blue-700 transition">
              {loading ? 'Processing...' : 'Run Predictor'}
            </button>
          </form>
        </div>

        <div className="space-y-4">
          {predictions.map((match) => (
            <div key={match.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex justify-between items-center">
              <div>
                <h4 className="font-bold text-slate-900">{match.college.name}</h4>
                <p className="text-sm text-slate-500 font-medium">{match.branch} | Cutoff Boundary: {match.closingRank}</p>
              </div>
              <span className="bg-emerald-50 text-emerald-700 font-bold text-xs px-3 py-1.5 rounded-full border border-emerald-200">
                Eligible
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
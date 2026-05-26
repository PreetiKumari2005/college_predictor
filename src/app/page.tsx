"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import FilterSidebar from '@/components/FilterSidebar';
import CollegeCard from '@/components/CollegeCard';
import { College } from '@/types';

export default function SearchHub() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [query, setQuery] = useState('');
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  const [filters, setFilters] = useState({ minFees: '0', maxFees: '500000', minRating: '3.5' });

  useEffect(() => {
    const fetchCatalog = async () => {
      const params = new URLSearchParams({
        query,
        minFees: filters.minFees,
        maxFees: filters.maxFees,
        minRating: filters.minRating
      });
      const res = await fetch(`/api/colleges?${params.toString()}`);
      const data = await res.json();
      if (Array.isArray(data)) setColleges(data);
    };
    
    const debounce = setTimeout(fetchCatalog, 300);
    return () => clearTimeout(debounce);
  }, [query, filters]);

  const handleCompareToggle = (id: string) => {
    setComparedIds(prev => {
      const updated = prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id];
      localStorage.setItem('compare_bucket', JSON.stringify(updated.slice(0, 3)));
      return updated.slice(0, 3);
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <input 
            type="text"
            placeholder="Search institutes by name or location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full max-w-2xl bg-white border border-slate-200 rounded-xl px-5 py-3 shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar filters={filters} onChange={setFilters} />
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college) => (
              <CollegeCard 
                key={college.id} 
                college={college} 
                onCompareToggle={handleCompareToggle}
                isCompared={comparedIds.includes(college.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
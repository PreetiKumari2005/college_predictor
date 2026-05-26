'use client';

interface FilterState {
  minFees: string;
  maxFees: string;
  minRating: string;
}

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;  // ✅ matches page.tsx
}

export default function FilterSidebar({ filters, onChange }: FilterSidebarProps) {
  const handleChange = (key: keyof FilterState, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-20">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-bold text-slate-800">Filters</h2>
          <button
            onClick={() => onChange({ minFees: '0', maxFees: '500000', minRating: '3.5' })}
            className="text-xs text-blue-600 font-medium hover:text-blue-700"
          >
            Clear all
          </button>
        </div>

        {/* Max Fees */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Max Fees: <span className="text-blue-600 font-semibold">₹{(parseInt(filters.maxFees) / 100000).toFixed(0)}L</span>
          </label>
          <input
            type="range"
            min={50000}
            max={2000000}
            step={50000}
            value={filters.maxFees}
            onChange={(e) => handleChange('maxFees', e.target.value)}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>₹50K</span><span>₹20L</span>
          </div>
        </div>

        {/* Min Fees */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Min Fees: <span className="text-blue-600 font-semibold">₹{(parseInt(filters.minFees) / 100000).toFixed(0)}L</span>
          </label>
          <input
            type="range"
            min={0}
            max={2000000}
            step={50000}
            value={filters.minFees}
            onChange={(e) => handleChange('minFees', e.target.value)}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>₹0</span><span>₹20L</span>
          </div>
        </div>

        {/* Min Rating */}
        <div className="mb-2">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Min Rating: <span className="text-blue-600 font-semibold">{filters.minRating}★</span>
          </label>
          <input
            type="range"
            min={0}
            max={5}
            step={0.5}
            value={filters.minRating}
            onChange={(e) => handleChange('minRating', e.target.value)}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>0★</span><span>5★</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

        
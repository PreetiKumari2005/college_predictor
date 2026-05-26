import * as React from "react";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, children, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {/* Label block if provided */}
        {label && (
          <label className="text-sm font-semibold text-slate-700">
            {label}
          </label>
        )}
        
        {/* Select Wrapper with custom modern arrow icon styling */}
        <div className="relative w-full">
          <select
            ref={ref}
            className={`w-full appearance-none bg-white border rounded-lg px-3 py-2 text-sm text-slate-900 shadow-sm transition-all focus:outline-none focus:ring-2 focus:border-transparent cursor-pointer
              ${error 
                ? "border-red-500 focus:ring-red-500" 
                : "border-slate-300 focus:ring-blue-500 focus:border-blue-500"
              } 
              ${className || ""}`}
            {...props}
          >
            {children}
          </select>
          
          {/* Custom SVG Down Arrow Dropdown Accent */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Error messaging flag */}
        {error && (
          <span className="text-xs text-red-500 font-medium">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
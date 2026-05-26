import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "College Discovery Platform",
  description: "Explore top colleges, packages, and check your exam cutoffs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        
        {/* GLOBAL NAVIGATION BAR */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            
            {/* Logo Group */}
            <div className="flex items-center gap-2">
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                🎓 CampusFind
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/colleges" className="text-slate-600 hover:text-blue-600 transition-colors">
                Colleges
              </Link>
              <Link href="/predictor" className="text-slate-600 hover:text-blue-600 transition-colors">
                Cutoff Predictor
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center">
              <Link 
                href="/predictor" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-all"
              >
                Check Admission Eligibility
              </Link>
            </div>
          </div>
        </header>

        {/* MAIN PAGE CONTENT WRAPPER */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-white border-t border-slate-200 py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <p>&copy; {new Date().getFullYear()} CampusFind Platform. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span className="hover:underline cursor-pointer">Terms of Service</span>
              <span className="hover:underline cursor-pointer">Contact Support</span>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
"use client";

import {
  Search,
  Bell,
  Sun,
  Menu,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 h-20 border-b border-white/5 bg-[#080F24]/90 backdrop-blur-xl">
      
      <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* Mobile Menu */}
        <button className="rounded-lg p-2 text-slate-300 hover:bg-white/5 lg:hidden">
          <Menu className="h-6 w-6" />
        </button>

        {/* Search */}
        <div className="relative hidden max-w-2xl flex-1 sm:block">

          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search applications..."
            className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] pl-12 pr-20 text-sm text-white outline-none placeholder:text-slate-500 focus:border-purple-500/50"
          />

          <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-white/10 px-2 py-1 text-xs text-slate-500">
            Ctrl K
          </span>

        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">

          <button className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 hover:bg-white/10 sm:block">
            <Sun className="h-5 w-5" />
          </button>

          <button className="relative rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-300 hover:bg-white/10">
            
            <Bell className="h-5 w-5" />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[10px] font-bold">
              3
            </span>

          </button>

          {/* User */}
          <div className="hidden items-center gap-3 sm:flex">

            <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-700">
              {/* profile image later */}
            </div>

            <div className="hidden lg:block">
              <p className="text-sm font-medium">
                Basil
              </p>

              <p className="text-xs text-slate-400">
                Frontend Developer
              </p>
            </div>

          </div>

        </div>

      </div>

    </header>
  );
}
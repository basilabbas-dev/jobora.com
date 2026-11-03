
"use client";

import { Search } from "lucide-react";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  activeFilter: string;
  setActiveFilter: (value: string) => void;
};

const filters = ["All", "Scheduled", "Completed", "Cancelled"];

export default function InterviewFilters({
  search,
  setSearch,
  activeFilter,
  setActiveFilter,
}: Props) {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search company or job role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-[#101832] py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
        />
      </div>

      {/* Status Filters */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? "bg-violet-600 text-white"
                : "border border-white/10 bg-[#101832] text-slate-400 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

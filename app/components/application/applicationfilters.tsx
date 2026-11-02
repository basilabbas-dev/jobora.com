
"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface ApplicationFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  activeFilter: string;
  setActiveFilter: (value: string) => void;
}

const filters = [
  "All",
  "Applied",
  "Shortlisted",
  "Interview",
  "Offer",
  "Rejected",
];

export default function ApplicationFilters({
  search,
  setSearch,
  activeFilter,
  setActiveFilter,
}: ApplicationFiltersProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#101832] p-4 sm:p-5">

      {/* Search */}
      <div className="flex flex-col gap-4 sm:flex-row">

        <div className="relative flex-1">
          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by company or job title..."
            className="h-12 w-full rounded-xl border border-white/10 bg-[#0B132B] pl-12 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
          />
        </div>

        <button
          type="button"
          className="flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#0B132B] px-5 text-sm text-slate-300 transition hover:bg-white/5"
        >
          <SlidersHorizontal size={17} />
          Filters
        </button>

      </div>

      {/* Status Tabs */}
      <div className="mt-5 overflow-x-auto">
        <div className="flex min-w-max items-center gap-2">

          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg px-4 py-2.5 text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-violet-600 text-white"
                  : "bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}

        </div>
      </div>

    </section>
  );
}

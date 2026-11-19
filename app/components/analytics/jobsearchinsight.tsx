"use client";

import {
  Target,
  TrendingUp,
  MessageSquare,
  XCircle,
} from "lucide-react";

const insights = [
  {
    title: "Application → Interview",
    value: ((8 / 32) * 100).toFixed(1) + "%",
    description: "Applications leading to interviews",
    icon: Target,
    color: "#8B5CF6",
  },
  {
    title: "Interview → Offer",
    value: ((2 / 8) * 100).toFixed(1) + "%",
    description: "Interviews leading to offers",
    icon: TrendingUp,
    color: "#10B981",
  },
  {
    title: "Response Rate",
    value: ((20 / 32) * 100).toFixed(1) + "%",
    description: "Companies that responded",
    icon: MessageSquare,
    color: "#06B6D4",
  },
  {
    title: "Rejection Rate",
    value: ((3 / 32) * 100).toFixed(1) + "%",
    description: "Applications rejected",
    icon: XCircle,
    color: "#F43F5E",
  },
];

export default function JobSearchInsights() {
  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div>
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          Job Search Insights
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Understand how effective your job search is.
        </p>
      </div>

      {/* Insights Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {insights.map((insight) => {
          const Icon = insight.icon;

          return (
            <div
              key={insight.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-200"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-3">
                <div
                  className="rounded-lg p-2"
                  style={{
                    backgroundColor: `${insight.color}18`,
                    color: insight.color,
                  }}
                >
                  <Icon size={20} />
                </div>

                <h3 className="text-sm font-medium text-[var(--muted)]">
                  {insight.title}
                </h3>
              </div>

              {/* Percentage */}
              <h2 className="mt-5 text-3xl font-bold text-[var(--foreground)]">
                {insight.value}
              </h2>

              {/* Description */}
              <p className="mt-2 text-xs text-[var(--muted)]">
                {insight.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
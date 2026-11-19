
"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { status: "Applied", count: 12, color: "#8B5CF6" },
  { status: "Shortlisted", count: 7, color: "#06B6D4" },
  { status: "Interview", count: 8, color: "#F59E0B" },
  { status: "Offer", count: 2, color: "#10B981" },
  { status: "Rejected", count: 3, color: "#F43F5E" },
];

const total = data.reduce((sum, item) => sum + item.count, 0);

export default function ApplicationStatusChart() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          Application Status
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Breakdown of all your applications
        </p>
      </div>

      {/* Donut Chart */}
      <div className="relative h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="count"
              nameKey="status"
              innerRadius={72}
              outerRadius={100}
              paddingAngle={4}
              stroke="none"
            >
              {data.map((item) => (
                <Cell key={item.status} fill={item.color} />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                color: "var(--foreground)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Text */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-[var(--foreground)]">
            {total}
          </span>
          <span className="text-sm text-[var(--muted)]">
            Applications
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {data.map((item) => (
          <div
            key={item.status}
            className="flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-[var(--muted)]">
                {item.status}
              </span>
            </div>

            <span className="text-sm font-medium text-[var(--foreground)]">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

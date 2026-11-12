
"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const statusData = [
  { name: "Applied", value: 12, color: "#8B5CF6" },
  { name: "Shortlisted", value: 7, color: "#06B6D4" },
  { name: "Interview", value: 8, color: "#F59E0B" },
  { name: "Offer", value: 2, color: "#3B82F6" },
  { name: "Rejected", value: 3, color: "#EC4899" },
];

const total = statusData.reduce(
  (sum, item) => sum + item.value,
  0
);

export default function StatusChart() {
  return (
    <section className="min-w-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors duration-200 sm:p-5">
      <h2 className="mb-5 text-base font-semibold text-[var(--foreground)] sm:text-lg">
        Applications by Status
      </h2>

      <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-2">
        {/* Donut chart */}
        <div className="relative mx-auto h-52 w-full min-w-0 max-w-64 sm:h-56">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="62%"
                outerRadius="88%"
                paddingAngle={2}
                stroke="none"
              >
                {statusData.map((item) => (
                  <Cell
                    key={item.name}
                    fill={item.color}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  color: "var(--foreground)",
                  fontSize: "12px",
                }}
                formatter={(value, name) => [
                  `${value} applications`,
                  name,
                ]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Center label */}
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-[var(--foreground)]">
              {total}
            </span>
            <span className="mt-1 text-xs text-[var(--muted)]">
              Total
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-4">
          {statusData.map((item) => {
            const percentage = Math.round(
              (item.value / total) * 100
            );

            return (
              <div
                key={item.name}
                className="flex items-center justify-between gap-3 text-sm"
              >
                <div className="flex min-w-0 items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />

                  <span className="truncate text-[var(--muted)]">
                    {item.name}
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-[var(--foreground)]">
                    {item.value}
                  </span>

                  <span className="w-9 text-right text-[var(--muted)]">
                    {percentage}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jun", applications: 3 },
  { month: "Jul", applications: 5 },
  { month: "Aug", applications: 4 },
  { month: "Sep", applications: 7 },
  { month: "Oct", applications: 6 },
  { month: "Nov", applications: 7 },
];

export default function ApplicationActivityChart() {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          Application Activity
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Applications submitted over the last 6 months
        </p>
      </div>

      {/* Chart */}
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="applicationGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#8B5CF6"
                  stopOpacity={0.3}
                />
                <stop
                  offset="100%"
                  stopColor="#8B5CF6"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="var(--border)"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--muted)", fontSize: 12 }}
            />

            <YAxis
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--muted)", fontSize: 12 }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                color: "var(--foreground)",
              }}
              labelStyle={{ color: "var(--foreground)" }}
            />

            <Area
              type="monotone"
              dataKey="applications"
              stroke="#8B5CF6"
              strokeWidth={3}
              fill="url(#applicationGradient)"
              activeDot={{
                r: 5,
                stroke: "#8B5CF6",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
    
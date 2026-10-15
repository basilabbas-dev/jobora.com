
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

const chartData = [
  { month: "Apr", applications: 3 },
  { month: "May", applications: 5 },
  { month: "Jun", applications: 4 },
  { month: "Jul", applications: 7 },
  { month: "Aug", applications: 10 },
  { month: "Sep", applications: 14 },
  { month: "Oct", applications: 10 },
];

export default function ApplicationsChart() {
  return (
    <section className="min-w-0 rounded-2xl border border-white/10 bg-[#101832] p-4 sm:p-5">
      {/* Chart heading */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-base font-semibold text-white sm:text-lg">
          <span className="mr-2 text-purple-400">▥</span>
          Applications Overview
        </h2>

        <select
          defaultValue="6"
          aria-label="Chart time period"
          className="rounded-lg border border-white/10 bg-[#141E3B] px-3 py-2 text-xs text-slate-300 outline-none focus:border-purple-400 sm:text-sm"
        >
          <option value="3">Last 3 Months</option>
          <option value="6">Last 6 Months</option>
          <option value="12">Last 12 Months</option>
        </select>
      </div>

      {/* Responsive chart */}
      <div className="h-56 w-full sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 8, right: 8, left: -18, bottom: 0 }}
          >
            <defs>
              <linearGradient
                id="applicationsGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#8B5CF6"
                  stopOpacity={0.4}
                />
                <stop
                  offset="100%"
                  stopColor="#8B5CF6"
                  stopOpacity={0.02}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#26314F"
              strokeDasharray="3 3"
              vertical
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#A5B4D4", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />

            <YAxis
              domain={[0, 15]}
              ticks={[0, 5, 10, 15]}
              tick={{ fill: "#A5B4D4", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={30}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#101832",
                border: "1px solid #334166",
                borderRadius: "12px",
                color: "#FFFFFF",
                fontSize: "12px",
              }}
              formatter={(value) => [
                `${value} applications`,
                "Applications",
              ]}
              labelStyle={{ color: "#C4B5FD" }}
            />

            <Area
              type="monotone"
              dataKey="applications"
              stroke="#9B72F5"
              strokeWidth={2.5}
              fill="url(#applicationsGradient)"
              dot={{
                r: 3,
                fill: "#A78BFA",
                stroke: "#101832",
                strokeWidth: 1.5,
              }}
              activeDot={{
                r: 6,
                fill: "#C4B5FD",
                stroke: "#FFFFFF",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

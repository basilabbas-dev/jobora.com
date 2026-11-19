"use client";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const interviewData = [
  { status: "Scheduled", count: 5, color: "#8B5CF6" },
  { status: "Completed", count: 6, color: "#10B981" },
  { status: "Cancelled", count: 1, color: "#F43F5E" },
];

export default function InterviewPerformanceChart() {
  return (
    <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-200">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          Interview Performance
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Overview of your interview activity
        </p>
      </div>

      {/* Chart */}
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={interviewData}
            margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid
              stroke="var(--border)"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="status"
              tick={{ fill: "var(--muted)", fontSize: 12 }}
              axisLine={{ stroke: "var(--border)" }}
              tickLine={false}
            />

            <YAxis
              allowDecimals={false}
              tick={{ fill: "var(--muted)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{ fill: "var(--surface-secondary)" }}
              contentStyle={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                color: "var(--foreground)",
              }}
              labelStyle={{ color: "var(--foreground)" }}
            />

           <Bar
            dataKey="count"
            name="Interviews"
            radius={[6, 6, 0, 0]}
            barSize={45}
            >
            {interviewData.map((item) => (
                <Cell key={item.status} fill={item.color} />
            ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
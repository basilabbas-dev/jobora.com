import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  percentage: number;
  icon: LucideIcon;
  color: string;
  trend: "up" | "down";
}

export default function StatCard({
  title,
  value,
  percentage,
  icon: Icon,
  color,
  trend,
}: StatCardProps) {
  const isUp = trend === "up";

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        p-5
        transition
        duration-300
        hover:-translate-y-1
        hover:border-white/20
      "
      style={{
        background: `linear-gradient(135deg, ${color}18, rgba(15, 23, 42, 0.8))`,
      }}
    >

      {/* Top */}
      <div className="flex items-start justify-between">

        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `${color}30`,
          }}
        >
          <Icon
            className="h-6 w-6"
            style={{ color }}
          />
        </div>

      </div>

      {/* Content */}
      <div className="mt-5">

        <p className="text-sm text-slate-400">
          {title}
        </p>

        <p className="mt-1 text-3xl font-semibold text-white">
          {value}
        </p>

      </div>

      {/* Bottom */}
      <div className="mt-4 flex items-center gap-2">

        {isUp ? (
          <TrendingUp className="h-4 w-4 text-emerald-400" />
        ) : (
          <TrendingDown className="h-4 w-4 text-pink-400" />
        )}

        <span
          className={
            isUp
              ? "text-sm font-medium text-emerald-400"
              : "text-sm font-medium text-pink-400"
          }
        >
          {isUp ? "+" : "-"}
          {percentage}%
        </span>

        <span className="text-xs text-slate-500">
          vs last month
        </span>

      </div>

      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl opacity-20"
        style={{
          backgroundColor: color,
        }}
      />

    </div>
  );
}
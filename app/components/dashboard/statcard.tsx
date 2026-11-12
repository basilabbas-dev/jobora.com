
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
        border-[var(--border)]
        bg-[var(--surface)]
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-violet-400/40
      "
      style={{
        background: `linear-gradient(135deg, ${color}18, var(--surface))`,
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
        <p className="text-sm text-[var(--muted)]">
          {title}
        </p>

        <p className="mt-1 text-3xl font-semibold text-[var(--foreground)]">
          {value}
        </p>
      </div>

      {/* Bottom */}
      <div className="mt-4 flex items-center gap-2">
        {isUp ? (
          <TrendingUp className="h-4 w-4 text-emerald-500 dark:text-emerald-400" />
        ) : (
          <TrendingDown className="h-4 w-4 text-pink-500 dark:text-pink-400" />
        )}

        <span
          className={
            isUp
              ? "text-sm font-medium text-emerald-600 dark:text-emerald-400"
              : "text-sm font-medium text-pink-600 dark:text-pink-400"
          }
        >
          {isUp ? "+" : "-"}
          {percentage}%
        </span>

        <span className="text-xs text-[var(--muted)]">
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

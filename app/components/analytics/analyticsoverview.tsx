
import {
  BriefcaseBusiness,
  Users,
  Trophy,
  Target,
} from "lucide-react";

const stats = [
  {
    title: "Total Applications",
    value: "32",
    change: "+12% vs last month",
    icon: BriefcaseBusiness,
    color: "#8B5CF6",
  },
  {
    title: "Interviews",
    value: "8",
    change: "+2 vs last month",
    icon: Users,
    color: "#06B6D4",
  },
  {
    title: "Offers",
    value: "2",
    change: "+1 vs last month",
    icon: Trophy,
    color: "#F59E0B",
  },
  {
    title: "Success Rate",
    value: "6.25%",
    change: "+2.5% vs last month",
    icon: Target,
    color: "#10B981",
  },
];

export default function AnalyticsOverview() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-[var(--muted)]">
                {stat.title}
              </p>

              <div
                className="rounded-lg p-2"
                style={{
                  backgroundColor: `${stat.color}18`,
                  color: stat.color,
                }}
              >
                <Icon size={20} />
              </div>
            </div>

            <h2 className="mt-4 text-2xl font-bold text-[var(--foreground)]">
              {stat.value}
            </h2>

            <p className="mt-2 text-xs font-medium text-emerald-500">
              ↑ {stat.change}
            </p>
          </div>
        );
      })}
    </section>
  );
}

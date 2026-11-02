
import {
  BriefcaseBusiness,
  Clock3,
  Users,
  Trophy,
} from "lucide-react";

const stats = [
  {
    title: "Total Applications",
    value: 32,
    icon: BriefcaseBusiness,
    color: "#A78BFA",
    bg: "bg-violet-500/10",
  },
  {
    title: "In Progress",
    value: 15,
    icon: Clock3,
    color: "#22D3EE",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Interviews",
    value: 8,
    icon: Users,
    color: "#F59E0B",
    bg: "bg-amber-500/10",
  },
  {
    title: "Offers",
    value: 2,
    icon: Trophy,
    color: "#34D399",
    bg: "bg-emerald-500/10",
  },
];

export default function ApplicationStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-white/10 bg-[#101832] p-5 transition hover:border-white/20"
          >
            <div className="flex items-center justify-between">

              <p className="text-sm text-slate-400">
                {stat.title}
              </p>

              <div className={`rounded-xl p-3 ${stat.bg}`}>
                <Icon
                  size={21}
                  style={{ color: stat.color }}
                />
              </div>

            </div>

            <h2 className="mt-4 text-3xl font-semibold text-white">
              {stat.value}
            </h2>

          </div>
        );
      })}

    </div>
  );
}

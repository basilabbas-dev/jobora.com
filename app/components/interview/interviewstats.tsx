
import { CalendarDays, Clock, CheckCircle2, XCircle } from "lucide-react";

const stats = [
  {
    title: "Total Interviews",
    value: "12",
    icon: CalendarDays,
  },
  {
    title: "Upcoming",
    value: "5",
    icon: Clock,
  },
  {
    title: "Completed",
    value: "6",
    icon: CheckCircle2,
  },
  {
    title: "Cancelled",
    value: "1",
    icon: XCircle,
  },
];

export default function InterviewStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-xl border border-white/10 bg-[#101832] p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">{stat.title}</p>

              <div className="rounded-lg bg-violet-500/10 p-2 text-violet-300">
                <Icon size={19} />
              </div>
            </div>

            <h2 className="mt-4 text-2xl font-bold text-white">
              {stat.value}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

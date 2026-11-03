
import {
  Building2,
  CalendarDays,
  Clock,
  Video,
  MapPin,
  MoreHorizontal,
} from "lucide-react";

export type Interview = {
  id: number;
  company: string;
  role: string;
  date: string;
  time: string;
  type: string;
  mode: string;
  status: "Scheduled" | "Completed" | "Cancelled";
};

type Props = {
  interviews: Interview[];
};

export default function InterviewsList({ interviews }: Props) {
  return (
    <div className="space-y-4">
      {interviews.length > 0 ? (
        interviews.map((interview) => (
          <div
            key={interview.id}
            className="rounded-xl border border-white/10 bg-[#101832] p-5"
          >
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                  <Building2 size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {interview.company}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {interview.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 sm:justify-end">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    interview.status === "Scheduled"
                      ? "bg-violet-500/10 text-violet-300"
                      : interview.status === "Completed"
                      ? "bg-emerald-500/10 text-emerald-300"
                      : "bg-red-500/10 text-red-300"
                  }`}
                >
                  {interview.status}
                </span>

                <button
                  type="button"
                  aria-label={`More actions for ${interview.company}`}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4 border-t border-white/10 pt-5 sm:grid-cols-2 xl:grid-cols-4">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CalendarDays size={17} className="text-violet-300" />
                {interview.date}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Clock size={17} className="text-violet-300" />
                {interview.time}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Video size={17} className="text-violet-300" />
                {interview.type}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-300">
                <MapPin size={17} className="text-violet-300" />
                {interview.mode}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="rounded-xl border border-white/10 bg-[#101832] py-12 text-center">
          <p className="text-sm text-slate-400">
            No interviews found.
          </p>
        </div>
      )}
    </div>
  );
}


"use client";

import { ChevronRight } from "lucide-react";

const applications = [
  {
    id: 1,
    company: "Google",
    logo: "G",
    logoColor: "#4285F4",
    position: "Frontend Developer",
    location: "Bangalore",
    status: "Interview",
    date: "Oct 2, 2026",
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "▦",
    logoColor: "#38BDF8",
    position: "React Developer",
    location: "Hyderabad",
    status: "Shortlisted",
    date: "Sep 28, 2026",
  },
  {
    id: 3,
    company: "TCS",
    logo: "tcs",
    logoColor: "#F472B6",
    position: "Frontend Developer",
    location: "Mumbai",
    status: "Applied",
    date: "Sep 25, 2026",
  },
  {
    id: 4,
    company: "Amazon",
    logo: "a",
    logoColor: "#FFFFFF",
    position: "Web Developer",
    location: "Bangalore",
    status: "Rejected",
    date: "Sep 20, 2026",
  },
  {
    id: 5,
    company: "Infosys",
    logo: "Infosys",
    logoColor: "#38BDF8",
    position: "React Developer",
    location: "Pune",
    status: "Shortlisted",
    date: "Sep 18, 2026",
  },
];

const statusStyles: Record<string, string> = {
  Applied: "bg-violet-500/20 text-violet-300 border-violet-400/20",
  Shortlisted: "bg-cyan-500/20 text-cyan-300 border-cyan-400/20",
  Interview: "bg-emerald-500/20 text-emerald-300 border-emerald-400/20",
  Offer: "bg-amber-500/20 text-amber-300 border-amber-400/20",
  Rejected: "bg-rose-500/20 text-rose-300 border-rose-400/20",
};

export default function RecentApplications() {
  return (
    <section className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#101832]">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 p-4 sm:p-5">
        <h2 className="text-base font-semibold text-white sm:text-lg">
          Recent Applications
        </h2>

        <button
          type="button"
          onClick={() => {
            window.location.href = "/applications";
          }}
          className="shrink-0 text-sm text-violet-400 transition hover:text-violet-300"
        >
          View All →
        </button>
      </div>

      {/* Responsive table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-white/[0.03] text-xs text-slate-400">
              <th className="px-4 py-3 font-medium sm:px-5">#</th>
              <th className="px-4 py-3 font-medium">Company</th>
              <th className="px-4 py-3 font-medium">Position</th>
              <th className="px-4 py-3 font-medium">Location</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Applied On</th>
              <th className="px-4 py-3 text-center font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className="border-t border-white/5 transition hover:bg-white/[0.025]"
              >
                <td className="px-4 py-3.5 text-slate-300 sm:px-5">
                  {app.id}
                </td>

                <td className="px-4 py-3.5">
                  <div
                    title={app.company}
                    className="flex h-9 w-12 items-center justify-center"
                  >
                    <span
                      className="font-bold"
                      style={{
                        color: app.logoColor,
                        fontSize:
                          app.company === "Infosys" ? "15px" : "24px",
                      }}
                    >
                      {app.logo}
                    </span>
                  </div>
                </td>

                <td className="whitespace-nowrap px-4 py-3.5 font-medium text-slate-100">
                  {app.position}
                </td>

                <td className="whitespace-nowrap px-4 py-3.5 text-slate-300">
                  {app.location}
                </td>

                <td className="px-4 py-3.5">
                  <span
                    className={`inline-flex whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-medium ${
                      statusStyles[app.status]
                    }`}
                  >
                    {app.status}
                  </span>
                </td>

                <td className="whitespace-nowrap px-4 py-3.5 text-slate-300">
                  {app.date}
                </td>

                <td className="px-4 py-3.5 text-center">
                  <button
                    type="button"
                    aria-label={`View ${app.company} application`}
                    onClick={() =>
                      window.location.assign(
                        `/applications?applicationId=${app.id}`
                      )
                    }
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="border-t border-white/5 px-5 py-3 text-xs text-slate-500">
        Showing {applications.length} recent applications
      </div>
    </section>
  );
}


"use client";

import { Building2, MoreHorizontal } from "lucide-react";

type Application = {
  id: number;
  company: string;
  role: string;
  location: string;
  appliedDate: string;
  status: string;
};

type Props = {
  applications: Application[];
};

export default function ApplicationsTable({ applications }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#101832]">
      <div className="border-b border-white/10 p-5">
        <h2 className="text-lg font-semibold text-white">
          All Applications
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Manage and track your job applications
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px] text-left">
          <thead className="bg-white/[0.03] text-xs uppercase text-slate-400">
            <tr>
              <th className="px-5 py-4">Company</th>
              <th className="px-5 py-4">Job Role</th>
              <th className="px-5 py-4">Location</th>
              <th className="px-5 py-4">Applied Date</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/10">
            {applications.length > 0 ? (
              applications.map((app) => (
                <tr
                  key={app.id}
                  className="transition hover:bg-white/[0.03]"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                        <Building2 size={18} />
                      </div>
                      <span className="font-medium text-white">
                        {app.company}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-300">
                    {app.role}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-400">
                    {app.location}
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-400">
                    {app.appliedDate}
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
                      {app.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <button
                      type="button"
                      aria-label={`More actions for ${app.company}`}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="px-5 py-12 text-center text-sm text-slate-400"
                >
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

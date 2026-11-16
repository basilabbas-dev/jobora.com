
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
    <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition-colors duration-200">

      {/* Header */}
      <div className="border-b border-[var(--border)] p-5">
        <h2 className="text-lg font-semibold text-[var(--foreground)]">
          All Applications
        </h2>

        <p className="mt-1 text-sm text-[var(--muted)]">
          Manage and track your job applications
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[750px] text-left">

          <thead className="bg-[var(--surface-secondary)] text-xs uppercase text-[var(--muted)]">
            <tr>
              <th className="px-5 py-4">Company</th>
              <th className="px-5 py-4">Job Role</th>
              <th className="px-5 py-4">Location</th>
              <th className="px-5 py-4">Applied Date</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[var(--border)]">
            {applications.length > 0 ? (
              applications.map((app) => (
                <tr
                  key={app.id}
                  className="transition hover:bg-[var(--surface-secondary)]"
                >
                  {/* Company */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500 dark:text-violet-300">
                        <Building2 size={18} />
                      </div>

                      <span className="font-medium text-[var(--foreground)]">
                        {app.company}
                      </span>
                    </div>
                  </td>

                  {/* Job Role */}
                  <td className="px-5 py-4 text-sm text-[var(--foreground)]">
                    {app.role}
                  </td>

                  {/* Location */}
                  <td className="px-5 py-4 text-sm text-[var(--muted)]">
                    {app.location}
                  </td>

                  {/* Applied Date */}
                  <td className="px-5 py-4 text-sm text-[var(--muted)]">
                    {app.appliedDate}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-600 dark:text-violet-300">
                      {app.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-5 py-4">
                    <button
                      type="button"
                      aria-label={`More actions for ${app.company}`}
                      className="rounded-lg p-2 text-[var(--muted)] transition hover:bg-[var(--surface-secondary)] hover:text-[var(--foreground)]"
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
                  className="px-5 py-12 text-center text-sm text-[var(--muted)]"
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

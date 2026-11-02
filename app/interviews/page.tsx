
import { Plus } from "lucide-react";

import DashboardLayout from "../components/dashboard/dashboardlayout";
import InterviewStats from "../components/interview/interviewstats";
import InterviewsList from "../components/interview/interviewlist";

export default function InterviewsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Interviews
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Manage and track your upcoming and completed interviews.
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500">
            <Plus size={18} />
            Schedule Interview
          </button>
        </div>

        {/* Interview Statistics */}
        <InterviewStats />

        {/* Interview List */}
        <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
                All Interviews
            </h2>

            <InterviewsList />
            </div>
      </div>
    </DashboardLayout>
  );
}

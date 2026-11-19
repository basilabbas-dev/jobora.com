
import DashboardLayout from "../components/dashboard/dashboardlayout";
import AnalyticsOverview from "../components/analytics/analyticsoverview";
import ApplicationActivityChart from "../components/analytics/applicationactivitychart";
import ApplicationStatusChart from "../components/analytics/applicationstatuschart";
import InterviewPerformanceChart from "../components/analytics/interviewperformancechart";
import JobSearchInsights from "../components/analytics/jobsearchinsight";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
              Analytics
            </h1>

            <p className="mt-2 text-sm text-[var(--muted)]">
              Track your job search performance and progress.
            </p>
          </div>

          <select
            defaultValue="30"
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-violet-500 sm:w-48"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 3 months</option>
            <option value="year">This year</option>
          </select>
        </div>

        <AnalyticsOverview />
        
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <ApplicationActivityChart />
          <ApplicationStatusChart />
        </div>

        <InterviewPerformanceChart />
        <JobSearchInsights />

      </div>
    </DashboardLayout>
  );
}


"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import DashboardLayout from "../components/dashboard/dashboardlayout";
import InterviewStats from "../components/interview/interviewstats";
import InterviewFilters from "../components/interview/interviewfilter";
import InterviewsList, {
  type Interview,
} from "../components/interview/interviewlist";
import ScheduleInterviewModal from "../components/interview/scheduleinterview";

const initialInterviews: Interview[] = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    date: "2026-11-05",
    time: "10:30",
    type: "Technical Round",
    mode: "Online",
    status: "Scheduled",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "React Developer",
    date: "2026-11-07",
    time: "14:00",
    type: "HR Round",
    mode: "Online",
    status: "Scheduled",
  },
  {
    id: 3,
    company: "Infosys",
    role: "Web Developer",
    date: "2026-10-28",
    time: "11:00",
    type: "Technical Round",
    mode: "On-site",
    status: "Completed",
  },
  {
    id: 4,
    company: "TCS",
    role: "UI Developer",
    date: "2026-11-10",
    time: "15:00",
    type: "HR Round",
    mode: "Online",
    status: "Cancelled",
  },
];

export default function InterviewsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const [showModal, setShowModal] = useState(false);

  const [interviewList, setInterviewList] =
    useState<Interview[]>(initialInterviews);

  // Add new interview
  const handleAddInterview = (
    newInterview: Omit<Interview, "id" | "status">
  ) => {
    const interviewWithId: Interview = {
      ...newInterview,
      id: Date.now(),
      status: "Scheduled",
    };

    setInterviewList((prev) => [...prev, interviewWithId]);
  };

  // Search and status filtering
  const filteredInterviews = interviewList.filter((interview) => {
    const matchesSearch =
      interview.company.toLowerCase().includes(search.toLowerCase()) ||
      interview.role.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      activeFilter === "All" || interview.status === activeFilter;

    return matchesSearch && matchesStatus;
  });

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

          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
          >
            <Plus size={18} />
            Schedule Interview
          </button>
        </div>

        {/* Statistics */}
        <InterviewStats />

        {/* Search and Filters */}
        <InterviewFilters
          search={search}
          setSearch={setSearch}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Interview List */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-white">
            All Interviews
          </h2>

          <InterviewsList interviews={filteredInterviews} />
        </div>

        <p className="text-sm text-slate-500">
          Showing {filteredInterviews.length} of {interviewList.length} interviews
        </p>
      </div>

      {/* Schedule Interview Modal */}
      {showModal && (
        <ScheduleInterviewModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddInterview}
        />
      )}
    </DashboardLayout>
  );
}

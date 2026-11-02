
"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import DashboardLayout from "../components/dashboard/dashboardlayout";
import ApplicationStats from "../components/application/applicationstats";
import ApplicationFilters from "../components/application/applicationfilters";
import ApplicationsTable from "../components/application/applicationtable";

const applications = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    location: "Remote",
    appliedDate: "Oct 25, 2026",
    status: "Interview",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "React Developer",
    location: "Hyderabad",
    appliedDate: "Oct 22, 2026",
    status: "Applied",
  },
  {
    id: 3,
    company: "Infosys",
    role: "Frontend Developer",
    location: "Ahmedabad",
    appliedDate: "Oct 20, 2026",
    status: "Shortlisted",
  },
  {
    id: 4,
    company: "TCS",
    role: "Web Developer",
    location: "Gandhinagar",
    appliedDate: "Oct 18, 2026",
    status: "Rejected",
  },
  {
    id: 5,
    company: "Amazon",
    role: "UI Developer",
    location: "Remote",
    appliedDate: "Oct 15, 2026",
    status: "Offer",
  },
];

export default function ApplicationsPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.company.toLowerCase().includes(search.toLowerCase()) ||
      app.role.toLowerCase().includes(search.toLowerCase()) ||
      app.location.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      activeFilter === "All" || app.status === activeFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Applications
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Track and manage all your job applications.
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500">
            <Plus size={18} />
            Add Application
          </button>
        </div>

        <ApplicationStats />

        <ApplicationFilters
          search={search}
          setSearch={setSearch}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <ApplicationsTable applications={filteredApplications} />

        <p className="text-sm text-slate-500">
          Showing {filteredApplications.length} of {applications.length} applications
        </p>
      </div>
    </DashboardLayout>
  );
}

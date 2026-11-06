
"use client";

import { useState } from "react";
import { X } from "lucide-react";

type InterviewFormData = {
  company: string;
  role: string;
  date: string;
  time: string;
  type: string;
  mode: string;
};

type Props = {
  onClose: () => void;
  onAdd: (interview: InterviewFormData) => void;
};

export default function ScheduleInterviewModal({
  onClose,
  onAdd,
}: Props) {
  const [formData, setFormData] = useState<InterviewFormData>({
    company: "",
    role: "",
    date: "",
    time: "",
    type: "Technical Round",
    mode: "Online",
  });

  // Update form values
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-xl border border-white/10 bg-[#101832] p-6 shadow-xl">

        {/* Modal Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Schedule Interview
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Add details about your upcoming interview.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Google"
              required
              className="w-full rounded-lg border border-white/10 bg-[#0B132B] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
            />
          </div>

          {/* Job Role */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Job Role
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g. Frontend Developer"
              required
              className="w-full rounded-lg border border-white/10 bg-[#0B132B] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Interview Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                required
                className="w-full rounded-lg border border-white/10 bg-[#0B132B] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Interview Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-white/10 bg-[#0B132B] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
              />
            </div>
          </div>

          {/* Interview Type */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Interview Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-[#0B132B] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
            >
              <option>Technical Round</option>
              <option>HR Round</option>
              <option>Managerial Round</option>
              <option>Coding Round</option>
            </select>
          </div>

          {/* Interview Mode */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Interview Mode
            </label>
            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              className="w-full rounded-lg border border-white/10 bg-[#0B132B] px-4 py-3 text-sm text-white outline-none focus:border-violet-500"
            >
              <option>Online</option>
              <option>On-site</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 border-t border-white/10 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-white/10 px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/5"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
            >
              Schedule Interview
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

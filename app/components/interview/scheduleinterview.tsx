
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAdd(formData);
    onClose();
  };

  const inputStyles =
    "w-full rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-violet-500";

  const labelStyles =
    "mb-2 block text-sm text-[var(--foreground)]";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl">

        {/* Modal Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">
              Schedule Interview
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Add details about your upcoming interview.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-[var(--muted)] transition hover:bg-[var(--surface-secondary)] hover:text-[var(--foreground)]"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Company Name */}
          <div>
            <label className={labelStyles}>
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Google"
              required
              className={inputStyles}
            />
          </div>

          {/* Job Role */}
          <div>
            <label className={labelStyles}>
              Job Role
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="e.g. Frontend Developer"
              required
              className={inputStyles}
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className={labelStyles}>
                Interview Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                required
                className={inputStyles}
              />
            </div>

            <div>
              <label className={labelStyles}>
                Interview Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className={inputStyles}
              />
            </div>
          </div>

          {/* Interview Type */}
          <div>
            <label className={labelStyles}>
              Interview Type
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={inputStyles}
            >
              <option>Technical Round</option>
              <option>HR Round</option>
              <option>Managerial Round</option>
              <option>Coding Round</option>
            </select>
          </div>

          {/* Interview Mode */}
          <div>
            <label className={labelStyles}>
              Interview Mode
            </label>
            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              className={inputStyles}
            >
              <option>Online</option>
              <option>On-site</option>
            </select>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-3 border-t border-[var(--border)] pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-[var(--border)] px-4 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-[var(--surface-secondary)]"
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

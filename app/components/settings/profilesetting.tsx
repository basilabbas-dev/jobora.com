
"use client";

import { useState } from "react";
import { User, Pencil, Save, X } from "lucide-react";

export default function ProfileSettings() {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("Basil Sunasara");
  const [email, setEmail] = useState("basil@example.com");
  const [role, setRole] = useState("Frontend Developer");

  return (
    <section className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-violet-500/10 p-3 text-violet-500">
            <User size={20} />
          </div>

          <div>
            <h2 className="font-semibold text-[var(--foreground)]">
              Profile Settings
            </h2>
            <p className="text-sm text-[var(--muted)]">
              Manage your personal details.
            </p>
          </div>
        </div>

        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--surface-secondary)]"
          >
            <Pencil size={15} />
            Edit
          </button>
        )}
      </div>

      {/* Fields */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-[var(--muted)]">
            Full Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={!isEditing}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-violet-500 disabled:opacity-80"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-[var(--muted)]">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEditing}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-violet-500 disabled:opacity-80"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-[var(--muted)]">
            Job Title
          </label>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            disabled={!isEditing}
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--foreground)] outline-none focus:border-violet-500 disabled:opacity-80"
          />
        </div>
      </div>

      {/* Actions */}
      {isEditing && (
        <div className="mt-5 flex justify-end gap-3">
          <button
            onClick={() => setIsEditing(false)}
            className="flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-sm text-[var(--foreground)] hover:bg-[var(--surface-secondary)]"
          >
            <X size={16} />
            Cancel
          </button>

          <button
            onClick={() => setIsEditing(false)}
            className="flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
          >
            <Save size={16} />
            Save Changes
          </button>
        </div>
      )}
    </section>
  );
}
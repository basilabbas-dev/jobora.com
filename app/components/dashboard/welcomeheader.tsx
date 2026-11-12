
"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";

export default function WelcomeHeader() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  });

  const formattedDate = new Date(
    Number(selectedDate.split("-")[0]),
    Number(selectedDate.split("-")[1]) - 1,
    Number(selectedDate.split("-")[2])
  ).toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <section className="mb-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Content */}
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Good Morning,{" "}
            <span className="text-purple-500 dark:text-purple-400">
              Basil!
            </span>{" "}
            👋
          </h1>

          <p className="mt-2 text-sm text-[var(--muted)] sm:text-base">
            Here is an overview of your job applications and progress.
          </p>
        </div>

        {/* Date Picker */}
        <label
          className="
            relative
            flex
            w-fit
            cursor-pointer
            items-center
            gap-3
            rounded-xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            px-4
            py-3
            text-sm
            text-[var(--foreground)]
            transition-colors
            duration-200
            hover:bg-[var(--surface-secondary)]
          "
        >
          <CalendarDays className="h-5 w-5 text-purple-500 dark:text-purple-400" />

          <span>{formattedDate}</span>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            aria-label="Select date"
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          />
        </label>

      </div>
    </section>
  );
}

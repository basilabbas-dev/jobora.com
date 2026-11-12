
"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Bell,
  Sun,
  Moon,
  Menu,
} from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Load saved theme when the component mounts
  useEffect(() => {
  const savedTheme = localStorage.getItem("hireflow-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.classList.toggle(
      "dark",
      savedTheme === "dark"
    );
  }
  }, []);

  // Switch between Light and Dark Mode
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );

    localStorage.setItem("hireflow-theme", newTheme);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)] px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between gap-4">

        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open navigation menu"
            className="rounded-lg p-2 text-[var(--muted)] hover:bg-[var(--surface-secondary)] lg:hidden"
          >
            <Menu size={22} />
          </button>

          <div className="relative hidden sm:block">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
            />

            <input
              type="search"
              placeholder="Search anything..."
              className="w-56 rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] py-2.5 pl-10 pr-4 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-violet-500 lg:w-72"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            title={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className="rounded-lg border border-[var(--border)] bg-[var(--surface-secondary)] p-2.5 text-[var(--foreground)] transition hover:opacity-75"
          >
            {theme === "dark" ? (
              <Sun size={19} />
            ) : (
              <Moon size={19} />
            )}
          </button>

          {/* Notifications */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative rounded-lg p-2.5 text-[var(--muted)] transition hover:bg-[var(--surface-secondary)] hover:text-[var(--foreground)]"
          >
            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-violet-500" />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 border-l border-[var(--border)] pl-3 sm:pl-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white">
              B
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-medium text-[var(--foreground)]">
                Basil
              </p>
              <p className="text-xs text-[var(--muted)]">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
  
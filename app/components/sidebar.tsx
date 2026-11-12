
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  CalendarDays,
  BarChart3,
  Settings,
  Zap,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Applications",
    href: "/applications",
    icon: BriefcaseBusiness,
  },
  {
    name: "Interviews",
    href: "/interviews",
    icon: CalendarDays,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 border-r border-[var(--border)] bg-[var(--surface-secondary)] transition-colors duration-200 lg:block">
      <div className="flex h-full flex-col">

        {/* Logo */}
        <div className="flex h-20 items-center gap-3 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-700">
            <Zap className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-[var(--foreground)]">
              HireFlow
            </h1>

            <p className="text-xs text-[var(--muted)]">
              Track. Apply. Grow.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-colors duration-200 ${
                    isActive
                      ? "bg-purple-500/15 text-purple-600 dark:text-purple-400"
                      : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
                  }`}
                >
                  <Icon className="h-5 w-5" />

                  <span className="font-medium">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

      </div>
    </aside>
  );
}

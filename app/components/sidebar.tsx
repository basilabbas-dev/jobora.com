"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BriefcaseBusiness,
  Columns3,
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
    name: "Kanban",
    href: "/kanban",
    icon: Columns3,
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
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 border-r border-white/5 bg-[#0B132B] lg:block">
      
      <div className="flex h-full flex-col">

        {/* Logo */}
        <div className="flex h-20 items-center gap-3 px-6">
          
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-violet-700">
            <Zap className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold">
              HireFlow
            </h1>

            <p className="text-xs text-slate-400">
              Track. Apply. Grow.
            </p>
          </div>

        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">

          <div className="space-y-2">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-4 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  <Icon className="h-5 w-5" />

                  <span>
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
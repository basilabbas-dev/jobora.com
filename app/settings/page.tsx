import DashboardLayout from "../components/dashboard/dashboardlayout";
import { User, Palette, Bell, LogOut } from "lucide-react";

const settings = [
  {
    title: "Profile",
    description: "Manage your personal information.",
    icon: User,
  },
  {
    title: "Appearance",
    description: "Change your dashboard theme.",
    icon: Palette,
  },
  {
    title: "Notifications",
    description: "Manage your notifications.",
    icon: Bell,
  },
  {
    title: "Account",
    description: "Manage your account settings.",
    icon: LogOut,
  },
];

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-[var(--foreground)] sm:text-3xl">
            Settings
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Manage your account and preferences.
          </p>
        </div>

        {/* Settings Cards */}
        <div className="space-y-4">
          {settings.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors"
              >
                <div className="rounded-lg bg-violet-500/10 p-3 text-violet-500">
                  <Icon size={20} />
                </div>

                <div>
                  <h2 className="font-medium text-[var(--foreground)]">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}
import {
  BriefcaseBusiness,
  Users,
  Star,
  XCircle,
} from "lucide-react";

import StatCard from "../dashboard/statcard";

const stats = [
  {
    title: "Total Applications",
    value: 32,
    percentage: 12,
    icon: BriefcaseBusiness,
    color: "#8B5CF6",
    trend: "up" as const,
  },
  {
    title: "Interviews",
    value: 8,
    percentage: 2,
    icon: Users,
    color: "#22D3EE",
    trend: "up" as const,
  },
  {
    title: "Offers",
    value: 2,
    percentage: 1,
    icon: Star,
    color: "#F59E0B",
    trend: "up" as const,
  },
  {
    title: "Rejected",
    value: 7,
    percentage: 3,
    icon: XCircle,
    color: "#F43F5E",
    trend: "down" as const,
  },
];

export default function StatsCards() {
  return (
    <section className="mb-6">

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
          />
        ))}

      </div>

    </section>
  );
}
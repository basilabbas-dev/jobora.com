
import DashboardLayout from "../components/dashboard/dashboardlayout";
import WelcomeHeader from "../components/dashboard/welcomeheader";
import StatsCards from "../components/dashboard/statscards";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <WelcomeHeader />

        <StatsCards />

  
      </div>
    </DashboardLayout>
  );
}

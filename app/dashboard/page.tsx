
import DashboardLayout from "../components/dashboard/dashboardlayout";
import WelcomeHeader from "../components/dashboard/welcomeheader";
import StatsCards from "../components/dashboard/statscards";
import ApplicationsChart from "../components/dashboard/applicationscharts";
import StatusChart from "../components/dashboard/statuschart";
import RecentApplications from "../components/dashboard/recentapplications";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <WelcomeHeader />

        <StatsCards />
        
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
          <div className="min-w-0 xl:col-span-7">
            <ApplicationsChart />
          </div>

          <div className="min-w-0 xl:col-span-5">
            <StatusChart />
          </div>
        </div>


        <RecentApplications />


  
      </div>
    </DashboardLayout>
  );
}

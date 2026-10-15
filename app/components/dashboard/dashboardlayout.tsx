import Sidebar from "../sidebar";
import Navbar from "../navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#070D20] text-white">
      
      <Sidebar />

      <div className="lg:ml-60">
        
        <Navbar />

        <main className="p-4 sm:p-6 lg:p-8">  
          {children}
        </main>

      </div>

    </div>
  );
}
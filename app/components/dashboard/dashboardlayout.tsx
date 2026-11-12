
import Sidebar from "../sidebar";
import Navbar from "../navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-200">

      <Sidebar />

      <div className="min-h-screen lg:ml-60">

        <Navbar />

        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}

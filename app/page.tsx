import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070d1f] text-white">

      <Sidebar />

      <div className="ml-60">

        <Navbar />

        <div className="space-y-6 p-6">

          
        </div>

      </div>

    </main>
  );
}
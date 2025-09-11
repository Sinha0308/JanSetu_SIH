import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import ComplaintsTable from "../components/ComplaintsTable";

export default function Dashboard({ onLogout }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar onLogout={onLogout} />

      <div className="flex flex-grow">
        <Sidebar />

        <main className="flex-grow p-6 space-y-6">
          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard title="Total Complaints" value="120" />
            <StatsCard title="Pending" value="45" />
            <StatsCard title="In Progress" value="30" />
            <StatsCard title="Resolved" value="45" />
          </div>

          {/* Complaints Table */}
          <ComplaintsTable />
        </main>
      </div>

      <footer className="text-center text-gray-500 text-xs py-4">
        © 2025 JanSetu. All rights reserved. Government of India.
      </footer>
    </div>
  );
}

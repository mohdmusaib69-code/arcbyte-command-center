import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">
              Dashboard Overview
            </h1>
            <p className="text-slate-400 mt-1">
              Welcome back, Mohd Musaib 👋
            </p>
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search..."
              className="bg-slate-800 px-4 py-2 rounded-lg outline-none"
            />

            <button className="bg-green-500 hover:bg-green-600 transition px-4 py-2 rounded-lg font-semibold">
              New Project
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard title="Active Projects" value="24" />
          <StatCard title="AI Agents" value="12" />
          <StatCard title="API Requests" value="45K" />
          <StatCard title="Monthly Growth" value="+32%" />
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-slate-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Recent Activity
          </h2>

          <div className="space-y-4">
            <div className="border-b border-slate-800 pb-3">
              🚀 New AI Agent deployed successfully
            </div>

            <div className="border-b border-slate-800 pb-3">
              📊 Analytics report generated
            </div>

            <div className="border-b border-slate-800 pb-3">
              👥 Team member added to project
            </div>

            <div>
              ✅ Project milestone completed
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
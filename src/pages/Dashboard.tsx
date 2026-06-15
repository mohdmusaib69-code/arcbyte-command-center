import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-900/80 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Dashboard Overview</p>
              <h1 className="mt-3 text-4xl font-semibold">Welcome back, Mohd Musaib 👋</h1>
              <p className="mt-2 text-slate-400 max-w-2xl">Monitor performance, manage projects, and orchestrate AI agents from one premium command center.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:flex lg:items-center">
              <div className="rounded-3xl border border-slate-800/70 bg-slate-950/90 p-3 shadow-inner shadow-slate-950/20">
                <input
                  type="text"
                  placeholder="Search projects, agents, data..."
                  className="w-full bg-transparent outline-none text-slate-100 placeholder:text-slate-500"
                />
              </div>

              <button className="rounded-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition duration-300 hover:brightness-105">
                New Project
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <StatCard title="Active Projects" value="24" />
          <StatCard title="AI Agents" value="12" />
          <StatCard title="API Requests" value="45K" />
          <StatCard title="Monthly Growth" value="+32%" />
        </div>

        <div className="mt-8 rounded-[2rem] border border-slate-800/70 bg-slate-900/85 p-6 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)]">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Recent Activity</h2>
              <p className="text-sm text-slate-400">Latest updates from your AI-enabled workspace.</p>
            </div>
            <span className="rounded-full bg-slate-800/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-500">Live feed</span>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-4">
              <p className="text-slate-300">🚀 New AI Agent deployed successfully</p>
            </div>
            <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-4">
              <p className="text-slate-300">📊 Analytics report generated</p>
            </div>
            <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-4">
              <p className="text-slate-300">👥 Team member added to project</p>
            </div>
            <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-4">
              <p className="text-slate-300">✅ Project milestone completed</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

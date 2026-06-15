import Sidebar from "../components/Sidebar";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const monthlyData = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 600 },
  { month: "Mar", users: 800 },
  { month: "Apr", users: 1200 },
  { month: "May", users: 1500 },
  { month: "Jun", users: 1800 },
];

const resourceData = [
  { name: "Projects", value: 40 },
  { name: "AI Agents", value: 30 },
  { name: "Analytics", value: 20 },
  { name: "Cloud", value: 10 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444"];

export default function Analytics() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <section className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-900/80 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)]">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Analytics Overview</p>
          <h1 className="mt-3 text-4xl font-semibold">Analytics Dashboard</h1>
          <p className="mt-2 text-slate-400 max-w-2xl">Explore performance metrics, usage trends, and resource distribution in one premium view.</p>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-800/70 bg-slate-900/90 p-6 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.8)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Monthly Growth</h2>
              <span className="rounded-3xl bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">Live</span>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" tick={{ fill: "#94a3b8" }} />
                  <YAxis tick={{ fill: "#94a3b8" }} />
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderRadius: 16, border: "1px solid #334155" }} />
                  <Bar dataKey="users" fill="#22c55e" radius={[12, 12, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800/70 bg-slate-900/90 p-6 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.8)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Resource Distribution</h2>
              <span className="rounded-3xl bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">Insight</span>
            </div>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={resourceData} dataKey="value" nameKey="name" outerRadius={110} innerRadius={70} paddingAngle={3}>
                    {resourceData.map((entry, index) => (
                      <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#0f172a", borderRadius: 16, border: "1px solid #334155" }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-slate-800/70 bg-slate-900/85 p-6 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)]">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Recent Activity</h2>
              <p className="text-sm text-slate-400">Latest system updates and analytics notifications.</p>
            </div>
            <span className="rounded-full bg-slate-800/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-500">Data stream</span>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-4">
              <p className="text-slate-300">🚀 New project deployed</p>
            </div>
            <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-4">
              <p className="text-slate-300">🤖 AI Agent updated</p>
            </div>
            <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-4">
              <p className="text-slate-300">📊 Monthly report generated</p>
            </div>
            <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-4">
              <p className="text-slate-300">👥 New team member added</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

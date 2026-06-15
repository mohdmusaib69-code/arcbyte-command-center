import Sidebar from "../components/Sidebar";

const agents = [
  {
    name: "Support Bot",
    status: "Running",
    performance: "95%",
    tokens: "12,450",
  },
  {
    name: "Code Assistant",
    status: "Running",
    performance: "92%",
    tokens: "18,300",
  },
  {
    name: "Content Generator",
    status: "Paused",
    performance: "88%",
    tokens: "9,200",
  },
];

const statusStyles: Record<string, string> = {
  Running: "bg-emerald-500/20 text-emerald-300",
  Paused: "bg-amber-500/20 text-amber-300",
};

export default function Agents() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <section className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-900/80 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)]">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">AI Management</p>
          <h1 className="mt-3 text-4xl font-semibold">AI Agent Center</h1>
          <p className="mt-2 text-slate-400 max-w-2xl">Manage your active agents, monitor performance, and control execution with confidence.</p>
        </section>

        <div className="grid gap-5 md:grid-cols-3">
          {agents.map((agent) => (
            <div key={agent.name} className="rounded-[2rem] border border-slate-800/70 bg-slate-900/90 p-6 shadow-[0_25px_50px_-20px_rgba(15,23,42,0.8)] transition hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-white">{agent.name}</h2>
                  <p className="mt-2 text-slate-400">Performance insights and runtime data for each active AI agent.</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-sm ${statusStyles[agent.status]}`}>
                  {agent.status}
                </span>
              </div>

              <div className="mt-6 space-y-3 text-slate-300">
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Performance</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{agent.performance}</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-4">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Token Usage</p>
                  <p className="mt-2 text-xl font-semibold text-white">{agent.tokens}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:brightness-110">
                  Start
                </button>
                <button className="rounded-3xl border border-slate-800/70 bg-slate-950/90 px-4 py-2 text-sm font-semibold text-slate-300 transition duration-300 hover:border-emerald-400/30 hover:text-white">
                  Pause
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

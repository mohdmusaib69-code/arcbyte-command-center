import Sidebar from "../components/Sidebar";

const projects = [
  {
    name: "ArcByte Dashboard",
    status: "Active",
    progress: "75%",
  },
  {
    name: "AI Agent Center",
    status: "Completed",
    progress: "100%",
  },
  {
    name: "Analytics Platform",
    status: "In Progress",
    progress: "60%",
  },
  {
    name: "Cloud Manager",
    status: "Pending",
    progress: "30%",
  },
];

const statusClasses: Record<string, string> = {
  Completed: "bg-emerald-500/20 text-emerald-300",
  Active: "bg-sky-500/20 text-sky-300",
  "In Progress": "bg-amber-500/20 text-amber-300",
  Pending: "bg-rose-500/20 text-rose-300",
};

export default function Projects() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <section className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-900/85 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)]">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Project Portfolio</p>
          <h1 className="mt-3 text-4xl font-semibold">Projects</h1>
          <p className="mt-2 text-slate-400 max-w-2xl">Track progress, status, and delivery on all active and upcoming initiatives.</p>
        </section>

        <div className="rounded-[2rem] border border-slate-800/70 bg-slate-900/90 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.8)] overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-sky-500/10 p-6">
            <h2 className="text-xl font-semibold text-white">Project Pipeline</h2>
            <p className="mt-2 text-slate-400">A clear view into the status and velocity of your strategic initiatives.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-800 text-sm">
              <thead className="bg-slate-950/90 text-slate-400 uppercase tracking-[0.18em] text-xs">
                <tr>
                  <th className="px-6 py-4 text-left">Project</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Progress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900/90">
                {projects.map((project, index) => (
                  <tr key={index} className="hover:bg-slate-950/70 transition">
                    <td className="px-6 py-5">{project.name}</td>
                    <td className="px-6 py-5">
                      <span className={`px-3 py-1 rounded-full text-sm ${statusClasses[project.status]}`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-slate-300">{project.progress}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

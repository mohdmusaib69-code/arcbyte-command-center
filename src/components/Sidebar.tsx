import { Link } from "react-router-dom";

const navItems = [
  { label: "Dashboard", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Analytics", to: "/analytics" },
  { label: "AI Agents", to: "/agents" },
  { label: "Team Members", to: "/users" },
  { label: "Settings", to: "/settings" },
  { label: "Login", to: "/login" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen border-r border-slate-800/60 bg-slate-950/95 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
      <div className="mb-10 rounded-[2rem] border border-slate-800/70 bg-slate-900/80 p-5 shadow-inner shadow-slate-950/20">
        <div className="inline-flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-950 text-lg font-bold shadow-lg shadow-emerald-500/20">
            A
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">ArcByte</p>
            <p className="text-xl font-semibold text-white">Command Center</p>
          </div>
        </div>
      </div>

      <nav className="space-y-2 text-sm text-slate-300">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block rounded-3xl px-4 py-3 transition hover:bg-slate-800/80 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

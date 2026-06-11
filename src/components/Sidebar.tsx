import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-green-400 mb-8">
        ArcByte
      </h1>

      <nav className="space-y-3">
        <Link to="/" className="block p-3 rounded-lg hover:bg-slate-800">
          Dashboard
        </Link>

        <Link to="/projects" className="block p-3 rounded-lg hover:bg-slate-800">
          Projects
        </Link>

        <Link to="/analytics" className="block p-3 rounded-lg hover:bg-slate-800">
          Analytics
        </Link>

        <Link to="/agents" className="block p-3 rounded-lg hover:bg-slate-800">
          AI Agents
        </Link>

        <Link to="/settings" className="block p-3 rounded-lg hover:bg-slate-800">
          Settings
        </Link>
        <Link
  to="/users"
  className="block p-3 rounded-lg hover:bg-slate-800"
>
  Team Members
</Link>
<Link
  to="/login"
  className="block p-3 rounded-lg hover:bg-slate-800 transition"
>
  Login
</Link>
      </nav>
    </aside>
  );
}
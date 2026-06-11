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

export default function Projects() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Projects
        </h1>

        <div className="bg-slate-900 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="p-4 text-left">Project</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Progress</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={index}
                  className="border-t border-slate-800"
                >
                  <td className="p-4">{project.name}</td>
                  <td className="p-4">
  <span
    className={`px-3 py-1 rounded-full text-sm ${
      project.status === "Completed"
        ? "bg-green-500/20 text-green-400"
        : project.status === "Active"
        ? "bg-blue-500/20 text-blue-400"
        : project.status === "In Progress"
        ? "bg-yellow-500/20 text-yellow-400"
        : "bg-red-500/20 text-red-400"
    }`}
  >
    {project.status}
  </span>
</td>
                  <td className="p-4">{project.progress}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
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

export default function Agents() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          AI Agent Center
        </h1>

        <div className="grid md:grid-cols-3 gap-5">
          {agents.map((agent, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl p-5 hover:scale-105 transition duration-300"
            >
              <h2 className="text-xl font-semibold mb-3">
                {agent.name}
              </h2>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  agent.status === "Running"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {agent.status}
              </span>

              <div className="mt-4 space-y-2">
                <p>Performance Score: {agent.performance}</p>
                <p>Token Usage: {agent.tokens}</p>
              </div>

              <div className="flex gap-2 mt-5">
                <button className="bg-green-500 hover:bg-green-600 transition px-3 py-2 rounded-lg">
                  Start
                </button>

                <button className="bg-yellow-500 hover:bg-yellow-600 transition px-3 py-2 rounded-lg">
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
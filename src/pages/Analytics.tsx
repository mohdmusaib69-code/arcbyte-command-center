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
        <h1 className="text-3xl font-bold mb-8">
          Analytics Dashboard
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              Monthly Growth
            </h2>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="#22c55e" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="bg-slate-900 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              Resource Distribution
            </h2>

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={resourceData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    {resourceData.map((_, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="mt-8 bg-slate-900 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Recent Activity
          </h2>

          <div className="space-y-4">
            <div>🚀 New project deployed</div>
            <div>🤖 AI Agent updated</div>
            <div>📊 Monthly report generated</div>
            <div>👥 New team member added</div>
          </div>
        </div>
      </main>
    </div>
  );
}
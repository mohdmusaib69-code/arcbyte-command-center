import Sidebar from "../components/Sidebar";

export default function Settings() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Settings
        </h1>

        <div className="bg-slate-900 rounded-xl p-6 max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">
            Profile Settings
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-slate-800 p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-slate-800 p-3 rounded-lg"
            />

            <button className="bg-green-500 px-5 py-3 rounded-lg font-semibold">
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
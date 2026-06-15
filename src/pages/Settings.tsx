import Sidebar from "../components/Sidebar";

export default function Settings() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <section className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-900/80 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)]">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Workspace Settings</p>
          <h1 className="mt-3 text-4xl font-semibold">Settings</h1>
          <p className="mt-2 text-slate-400 max-w-2xl">Customize your profile and manage account settings with a sleek, secure interface.</p>
        </section>

        <div className="rounded-[2rem] border border-slate-800/70 bg-slate-900/90 p-8 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.8)] max-w-3xl">
          <div className="mb-6 rounded-3xl bg-slate-950/80 p-6">
            <h2 className="text-2xl font-semibold text-white">Profile Settings</h2>
            <p className="mt-2 text-slate-400">Update your name and email to keep your ArcByte profile current.</p>
          </div>

          <div className="grid gap-5">
            <label className="block text-sm font-medium text-slate-300">
              Full Name
              <input
                type="text"
                placeholder="Full Name"
                className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />
            </label>

            <label className="block text-sm font-medium text-slate-300">
              Email address
              <input
                type="email"
                placeholder="Email"
                className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />
            </label>

            <button className="mt-2 inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition duration-300 hover:brightness-110">
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

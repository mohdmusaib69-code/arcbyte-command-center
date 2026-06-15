import Sidebar from "../components/Sidebar";
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

export default function Users() {
  const { data, isLoading, error } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await api.get("/users");
      return response.data.users as User[];
    },
  });

  if (isLoading) {
    return (
      <div className="flex min-h-screen bg-slate-950 text-white">
        <Sidebar />
        <main className="flex-1 p-8">
          <h1>Loading users...</h1>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen bg-slate-950 text-white">
        <Sidebar />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-semibold">Error loading users.</h1>
          <p className="mt-3 text-slate-400">{error.message}</p>
        </main>
      </div>
    );
  }

  const users = data ?? [];

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-900/80 p-8 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Team Directory</p>
              <h1 className="mt-2 text-4xl font-semibold">Team Members</h1>
            </div>
            <div className="rounded-3xl border border-slate-800/70 bg-slate-950/90 p-4 shadow-inner shadow-slate-950/20">
              <p className="text-sm text-slate-400">Total Members</p>
              <p className="text-3xl font-semibold text-white">{users.length}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {users.map((user) => (
            <div key={user.id} className="rounded-[2rem] border border-slate-800/70 bg-slate-900/90 p-6 shadow-[0_25px_50px_-20px_rgba(15,23,42,0.8)] transition hover:-translate-y-1">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">{user.firstName} {user.lastName}</h2>
                  <p className="text-slate-400">{user.email}</p>
                </div>
                <span className="rounded-3xl bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">Member</span>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-4 text-slate-300">
                <p className="text-sm">This user is active and available to collaborate in the ArcByte workspace.</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

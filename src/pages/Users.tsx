import Sidebar from "../components/Sidebar";
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export default function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await api.get("/users");
      return response.data.users;
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
          <h1>Error loading users.</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">
          Team Members
        </h1>

        <div className="grid md:grid-cols-3 gap-5">
          {data.map((user: any) => (
            <div
              key={user.id}
              className="bg-slate-900 rounded-xl p-5"
            >
              <h2 className="font-semibold">
                {user.firstName} {user.lastName}
              </h2>

              <p className="text-slate-400">
                {user.email}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter both email and password.");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate("/");
    } catch {
      setError("Unable to login right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg rounded-[2rem] border border-slate-800/75 bg-slate-900/90 p-10 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl">
        <div className="mb-8 rounded-[2rem] border border-slate-800/70 bg-slate-950/10 p-6 shadow-inner shadow-slate-950/20">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Welcome back</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">ArcByte Login</h1>
          <p className="mt-2 text-slate-400">Sign in to access your AI command center.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-slate-300">
            Email address
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-white shadow-inner shadow-slate-950/20 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
            />
          </label>

          <label className="block text-sm font-medium text-slate-300">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Your password"
              className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-white shadow-inner shadow-slate-950/20 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
            />
          </label>

          {error ? (
            <p className="text-sm text-red-400">{error}</p>
          ) : (
            <p className="text-sm text-slate-400">Enter your credentials to continue.</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition duration-300 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

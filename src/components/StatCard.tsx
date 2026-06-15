type Props = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-6 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-500 opacity-90" />
      <h3 className="relative text-slate-400">{title}</h3>
      <p className="relative mt-4 text-4xl font-semibold text-white">{value}</p>
    </div>
  );
}

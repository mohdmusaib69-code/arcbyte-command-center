type Props = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="bg-slate-900 rounded-xl p-5 hover:scale-105 transition duration-300 cursor-pointer">
      <h3 className="text-slate-400">{title}</h3>
      <p className="text-4xl font-bold mt-2">{value}</p>
    </div>
  );
}
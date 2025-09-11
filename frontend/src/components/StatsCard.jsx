export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
      <h3 className="text-sm text-gray-600">{title}</h3>
      <p className="text-2xl font-bold text-blue-700">{value}</p>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md h-screen p-4">
      <nav className="space-y-4">
        <a href="#" className="block text-blue-700 font-semibold">Dashboard</a>
        <a href="#" className="block text-gray-700 hover:text-blue-600">All Complaints</a>
        <a href="#" className="block text-gray-700 hover:text-blue-600">Assigned to Me</a>
        <a href="#" className="block text-gray-700 hover:text-blue-600">Department-wise</a>
        <a href="#" className="block text-gray-700 hover:text-blue-600">Analytics</a>
      </nav>
    </aside>
  );
}

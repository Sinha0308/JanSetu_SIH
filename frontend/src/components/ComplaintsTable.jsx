export default function ComplaintsTable() {
  const complaints = [
    { id: "C101", category: "Pothole", location: "Ranchi", status: "Pending" },
    { id: "C102", category: "Streetlight", location: "Jamshedpur", status: "In Progress" },
    { id: "C103", category: "Garbage", location: "Dhanbad", status: "Resolved" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Complaints</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="p-2">ID</th>
            <th className="p-2">Category</th>
            <th className="p-2">Location</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((c) => (
            <tr key={c.id} className="border-b">
              <td className="p-2">{c.id}</td>
              <td className="p-2">{c.category}</td>
              <td className="p-2">{c.location}</td>
              <td className="p-2">{c.status}</td>
              <td className="p-2">
                <button className="text-blue-600 hover:underline">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

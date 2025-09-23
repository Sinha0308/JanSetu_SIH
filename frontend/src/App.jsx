// import { useState } from "react";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

// function App() {
//  const [isLoggedIn, setIsLoggedIn] = useState(false);

//  return (
//    <>
//      {isLoggedIn ? (
//        <Dashboard onLogout={() => setIsLoggedIn(false)} />
//      ) : (
//        <Login onLogin={() => setIsLoggedIn(true)} />
//      )}
//    </>
//  );
// }

// export default App;
import React, { useState } from 'react';
import pothole1 from "./assets/pothole1.jpg"
import streetlight1 from "./assets/streetlight1.jpg"
import pothole2 from "./assets/pothole2.jpg"
import streetlight2 from "./assets/streetlight2.webp"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      title: "Large Pothole on Main Road",
      description: "Deep pothole near Gandhi Chowk causing traffic issues",
      location: "Ranchi, Main Road",
      type: "pothole",
      status: "pending",
      date: "2023-10-15",
      citizen: "Rahul Sharma",
      image: pothole1  // Replace with your actual 400x300 image in public/assets/
    },
    {
      id: 2,
      title: "Street Light Not Working",
      description: "No light on JP Road for past 3 days",
      location: "Jamshedpur, JP Road",
      type: "streetlight",
      status: "approved",
      date: "2023-10-14",
      citizen: "Priya Singh",
      image: streetlight1// Replace with your actual 400x300 image
    },
    {
      id: 3,
      title: "Multiple Potholes in Residential Area",
      description: "Several potholes making it difficult for residents",
      location: "Dhanbad, Residential Colony",
      type: "pothole",
      status: "completed",
      date: "2023-10-10",
      citizen: "Amit Kumar",
      image: pothole2  // Replace with your actual 400x300 image
    },
    {
      id: 4,
      title: "Street Light Faulty",
      description: "Light flickering and not providing proper illumination",
      location: "Bokaro, Sector 5",
      type: "streetlight",
      status: "pending",
      date: "2023-10-16",
      citizen: "Neha Gupta",
      image: streetlight2  // Replace with your actual 400x300 image
    }
  ]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication for demo purposes
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Use admin/admin123 for demo.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const updateComplaintStatus = (id, status) => {
    setComplaints(complaints.map(complaint => 
      complaint.id === id ? {...complaint, status} : complaint
    ));
  };

  const filteredComplaints = selectedStatus === 'all' 
    ? complaints 
    : complaints.filter(complaint => complaint.status === selectedStatus);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            {/* Logo Placeholder - Add your logo to public/assets/logo.png */}
            <img 
              src="/assets/logo.png" 
              alt="JanSetu Logo" 
              className="w-16 h-16 rounded-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}  // Fallback if logo missing
            />
          </div>
          <h1 className="text-2xl font-bold text-center text-green-800 mb-2">JanSetu</h1>
          <p className="text-center text-gray-600 mb-8">Government Complaint Management System</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
          
          <p className="mt-6 text-center text-sm text-gray-500">
            Demo credentials: admin / admin123
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo Placeholder in Header - Same as login */}
            <img 
              src="/assets/logo.png" 
              alt="JanSetu Logo" 
              className="w-10 h-10 rounded-full object-cover mr-3"
              onError={(e) => { e.target.style.display = 'none'; }}  // Fallback if logo missing
            />
            <h1 className="text-2xl font-bold text-green-800">JanSetu</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, Admin</span>
            <button
              onClick={handleLogout}
              className="bg-green-600 text-white py-1 px-3 rounded-md text-sm hover:bg-green-700 transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Complaint Dashboard</h2>
          
          {/* Filters */}
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-medium text-gray-700">Filter by status:</span>
              <div className="flex flex-wrap gap-2">
                {['all', 'pending', 'approved', 'completed'].map(status => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      selectedStatus === status
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-gray-700">Total Complaints</h3>
              <p className="text-3xl font-bold text-green-600">{complaints.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-gray-700">Pending</h3>
              <p className="text-3xl font-bold text-yellow-600">
                {complaints.filter(c => c.status === 'pending').length}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-gray-700">Approved</h3>
              <p className="text-3xl font-bold text-blue-600">
                {complaints.filter(c => c.status === 'approved').length}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-semibold text-gray-700">Completed</h3>
              <p className="text-3xl font-bold text-green-600">
                {complaints.filter(c => c.status === 'completed').length}
              </p>
            </div>
          </div>
          
          {/* Complaints List */}
          <div className="grid grid-cols-1 gap-6">
            {filteredComplaints.map(complaint => (
              <div key={complaint.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img 
                        src={complaint.image} 
                        alt={complaint.type === 'pothole' ? 'Photograph showing road damage and potholes' : 'Photograph showing non-functional street lighting'} 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{complaint.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          complaint.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          complaint.status === 'approved' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1)}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{complaint.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium">{complaint.location}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Reported By</p>
                          <p className="font-medium">{complaint.citizen}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Type</p>
                          <p className="font-medium capitalize">{complaint.type}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Date Reported</p>
                          <p className="font-medium">{complaint.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {complaint.status !== 'completed' && (
                          <>
                            {complaint.status === 'pending' && (
                              <button
                                onClick={() => updateComplaintStatus(complaint.id, 'approved')}
                                className="bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700 transition duration-200"
                              >
                                Approve
                              </button>
                            )}
                            <button
                              onClick={() => updateComplaintStatus(complaint.id, 'completed')}
                              className="bg-green-600 text-white py-2 px-4 rounded-md text-sm hover:bg-green-700 transition duration-200"
                            >
                              Mark as Completed
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredComplaints.length === 0 && (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500 text-lg">No complaints found with the selected filter.</p>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} JanSetu - Government of Jharkhand. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
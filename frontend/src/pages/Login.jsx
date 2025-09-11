export default function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Later you can add real authentication here
    onLogin(); // ✅ tell App.jsx that login is successful
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navbar */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="JanSetu" className="h-6 w-6" />
          <span className="font-logo text-lg text-blue-700">JanSetu</span>
        </div>
        <div className="text-sm text-gray-600 space-x-4">
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </header>

      {/* Center Card */}
      <div className="flex flex-grow items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 24 24"
                   strokeWidth={2} stroke="white"
                   className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v6c0 5-3 9-8 10-5-1-8-5-8-10V7l8-4z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-center text-2xl font-logo text-blue-700">JanSetu</h2>
          <p className="text-center text-gray-600 mb-6">Government Portal Login</p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2">Password</label>
              <input 
                type="password" 
                placeholder="Enter your password" 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Sign In
            </button>
          </form>

          {/* Support */}
          <p className="text-xs text-gray-500 mt-6 text-center">
            For technical support, contact: <a href="mailto:support@jansetu.gov" className="underline">support@jansetu.gov</a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-xs py-4">
        © 2025 JanSetu. All rights reserved. Government of India.
      </footer>
    </div>
  );
}

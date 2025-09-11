export default function Navbar({ onLogout }) {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="JanSetu" className="h-6 w-6" />
        <span className="font-logo text-lg text-blue-700">JanSetu</span>
      </div>
      <div className="text-sm text-gray-600 space-x-4 flex items-center">
        <a href="#" className="hover:underline">Notifications</a>
        <a href="#" className="hover:underline">Profile</a>
        <button 
          onClick={onLogout} 
          className="hover:underline text-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

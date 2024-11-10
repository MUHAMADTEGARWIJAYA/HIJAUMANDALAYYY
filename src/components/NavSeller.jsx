

const Navbar = () => {
  return (
    <nav className="bg-teal-900 px-6 py-4 flex items-center justify-between">
      {/* Logo and Title */}
      <div className="text-white font-bold text-lg flex items-center">
        KambingFresh <span className="text-sm text-gray-300 ml-1">Seller</span>
      </div>
      
      {/* Search Bar */}
      <div className="flex-grow mx-8 relative">
        <input 
          type="text" 
          placeholder="Pencarian" 
          className="w-full px-4 py-2 rounded-md focus:outline-none" 
        />
        <span className="absolute right-3 top-2.5 text-gray-500">
          🔍 {/* Ikon Pencarian */}
        </span>
      </div>

      {/* User Profile and Notification */}
      <div className="flex items-center space-x-4">
        <button className="text-white">🔔</button>
        <div className="flex items-center text-white">
          <img 
            src="https://via.placeholder.com/30" 
            alt="profile" 
            className="w-8 h-8 rounded-full mr-2"
          />
          <span>Hijau Mandala</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

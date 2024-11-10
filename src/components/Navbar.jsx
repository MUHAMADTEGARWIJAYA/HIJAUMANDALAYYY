
import { IoIosSearch, IoIosMenu, IoMdCart, IoMdNotifications } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-teal-800 text-white shadow-md">
      {/* Logo dan Nama Brand */}
      <div className="flex items-center space-x-2">
        <img src="path-to-logo.svg" alt="Logo" className="h-8 w-8" />
        <span className="text-lg font-bold">Kambingfresh</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-lg px-4 py-2 bg-gray-200 rounded-full">
        <IoIosSearch className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Pencarian"
          className="w-full ml-2 bg-transparent outline-none text-gray-600 placeholder-gray-500"
        />
      </div>

      {/* Ikon dan Profil */}
      <div className="flex items-center space-x-4">
        {/* Ikon lain */}
        <a href="/home"><button className="text-gray-300 hover:text-white">
          <IoIosMenu className="w-6 h-6" />
        </button></a>
       <a href="/keranjang"> <button className="text-gray-300 hover:text-white">
          <IoMdCart className="w-6 h-6" />
        </button></a>
        <button className="text-gray-300 hover:text-white">
          <IoMdNotifications className="w-6 h-6" />
        </button>

        {/* Nama Pengguna */}
        <div className="flex items-center space-x-2">
          <img src="path-to-avatar.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
          <span className="text-sm">Hijau Mandala</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

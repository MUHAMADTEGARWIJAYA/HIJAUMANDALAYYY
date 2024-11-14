import { useState, useEffect, useRef } from 'react';
import { IoIosSearch, IoMdCart, IoMdNotifications } from 'react-icons/io';
import { AiTwotoneShop } from "react-icons/ai";

const Navbar = () => {
  const [images, setImages] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk kontrol popup
  const menuRef = useRef(null); // Ref untuk popup

  useEffect(() => {
    const loadImages = async () => {
      const importedImages = import.meta.glob('../assets/imgs/*.{png,jpg,jpeg,svg}');
      const imageEntries = await Promise.all(
        Object.entries(importedImages).map(async ([path, importFunc]) => {
          const module = await importFunc();
          const fileName = path.replace('../assets/imgs/', ''); 
          return [fileName, module.default];
        })
      );
      setImages(Object.fromEntries(imageEntries));
    };

    loadImages();
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Tutup popup jika klik di luar
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-4 bg-teal-800 text-white shadow-md">
        {/* Logo dan Nama Brand */}
        <div className="flex items-center space-x-2">
          <img src={images["2.jpg"]} alt="Logo" className="h-8 w-8" />
          <span className="text-lg font-bold">KambingFresh</span>
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
        <div className="flex items-center space-x-4 relative">
          {/* Ikon lain */}
          <button 
            className="text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle popup
          >
            <AiTwotoneShop className="w-6 h-6" />
          </button>

          <a href="/keranjang">
            <button className="text-gray-300 hover:text-white">
              <IoMdCart className="w-6 h-6" />
            </button>
          </a>
          <button className="text-gray-300 hover:text-white">
            <IoMdNotifications className="w-6 h-6" />
          </button>

          {/* Nama Pengguna */}
          <div className="flex items-center space-x-2">
            <img src={images["7.jpg"]} alt="User Avatar" className="w-8 h-8 rounded-full" />
            <a href="/profilebuyyer">
              <span className="text-sm">Hijau Mandala</span>
            </a>
          </div>

          {/* Popup Menu */}
          {isMenuOpen && (
            <div
              ref={menuRef} // Attach ref to popup
              className="absolute top-10 left-0 w-48 bg-white shadow-lg rounded-lg p-4 z-50"
              style={{ top: '100%', left: '-20px', zIndex: 50 }}
            >
              <p className="text-center text-gray-700 font-medium">Anda Belum Memiliki Toko</p>
             <a href="/pendaftarantoko"> <button className="bg-green-500 text-white font-bold py-2 px-4 mt-4 rounded-md w-full">
                Daftar Toko
              </button></a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

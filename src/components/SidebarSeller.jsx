import { useLocation, useNavigate } from 'react-router-dom';
import {useEffect, useState} from "react"
import PropTypes from 'prop-types';
import {
  IoHomeOutline,
  IoChatbubbleOutline,
  IoStatsChartOutline,
  IoBookOutline,
  IoHelpCircleOutline,
  IoSettingsOutline,
  IoLogOutOutline,
  IoReceiptOutline,
  IoCubeOutline // Tambahkan icon produk di sini
} from 'react-icons/io5';


const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Fungsi untuk mengarahkan ke path yang sesuai
  const handleItemClick = (path) => {
    navigate(path);
  };



  const [images, setImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const importedImages = import.meta.glob('../assets/imgs/*.{png,jpg,jpeg,svg}');
      const imageEntries = await Promise.all(
        Object.entries(importedImages).map(async ([path, importFunc]) => {
          const module = await importFunc();
          const fileName = path.replace('../assets/imgs/', ''); // Sesuaikan nama file
          return [fileName, module.default];
        })
      );
      setImages(Object.fromEntries(imageEntries));
    };

    loadImages();
  }, []);
  
  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col items-center p-6">
      <div className="text-2xl font-bold mb-6">KambingFresh</div>
      <div className="flex flex-col items-center mb-8">
        <img src={images["4.jpg"]} alt="Profile" className="w-20 h-20 rounded-full mb-2" />
        <h2 className="text-lg font-semibold">Hijau Mandala</h2>
      </div>
      <nav className="flex flex-col gap-4">
        <SidebarItem icon={<IoHomeOutline />} label="Home" path="/home" isActive={location.pathname === "/home"} onClick={() => handleItemClick("/home")} />
        <SidebarItem icon={<IoReceiptOutline />} label="Pesanan" path="/semua" isActive={location.pathname === "/semua"} onClick={() => handleItemClick("/semua")} />
        <SidebarItem icon={<IoStatsChartOutline />} label="Statistik" isActive={location.pathname === "/statistik"} onClick={() => handleItemClick("/statistik")} />
        <SidebarItem icon={<IoChatbubbleOutline />} label="Chat" path="/chat" isActive={location.pathname === "/chat"} onClick={() => handleItemClick("/chat")} />

        {/* Tambahkan icon produk di bawah Chat */}
        <SidebarItem icon={<IoCubeOutline />} label="Produk" path="/produk" isActive={location.pathname === "/produk"} onClick={() => handleItemClick("/produk")} />
        
        {/* Garis pemisah di bawah Produk */}
        <hr className="w-full border-gray-300 my-2" />

        <SidebarItem icon={<IoBookOutline />} label="Edukasi" path="/edukasi" isActive={location.pathname === "/edukasi"} onClick={() => handleItemClick("/edukasi")} />
        <SidebarItem icon={<IoHelpCircleOutline />} label="Bantuan" path="/bantuan" isActive={location.pathname === "/bantuan"} onClick={() => handleItemClick("/bantuan")} />
        <SidebarItem icon={<IoSettingsOutline />} label="Pengaturan" path="/pengaturan" isActive={location.pathname === "/pengaturan"} onClick={() => handleItemClick("/pengaturan")} />

        {/* Garis pemisah di atas tombol Keluar */}
        <hr className="w-full border-gray-300 my-2" />

        <SidebarItem icon={<IoLogOutOutline />} label="Keluar" path="/utama" isActive={location.pathname === "/utama"} onClick={() => handleItemClick("/utama")} />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label, isActive, onClick }) => (
  <div
    className={`flex items-center gap-4 cursor-pointer text-lg 
      ${isActive ? "text-green-600 font-semibold" : "text-gray-700 hover:text-green-600"}`}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </div>
);

SidebarItem.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Sidebar;

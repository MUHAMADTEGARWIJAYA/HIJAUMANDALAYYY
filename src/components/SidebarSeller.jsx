import { useState } from 'react';
import PropTypes from 'prop-types';
import { IoHomeOutline, IoChatbubbleOutline, IoStatsChartOutline, IoBookOutline, IoHelpCircleOutline, IoSettingsOutline, IoLogOutOutline, IoReceiptOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const navigate = useNavigate();

  // Fungsi untuk mengubah item aktif dan mengarahkan ke path yang sesuai
  const handleItemClick = (label, path) => {
    setActiveItem(label);
    navigate(path);
  };

  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col items-center p-6">
      <div className="text-2xl font-bold mb-6">KambingFresh</div>
      <div className="flex flex-col items-center mb-8">
        <img src="https://via.placeholder.com/80" alt="Profile" className="w-20 h-20 rounded-full mb-2" />
        <h2 className="text-lg font-semibold">Hijau Mandala</h2>
      </div>
      <nav className="flex flex-col gap-4">
        <SidebarItem icon={<IoHomeOutline />} label="Home" path="/home" isActive={activeItem === "Home"} onClick={() => handleItemClick("Home", "/home")} />
        <SidebarItem icon={<IoReceiptOutline />} label="Pesanan" path="/semua" isActive={activeItem === "Seemua"} onClick={() => handleItemClick("Semua", "/Semua")} />
        <SidebarItem icon={<IoStatsChartOutline />} label="Statistik" />
        <SidebarItem icon={<IoChatbubbleOutline />} label="Chat" path="/chat" isActive={activeItem === "Chat"} onClick={() => handleItemClick("Chat", "/chat")} />
        <SidebarItem icon={<IoBookOutline />} label="Edukasi" path="/edukasi" isActive={activeItem === "Edukasi"} onClick={() => handleItemClick("Edukasi", "/edukasi")} />
        <SidebarItem icon={<IoHelpCircleOutline />} label="Bantuan" path="/bantuan" isActive={activeItem === "Bantuan"} onClick={() => handleItemClick("Bantuan", "/bantuan")} />
        <SidebarItem icon={<IoSettingsOutline />} label="Pengaturan" path="/pengaturan" isActive={activeItem === "Pengaturan"} onClick={() => handleItemClick("Pengaturan", "/pengaturan")} />
        <SidebarItem icon={<IoLogOutOutline />}label="Keluar" path="/utama" isActive={activeItem === "Utama"} onClick={() => handleItemClick("Utama", "/utama")} />
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
  path: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Sidebar;

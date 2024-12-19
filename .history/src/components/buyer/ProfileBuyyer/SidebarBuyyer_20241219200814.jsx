import { useLocation, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import {
  IoChatbubbleOutline,
  IoHelpCircleOutline,
  IoLogOutOutline,
  IoMapSharp,
  IoReceiptOutline,
  IoCubeOutline // Tambahkan icon produk di sini
} from 'react-icons/io5';
import { FaRegCircleUser } from "react-icons/fa6";


const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Fungsi untuk mengarahkan ke path yang sesuai
  const handleItemClick = (path) => {
    navigate(path);
  };



  
  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col p-6">
     
      <nav className="flex flex-col gap-4">
        <SidebarItem icon={<FaRegCircleUser />} label="Akun Saya" path="/profilebuyyer" isActive={location.pathname === "/profilebuyyer"} onClick={() => handleItemClick("/profilebuyyer")} />
        <SidebarItem icon={<IoReceiptOutline />} label="Pesanan Saya" path="/pesananbuyyer" isActive={location.pathname === "/pesananbuyyer"} onClick={() => handleItemClick("/pesananbuyyer")} />
        <SidebarItem icon={<IoChatbubbleOutline />} label="Chat" path="/chat" isActive={location.pathname === "/chat"} onClick={() => handleItemClick("/chat")} />
        {/* Tambahkan icon produk di bawah Chat */}
        <SidebarItem icon={<IoMapSharp />} label="Alamat Buyyer" path="/alamatprofile" isActive={location.pathname === "/alamatprofile"} onClick={() => handleItemClick("/alamatprofile")} />
        <SidebarItem icon={<IoCubeOutline />} label="Notifikasi" path="/#" isActive={location.pathname === "/#"} onClick={() => handleItemClick("/#")} />
        {/* Garis pemisah di bawah Produk */}
        <hr className="w-full border-gray-300 my-2" />
        <SidebarItem icon={<IoHelpCircleOutline />} label="Bantuan" path="/bantuan" isActive={location.pathname === "/bantuan"} onClick={() => handleItemClick("/bantuan")} />


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

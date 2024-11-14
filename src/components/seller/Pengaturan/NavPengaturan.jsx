import { useState } from 'react';
import { Link } from 'react-router-dom';

const StoreSettingsNavbar = () => {
  const [activeTab, setActiveTab] = useState("Informasi Toko");

  const tabs = [
    { name: "Informasi Toko", path: "/pengaturan" },
    { name: "Rekening Bank", path: "/rekening" },
    { name: "Lokasi", path: "/lokasi" },
    { name: "Pengiriman", path: "/pengiriman" },
    { name: "Notifikasi", path: "/notifikasi" },
    { name: "Catatan Toko", path: "/catatan-toko" },
  ];

  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-bold mb-4">Pengaturan Toko</h2>
      <div className="bg-gray-100 rounded-md shadow">
        <nav className="flex space-x-4 p-2">
          {tabs.map((tab) => (
            <Link
              to={tab.path}
              key={tab.name}
              className={`px-4 py-2 font-medium ${
                activeTab === tab.name
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500 hover:text-black"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default StoreSettingsNavbar;

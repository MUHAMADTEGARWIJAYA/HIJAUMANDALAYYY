import {
  Bell,
  HelpCircle,
  LogOut,
  MapPin,
  MessageCircle,
  ShoppingBag,
  User,
} from "lucide-react";
import React from "react";
import { Card } from "../../components/ui/card";

const AlamatSaya = () => {
  // Sidebar menu items
  const menuItems = [
    { icon: User, text: "Akun Saya" },
    { icon: ShoppingBag, text: "Pesanan Saya" },
    { icon: MapPin, text: "Alamat Saya", active: true },
    { icon: MessageCircle, text: "Chat" },
    { icon: Bell, text: "Notifikasi" },
    { icon: HelpCircle, text: "Bantuan" },
    { icon: LogOut, text: "Keluar Akun" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            {/* Profile Section */}
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <img
                  src="/api/placeholder/48/48"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <span className="font-semibold">Hijau Mandala</span>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="space-y-1">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 ${
                    item.active ? "text-teal-800 font-medium" : "text-gray-700"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Card className="overflow-hidden">
              {/* Header */}
              <div className="bg-teal-800 text-white px-6 py-4">
                <h1 className="text-xl font-semibold">Alamat Saya</h1>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Add New Address Button */}
                <div className="flex justify-end mb-6">
                  <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    <span>+ Tambah Alamat Baru</span>
                  </button>
                </div>

                {/* Address Card */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="font-semibold text-lg">Rumah</h2>
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="font-medium">Hijau Mandala</p>
                    <p className="text-gray-600">(+62) 81152348756)</p>
                    <p className="text-gray-600">Jalan Angkasa No.43</p>
                    <p className="text-gray-600">
                      Kalimantan Selatan, Banjarmasin, Kecamatan Gubeng, 60281
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                      Ubah
                    </button>
                    <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlamatSaya;

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

const AkunSaya = () => {
  // Sidebar menu items
  const menuItems = [
    { icon: User, text: "Akun Saya", active: true },
    { icon: ShoppingBag, text: "Pesanan Saya" },
    { icon: MapPin, text: "Alamat Saya" },
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
                <h1 className="text-xl font-semibold">Profile Pengguna</h1>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex gap-12">
                  {/* Profile Image Section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <img
                        src="/api/placeholder/240/240"
                        alt="Profile"
                        className="w-60 h-60 rounded-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-gray-500">
                      Ukuran File Maksimal 10 MB, Format File yang di Izinkan :
                      (Jpg, Jpeg, PNG)
                    </p>
                    <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                      Pilih Foto
                    </button>
                  </div>

                  {/* Form Section */}
                  <div className="flex-1 space-y-6">
                    {/* Nama Lengkap */}
                    <div className="flex items-center justify-between">
                      <label className="w-1/3">Nama Lengkap</label>
                      <div className="flex-1 flex gap-4">
                        <input
                          type="text"
                          value="Hijau Mandala"
                          className="flex-1 border rounded-lg px-3 py-2"
                          readOnly
                        />
                        <button className="text-green-500 hover:text-green-600">
                          Ubah
                        </button>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-between">
                      <label className="w-1/3">Email</label>
                      <div className="flex-1 flex gap-4">
                        <input
                          type="email"
                          value="hijaumandala@gmail.com"
                          className="flex-1 border rounded-lg px-3 py-2"
                          readOnly
                        />
                        <button className="text-green-500 hover:text-green-600">
                          Ubah
                        </button>
                      </div>
                    </div>

                    {/* Nomor Telepon */}
                    <div className="flex items-center justify-between">
                      <label className="w-1/3">Nomer Telepon</label>
                      <div className="flex-1 flex gap-4">
                        <input
                          type="tel"
                          value="+628115234756"
                          className="flex-1 border rounded-lg px-3 py-2"
                          readOnly
                        />
                        <button className="text-green-500 hover:text-green-600">
                          Ubah
                        </button>
                      </div>
                    </div>

                    {/* Jenis Kelamin */}
                    <div className="flex items-center justify-between">
                      <label className="w-1/3">Jenis Kelamin</label>
                      <div className="flex-1 flex gap-6">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="gender"
                            className="w-4 h-4 text-teal-800"
                            checked
                          />
                          <span>Laki Laki</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="gender"
                            className="w-4 h-4 text-teal-800"
                          />
                          <span>Perempuan</span>
                        </label>
                      </div>
                    </div>

                    {/* Tanggal Lahir */}
                    <div className="flex items-center justify-between">
                      <label className="w-1/3">Tanggal Lahir</label>
                      <div className="flex-1 flex gap-4">
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value="20"
                            className="w-16 border rounded-lg px-3 py-2 text-center"
                            readOnly
                          />
                          <input
                            type="text"
                            value="02"
                            className="w-16 border rounded-lg px-3 py-2 text-center"
                            readOnly
                          />
                          <input
                            type="text"
                            value="02"
                            className="w-16 border rounded-lg px-3 py-2 text-center"
                            readOnly
                          />
                        </div>
                        <button className="text-green-500 hover:text-green-600">
                          Ubah
                        </button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors">
                        Simpan
                      </button>
                    </div>
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

export default AkunSaya;

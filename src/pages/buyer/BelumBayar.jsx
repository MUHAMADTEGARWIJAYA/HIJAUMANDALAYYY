import React from "react";

const BelumBayar = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex">
      <aside className="w-1/4 bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col items-center mb-6">
          <img
            src="/path-to-profile-image.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full mb-2"
          />
          <span className="font-semibold">Hijau Mandala</span>
        </div>
        <nav className="space-y-4">
          <a
            href="#"
            className="flex items-center space-x-2 text-darkGreen-600 font-semibold"
          >
            <span>Pesanan Saya</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <span>Notifikasi</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <span>Chat</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <span>Bantuan</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-700">
            <span>Keluar Akun</span>
          </a>
        </nav>
      </aside>

      <main className="flex-1 ml-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Pesanan Saya</h2>
          <div className="flex space-x-4 border-b border-gray-200 pb-4 mb-4">
            <button className="text-darkGreen-600 font-semibold border-b-2 border-darkGreen-600">
              Belum Bayar
            </button>
            <button className="text-gray-600">Dikirim</button>
            <button className="text-gray-600">Selesai</button>
          </div>

          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Belanja</span>
              <span className="text-gray-600">31 Oct, 2024</span>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="/path-to-bca-logo.jpg"
                alt="BCA Logo"
                className="w-16"
              />
              <div>
                <p className="text-gray-700">Metode Pembayaran</p>
                <p className="font-semibold">BCA Virtual Account</p>
              </div>
              <div className="ml-auto">
                <p className="text-gray-700">Nomor Virtual Account</p>
                <p className="font-semibold">8880191324537875</p>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Bayar Sebelum</span>
              <span className="text-orange-600 font-semibold">
                1 Nov, 19:37
              </span>
              <span className="text-gray-700 font-semibold">
                Total Pembayaran
              </span>
              <span className="font-semibold">Rp. 7.002.000</span>
            </div>
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                Cara Pembayaran
              </button>
              <button className="border border-green-500 text-green-500 px-4 py-2 rounded-lg">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BelumBayar;

import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Fungsi untuk menentukan apakah path saat ini aktif
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col space-y-2 p-4 bg-white max-w-6xl">
      <h1 className="text-lg font-semibold">Pesanan Saya</h1>
      <div className="flex space-x-4 text-sm font-medium">
        <a href="/semua">
          <button
            className={`${
              isActive('/semua') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Semua
          </button>
        </a>
        <a href="/notbayar">
          <button
            className={`${
              isActive('/notbayar') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Belum Bayar
          </button>
        </a>
        <a href="/perludikirim">
          <button
            className={`${
              isActive('/perludikirim') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Perlu Dikirim
          </button>
        </a>
        <a href="/dikirim">
          <button
            className={`${
              isActive('/dikirim') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Dikirim
          </button>
        </a>
        <a href="/selesai">
          <button
            className={`${
              isActive('/selesai') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Selesai
          </button>
        </a>
        <a href="/dibatalkan">
          <button
            className={`${
              isActive('/dibatalkan') ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Pembatalan
          </button>
        </a>
      </div>
      <div className="flex space-x-2">
        <select className="border border-gray-300 rounded-md p-2 w-40">
          <option>Produk</option>
        </select>
        <input
          type="text"
          placeholder="Masukkan nama produk"
          className="border border-gray-300 rounded-md p-2 flex-grow"
        />
        <select className="border border-gray-300 rounded-md p-2 w-40">
          <option>Jasa Kirim</option>
        </select>
        <button className="bg-blue-600 text-white rounded-md px-4 py-2">Cari</button>
      </div>
      <div className="flex space-x-4 mt-4">
        <button className="bg-gray-200 text-gray-700 rounded-md px-4 py-2">Download</button>
        <button className="bg-gray-200 text-gray-700 rounded-md px-4 py-2">Riwayat Download</button>
      </div>
    </div>
  );
}

export default Navbar;

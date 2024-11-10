
function HelpCenter() {
  return (
    <div className="flex flex-col gap-8">
      {/* Section Kembali dan Pencarian */}
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <button className="flex items-center text-sm text-gray-500 mb-4">
         
        </button>
        <h2 className="text-2xl font-bold mb-4">Halo, ada yang bisa kami bantu?</h2>
        <div className="relative">
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
            <span className="material-icons"></span>
          </span>
          <input
            type="text"
            placeholder="Cari Kata Kunci (misal: pengiriman barang)"
            className="w-full border rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>

      {/* Section Pilih Topik */}
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Pilih topik sesuai kendala anda</h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-teal-800 text-white py-2 px-4 rounded-md">
            Pendaftaran dan Akun
          </button>
          <button className="bg-teal-800 text-white py-2 px-4 rounded-md">
            Cara Belanja di KambingFresh
          </button>
          <button className="bg-teal-800 text-white py-2 px-4 rounded-md">
            Promo dan Diskon
          </button>
          <button className="bg-teal-800 text-white py-2 px-4 rounded-md">
            Pembayaran dan Transaksi
          </button>
          <button className="bg-teal-800 text-white py-2 px-4 rounded-md">
            Dukungan Pelanggan
          </button>
          <button className="bg-teal-800 text-white py-2 px-4 rounded-md">
            Penilaian dan Ulasan Produk
          </button>
          <button className="bg-teal-800 text-white py-2 px-4 rounded-md">
            Kebijakan dan Keamanan Pengguna
          </button>
          <button className="bg-teal-800 text-white py-2 px-4 rounded-md">
            Pengiriman dan Pengembalian Barang
          </button>
        </div>
      </div>

      {/* Section FAQ */}
    
    </div>
  );
}

function MainLayout() {
  return (
    <div className="flex">
      {/* Gunakan sidebar yang kamu miliki di sini */}
      <div className="w-1/4">
        {/* Sidebar component kamu */}
      </div>
      
      {/* Konten utama */}
      <div className="w-3/4 p-6">
        <HelpCenter />
      </div>
    </div>
  );
}

export default MainLayout;

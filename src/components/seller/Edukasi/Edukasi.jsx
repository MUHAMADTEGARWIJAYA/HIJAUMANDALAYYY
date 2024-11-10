
const EdukasiKambingFresh = () => {
  return (
    <div className="p-6 bg-gray-100">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Edukasi penggunaan platform KambingFresh</h1>

        {/* Artikel Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Panduan Toko" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Panduan Lengkap Cara Buka Toko di KambingFresh</h2>
              <p className="text-sm text-gray-500 mt-2">Pengaturan Toko. 5 November 2024. Baca 4 Menit</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Manajemen Toko" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Cara Mengelola Pesanan dan Pengiriman di KambingFresh</h2>
              <p className="text-sm text-gray-500 mt-2">Manajemen Toko. 3 November 2024. Baca 5 Menit</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Keamanan Akun" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Tips Keamanan Akun: Jaga Akun dan Data Anda di KambingFresh</h2>
              <p className="text-sm text-gray-500 mt-2">Keamanan Akun. 1 November 2024. Baca 3 Menit</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img src="https://via.placeholder.com/300x200" alt="Edukasi Pengguna" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Cara Memaksimalkan Penggunaan Fitur Edukasi di KambingFresh</h2>
              <p className="text-sm text-gray-500 mt-2">Edukasi Pengguna. 28 Oktober 2024. Baca 4 Menit</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="text-xl font-bold mb-4">Hal yang sering ditanyakan</h2>
        <div className="bg-white shadow-md rounded-md">
          <ul className="divide-y divide-gray-200">
            <li className="p-4 flex justify-between items-center">
              <span>Bagaimana cara membuka toko di KambingFresh?</span>
              <button className="text-blue-500">▼</button>
            </li>
            <li className="p-4 flex justify-between items-center">
              <span>Apakah data pribadi saya di KambingFresh aman?</span>
              <button className="text-blue-500">▼</button>
            </li>
            <li className="p-4 flex justify-between items-center">
              <span>Bagaimana cara bergabung dengan komunitas penjual di KambingFresh?</span>
              <button className="text-blue-500">▼</button>
            </li>
            <li className="p-4 flex justify-between items-center">
              <span>Apa saja produk yang dilarang dijual di KambingFresh?</span>
              <button className="text-blue-500">▼</button>
            </li>
            <li className="p-4 flex justify-between items-center">
              <span>Apa yang harus saya lakukan jika produk saya tidak muncul di pencarian KambingFresh?</span>
              <button className="text-blue-500">▼</button>
            </li>
          </ul>
          <div className="p-4 text-center">
            <button className="text-green-500 font-semibold">Lihat Selengkapnya</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdukasiKambingFresh;



const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center relative">
      {/* Back Button */}
     <a href="/home"> <button className="absolute top-4 left-4 text-blue-500 text-xl z-20">&larr; Kembali</button></a>
      
      {/* Header Section */}
      <div className="relative w-full h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }}>
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Text overlay */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 text-white">
          <h1 className="text-4xl font-bold mb-2">Kembangkan Bisnis Ternak Anda dengan KambingFresh!</h1>
          <p className="text-lg max-w-md">
            Manfaatkan platform digital untuk memperluas pasar, menjual produk lebih cepat, dan memastikan transaksi yang aman. Raih lebih banyak peluang hanya dengan KambingFresh!
          </p>
        </div>
      </div>
      
      {/* Topics Section */}
      <div className="bg-white w-full max-w-7xl p-6 rounded-lg shadow-lg mt-4">
        <h2 className="text-xl font-semibold mb-4">Berbagai topik edukasi pilihan untukmu</h2>
        <div className="flex flex-wrap gap-4">
          <button className="bg-teal-700 text-white py-2 px-4 rounded-full hover:bg-teal-600">Mulai Berbisnis Digital</button>
          <button className="bg-teal-700 text-white py-2 px-4 rounded-full hover:bg-teal-600">Manajemen Toko</button>
          <button className="bg-teal-700 text-white py-2 px-4 rounded-full hover:bg-teal-600">Pengembangan Toko</button>
          <button className="bg-teal-700 text-white py-2 px-4 rounded-full hover:bg-teal-600">Keuangan/Finansial</button>
          <button className="bg-teal-700 text-white py-2 px-4 rounded-full hover:bg-teal-600">Dukungan & Kebijakan KambingFresh</button>
          <button className="bg-teal-700 text-white py-2 px-4 rounded-full hover:bg-teal-600">Edukasi Pengguna</button>
        </div>
        <div className="text-right mt-4">
          <button className="text-teal-700 hover:underline">Semua Topik</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


const StoreSuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-md rounded-lg p-6 text-center max-w-sm mx-auto">
        <h1 className="text-xl font-semibold mb-2">
          Selamat Hijau Mandala, Tokomu sudah berhasil dibuka!
        </h1>
        <p className="text-gray-600 mb-6">
          Tambah produk dan mulai usaha toko peternakanmu sekarang. Pelajari lebih lanjut cara menjual produk kambingmu pada platform KambingFresh ini.
        </p>
        <a href="/home"><button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600">
          Ke Halaman Toko
        </button></a>
      </div>
    </div>
  );
};

export default StoreSuccessPage;

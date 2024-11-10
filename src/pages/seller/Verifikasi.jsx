
function VerifikasiToko() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        
        {/* Judul Halaman */}
        <h2 className="text-center text-lg font-semibold mb-4">
          Verifikasi Pembuatan Toko Anda
        </h2>
        
        {/* Konten Verifikasi */}
        <div className="border-t border-gray-300 pt-6">
          <h3 className="text-center text-xl font-bold mb-4">Verifikasi</h3>
          <p className="text-center text-gray-600 mb-6">
            Masukkan Kode Verifikasi
          </p>
          <p className="text-center text-gray-500 mb-4">
            Kode verifikasi telah dikirimkan melalui SMS ke Nomor Handphone Anda 
            <span className="font-semibold"> (+628115232480)</span>
          </p>

          {/* Input Kode Verifikasi */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              maxLength="6"
              placeholder="------"
              className="text-center tracking-widest w-2/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Tombol Verifikasi */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Verifikasi
          </button>

          {/* Informasi Tambahan */}
          <p className="text-center text-gray-600 text-sm mt-6">
            Mohon menunggu 60 Detik untuk mengirim ulang atau Mengganti <span className="font-semibold">Nomor Handphone</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerifikasiToko;

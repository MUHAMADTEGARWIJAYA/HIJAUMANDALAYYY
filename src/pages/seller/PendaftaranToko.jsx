import { Link } from "react-router-dom";

function PendaftaranToko() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        {/* Judul */}
        <h2 className="text-2xl font-bold text-center mb-4">
          Ayo Daftarkan Tokomu Sekarang!
        </h2>
        
        {/* Formulir */}
        <h3 className="text-xl font-semibold text-center mb-6">
          Masukkan Informasi Toko
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Masukkan Nama Lengkap"
            className="w-full p-3 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="text"
            placeholder="Masukkan Nama Toko"
            className="w-full p-3 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="text"
            placeholder="Masukkan Alamat Lengkap Toko"
            className="w-full p-3 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="email"
            placeholder="Masukkan Email"
            className="w-full p-3 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="tel"
            placeholder="Masukkan No. Handphone"
            className="w-full p-3 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          {/* Input File untuk SKU */}
          <div>
            <label className="block text-gray-700">Surat Keterangan Usaha (SKU)</label>
            <input
              type="file"
              className="w-full p-3 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          
          {/* Checkbox dan Tombol Lanjut */}
          <Link to="/verifikasi">
            <button
              type="button"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
            >
              Lanjut
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default PendaftaranToko;

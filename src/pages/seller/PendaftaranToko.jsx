
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
          <div className="text-sm text-gray-600">
            <input type="checkbox" className="mr-2" />
            Dengan ini, Anda telah menyetujui{' '}
            <a href="#" className="text-blue-500 underline">
              Syarat & Ketentuan
            </a>{' '}
            serta{' '}
            <a href="#" className="text-blue-500 underline">
              Kebijakan Privasi
            </a>{' '}
            Pendaftaran Toko.
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Lanjut
          </button>
        </form>
      </div>
    </div>
  );
}

export default PendaftaranToko;

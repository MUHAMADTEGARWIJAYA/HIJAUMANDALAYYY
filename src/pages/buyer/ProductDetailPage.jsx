import React from "react";

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex gap-6">
        {/* Main Content */}
        <div className="w-3/4">
          {/* Product Image and Details */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex gap-6">
              <img
                src="/path-to-image.jpg"
                alt="Kambing Boer"
                className="w-1/2 rounded-lg"
              />
              <div className="w-1/2">
                <h1 className="text-2xl font-bold mb-2">
                  Kambing Boer (Ukuran Sedang)
                </h1>
                <div className="flex items-center text-yellow-500 mb-2">
                  ⭐⭐⭐⭐⭐
                  <span className="text-gray-600 ml-2">
                    (12 Rating) | Terjual 12+
                  </span>
                </div>
                <p className="text-xl font-bold text-green-700 mb-4">
                  Rp. 3.000.000
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Jenis Kambing:</span> Kambing
                  Betina, Kambing Jantan
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <label className="text-gray-700 font-semibold">
                    Kuantitas:
                  </label>
                  <input
                    type="number"
                    defaultValue="2"
                    className="w-16 border rounded px-2 py-1"
                  />
                  <span className="text-gray-500">Stok: (5 Buah)</span>
                </div>
                <div className="flex gap-4">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Masukkan Keranjang
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4 text-center bg-darkGreen-500 text-white py-2 rounded-md">
              Deskripsi Produk
            </h2>
            <p className="text-gray-700 mb-4">
              Dapatkan kambing boer ukuran sedang yang sehat dan berkualitas
              tinggi. Kambing ini dikenal dengan pertumbuhan cepat dan kualitas
              daging yang baik.
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Berat: 35-45 kg (tergantung ukuran)</li>
              <li>Umur: 10-15 bulan</li>
              <li>Jenis Kelamin: Jantan/Betina</li>
              <li>Asal: Peternakan lokal, Jawa Tengah</li>
            </ul>
            <p className="text-gray-700 mt-4">Keunggulan:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Daging berkualitas tinggi</li>
              <li>Pertumbuhan cepat</li>
              <li>Kesehatan fisik terjaga</li>
            </ul>
          </div>

          {/* Product Reviews */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-center bg-darkGreen-500 text-white py-2 rounded-md">
              Penilaian Produk
            </h2>
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold">5.0</span>
              <span className="text-yellow-500 text-lg ml-2">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-600 ml-2">(3 Ulasan)</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <p className="font-semibold">Rizky Akto</p>
              <p className="text-gray-500">6 Hari Lalu</p>
              <p className="text-gray-700 mt-2">
                Kambing boer dari Peternakan Al-Amin sangat berkualitas dan
                sehat. Penjual responsif, pengiriman cepat.
              </p>
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-4">
              <button className="px-3 py-1 rounded-md border border-gray-300">
                1
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-300">
                2
              </button>
              <button className="px-3 py-1 rounded-md border border-gray-300">
                3
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-1/4 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Peternakan Al-Amin</h3>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4">
              Chat Sekarang
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Produk Lainnya di Toko ini</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <img
                  src="/path-to-product.jpg"
                  alt="Product"
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <p className="text-gray-700 font-semibold">Kambing Kacang</p>
                  <p className="text-green-600">Rp. 2.400.000</p>
                </div>
              </div>
              {/* Tambah produk lainnya sesuai kebutuhan */}
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white mt-6 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center bg-darkGreen-500 text-white py-2 rounded-md">
          Pilihan Produk Lainnya Untukmu
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="border rounded-lg p-4 text-center">
            <img
              src="/path-to-product.jpg"
              alt="Product"
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <p className="text-gray-700 font-semibold">Kambing Boer</p>
            <p className="text-green-600">Rp. 3.200.000</p>
          </div>
          {/* Tambahkan produk lainnya */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

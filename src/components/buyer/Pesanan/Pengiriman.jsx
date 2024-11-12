function ShippingOptions() {
    return (
      <div className="flex justify-center items-center min-h-fit bg-gray-100">
        <div className="flex flex-col md:flex-row p-6 bg-white rounded-lg shadow-lg w-full max-w-4xl space-y-6 md:space-y-0 md:space-x-6">
          {/* Opsi Pengiriman Produk */}
          <div className="flex flex-col space-y-4 w-full md:w-2/3">
            {/* Judul Opsi Pengiriman */}
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Opsi Pengiriman</h2>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <input type="checkbox" className="mr-2" />
              <span className="font-semibold">Instant (Rp200.000)</span>
              <p className="text-sm text-gray-500">Estimasi Tiba: 3 - 6 jam</p>
              <p className="text-gray-600">Layanan pengiriman super cepat untuk Anda yang berada di wilayah kota yang sama. Pesanan akan sampai dalam hitungan jam dengan kualitas produk tetap terjaga.</p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <input type="checkbox" className="mr-2" />
              <span className="font-semibold">Ekonomi (Rp300.000)</span>
              <p className="text-sm text-gray-500">Estimasi Tiba: 4 - 6 hari</p>
              <p className="text-gray-600">Opsi pengiriman dengan biaya yang terjangkau, cocok untuk Anda yang tidak terburu-buru. Direkomendasikan untuk pengiriman produk ke luar kota dengan prioritas hemat biaya.</p>
            </div>
  
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <input type="checkbox" className="mr-2" />
              <span className="font-semibold">Reguler (Rp500.000)</span>
              <p className="text-sm text-gray-500">Estimasi Tiba: 2 - 4 hari</p>
              <p className="text-gray-600">Pilihan pengiriman standar yang menawarkan keseimbangan antara harga dan waktu pengiriman. Ideal untuk pengiriman antar kota dengan layanan yang andal dan terpercaya.</p>
            </div>
          </div>
  
          {/* Catatan */}
          <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl mb-4">Catatan</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Semua estimasi biaya dan waktu pengiriman dapat berubah sewaktu-waktu tergantung kondisi lalu lintas, cuaca, dan faktor eksternal lainnya.</li>
              <li>Marketplace kami bekerja sama dengan penyedia jasa pengiriman berpengalaman untuk memastikan produk diterima dalam kondisi terbaik.</li>
              <li>Untuk informasi lebih lanjut, pelanggan dapat menghubungi layanan pelanggan untuk status pengiriman atau bantuan lainnya.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default ShippingOptions;
  
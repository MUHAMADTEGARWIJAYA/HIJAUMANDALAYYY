import React from "react";

const DetailPembayaran = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Detail Pembayaran</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Harga (2 Produk)</span>
              <span>Rp6.000.000</span>
            </div>
            <div className="flex justify-between">
              <span>Total Ongkos Kirim</span>
              <span>Rp1.000.000</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Layanan Platform</span>
              <span>Rp1.000</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Penanganan</span>
              <span>Rp1.000</span>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex justify-between font-semibold">
              <span>Total Pembayaran</span>
              <span>Rp7.002.000</span>
            </div>
            <div className="text-gray-600">BCA Virtual Account</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Produk Yang Di Beli</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Kambing Boer (Ukuran Sedang)</span>
              <span>Rp3.000.000</span>
            </div>
            <div className="flex justify-between">
              <span>Pengiriman Reguler</span>
              <span>Rp1.000.000</span>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Alamat Pengiriman</h3>
              <p>Rumah: Hijau Mandala, (+62) 81152348756</p>
              <p>
                Jalan Angkasa No.43, Kalimantan Selatan, Banjarmasin, Kecamatan
                Gubeng, 60281
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPembayaran;

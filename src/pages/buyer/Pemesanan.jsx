import React, { useState } from "react";

const CheckoutPage = () => {
  const [selectedBank, setSelectedBank] = useState("");
  const [selectedShipping, setSelectedShipping] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Shipping Address Section */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-md">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="font-semibold">Alamat Pengiriman</h2>
        </div>

        <div className="bg-gray-100 p-4 rounded-md mb-4">
          <p className="font-medium">Rumah, Hijau Mandala, (+62) 81152348756</p>
          <p className="text-gray-600">
            Jalan Angkasa No.43, Kalimantan Selatan, Banjarmasih, Kecamatan
            Gubeng, 60281
          </p>
        </div>

        <button className="bg-darkGreen-500 text-white px-4 py-2 rounded-md hover:bg-darkGreen-600 transition-colors">
          Ganti Alamat
        </button>
      </div>

      {/* Order Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Product List */}
          <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-semibold">Produk Dipesan</h2>
            </div>

            <div className="border-t pt-4">
              <div className="flex gap-4">
                <img
                  src="/path-to-image.jpg"
                  alt="Kambing Boer"
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="font-medium">Kambing Boer (Ukuran Sedang)</h3>
                  <div className="flex justify-between mt-2">
                    <p className="font-medium">Rp3.000.000</p>
                    <p>Kuantitas: 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Options */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="font-semibold">Opsi Pengiriman Produk</h2>
            </div>

            <div className="space-y-4">
              {["Instant", "Ekonomi", "Reguler"].map((method) => (
                <label
                  key={method}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-md cursor-pointer"
                >
                  <input
                    type="radio"
                    name="shipping"
                    value={method}
                    checked={selectedShipping === method}
                    onChange={(e) => setSelectedShipping(e.target.value)}
                    className="mt-1"
                  />
                  <div>
                    <div className="font-medium">{method}</div>
                    <div className="text-sm text-gray-600">
                      {method === "Instant" && "Estimasi Waktu: 3 - 6 jam"}
                      {method === "Ekonomi" && "Estimasi Waktu: 4 - 6 hari"}
                      {method === "Reguler" && "Estimasi Waktu: 2 - 4 hari"}
                    </div>
                  </div>
                  <div className="ml-auto font-medium">
                    {method === "Instant" && "Rp200.000"}
                    {method === "Ekonomi" && "Rp300.000"}
                    {method === "Reguler" && "Rp500.000"}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="p-6 sticky top-6 bg-white rounded-lg shadow-md">
            <h2 className="font-semibold mb-4">Ringkasan Transaksi</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Total Produk</span>
                <span>(2)</span>
              </div>
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
              <div className="flex justify-between font-bold pt-3 border-t">
                <span>Total Pembayaran</span>
                <span>Rp7.002.000</span>
              </div>
            </div>
            <button className="w-full bg-darkGreen-500 text-white py-3 rounded-md mt-6 hover:bg-darkGreen-600 transition-colors">
              Buat Pesanan
            </button>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
        <h2 className="font-semibold mb-4">Metode Pembayaran</h2>
        <div className="flex gap-4 mb-6">
          <button
            className={`px-6 py-2 rounded-md ${
              selectedBank === "transfer"
                ? "bg-darkGreen-500 text-white"
                : "bg-white border"
            }`}
            onClick={() => setSelectedBank("transfer")}
          >
            Transfer Bank
          </button>
          <button
            className={`px-6 py-2 rounded-md ${
              selectedBank === "virtual"
                ? "bg-darkGreen-500 text-white"
                : "bg-white border"
            }`}
            onClick={() => setSelectedBank("virtual")}
          >
            Virtual Account/Mobile Banking
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["BCA", "Mandiri", "BNI", "BRI", "Permata", "BSI"].map((bank) => (
            <label
              key={bank}
              className="flex items-center gap-2 p-4 border rounded-md cursor-pointer"
            >
              <input
                type="radio"
                name="bank"
                value={bank}
                checked={selectedBank === bank}
                onChange={(e) => setSelectedBank(e.target.value)}
              />
              <span>Bank {bank}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

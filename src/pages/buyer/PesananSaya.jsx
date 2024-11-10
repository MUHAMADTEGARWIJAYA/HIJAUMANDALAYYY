import React from "react";

const orders = [
  {
    id: 1,
    farmName: "Peternakan Al-Amin",
    animalType: "Kambing Boer",
    size: "Ukuran Sedang",
    status: "DIKIRIM",
    statusColor: "text-green-500",
    price: "Rp 7.002.000",
    totalPrice: "Rp 7.002.000",
    imageUrl: "/path/to/image1.jpg",
  },
  {
    id: 2,
    farmName: "Peternakan Haji Tohirin",
    animalType: "Kambing Jawarandu",
    size: "Ukuran Besar",
    status: "DIBATALKAN",
    statusColor: "text-red-500",
    price: "Rp 6.000.000",
    totalPrice: "Rp 6.000.000",
    imageUrl: "/path/to/image2.jpg",
  },
  {
    id: 3,
    farmName: "Peternakan Mbah Tejo",
    animalType: "Kambing Jawarandu",
    size: "Ukuran Sedang",
    status: "SELESAI",
    statusColor: "text-green-500",
    price: "Rp 4.000.000",
    totalPrice: "Rp 4.000.000",
    imageUrl: "/path/to/image3.jpg",
  },
];

const PesananSaya = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          <button className="px-4 py-2 text-green-500 font-semibold border-b-2 border-green-500">
            Pesanan Saya
          </button>
          <button className="px-4 py-2 text-gray-500">Belum Bayar</button>
          <button className="px-4 py-2 text-gray-500">Dikirim</button>
          <button className="px-4 py-2 text-gray-500">Selesai</button>
        </div>

        {/* Orders List */}
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow mb-4 p-4 flex"
          >
            <img
              src={order.imageUrl}
              alt={order.animalType}
              className="w-20 h-20 rounded object-cover mr-4"
            />
            <div className="flex-grow">
              <h3 className="font-semibold text-gray-800">{order.farmName}</h3>
              <p className="text-gray-600">
                {order.animalType} ({order.size})
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-gray-500">Total Pesanan:</p>
                <p className="text-gray-800 font-bold">{order.totalPrice}</p>
              </div>
              <div className="flex items-center mt-1">
                <p className="text-sm text-gray-500">
                  Pesanan akan segera di Proses dan di Kirim kepada Anda
                </p>
                <span
                  className={`ml-2 ${order.statusColor} font-semibold text-sm`}
                >
                  {order.status}
                </span>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-col justify-center items-end ml-4 space-y-2">
              <button className="bg-green-500 text-white text-sm px-4 py-1 rounded">
                Nilai
              </button>
              <button className="bg-white border border-green-500 text-green-500 text-sm px-4 py-1 rounded">
                Hubungi Penjual
              </button>
              {order.status === "DIKIRIM" && (
                <button className="bg-white border border-green-500 text-green-500 text-sm px-4 py-1 rounded">
                  Beli Lagi
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PesananSaya;

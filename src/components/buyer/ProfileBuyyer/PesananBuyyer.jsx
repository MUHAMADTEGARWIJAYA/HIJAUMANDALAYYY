import { useState, useEffect } from "react";

const orders = [
    {
        id: 1,
        farmName: 'Peternakan Al-Amin',
        status: 'DIKIRIM',
        statusMessage: 'Pesanan akan segera di Proses dan di Kirim kepada Anda',
        productImage: '5.jpg', // Ganti URL dengan URL gambar asli
        productName: 'Kambing Boer',
        productSize: 'Ukuran Sedang',
        productPrice: 6000000,
        totalPrice: 7002000,
    },
    
    // Anda bisa menambahkan item lain ke dalam array orders ini.
];

function OrderCard() {

    const [images, setImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const importedImages = import.meta.glob('../../../assets/imgs/*.{png,jpg,jpeg,svg}');
      const imageEntries = await Promise.all(
        Object.entries(importedImages).map(async ([path, importFunc]) => {
          const module = await importFunc();
          const fileName = path.replace('../../../assets/imgs/', ''); // Sesuaikan nama file
          return [fileName, module.default];
        })
      );
      setImages(Object.fromEntries(imageEntries));
    };

    loadImages();
  }, []);

    return (
        <div className="flex flex-col space-y-4 mt-8 bg-white rounded-lg max-h-fit max-w-5xl">
            {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-6">
                    <div className="flex justify-between items-center">
                        <h2 className="font-bold text-lg">{order.farmName}</h2>
                        <span className="text-green-600 font-semibold">{order.status}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{order.statusMessage}</p>

                    <div className="flex items-center mt-4">
                        <img src={images[order.productImage]} alt={order.productName} className="w-24 h-24 rounded-lg mr-4" />
                        <div>
                            <h3 className="font-semibold text-lg">{order.productName}</h3>
                            <p className="text-gray-600">{order.productSize}</p>
                            <p className="text-gray-700 mt-2">Rp. {order.productPrice.toLocaleString('id-ID')}</p>
                        </div>
                    </div>

                    <hr className="my-4" />

                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">Total Pesanan :</span>
                        <span className="font-bold text-xl text-gray-900">
                            Rp. {order.totalPrice.toLocaleString('id-ID')}
                        </span>
                    </div>

                    <div className="flex space-x-2 mt-4">
                        <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition duration-300 ">
                            Nilai
                        </button>
                        <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition duration-300">
                            Hubungi Penjual
                        </button>
                        <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition duration-300">
                            Beli Lagi
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default OrderCard;

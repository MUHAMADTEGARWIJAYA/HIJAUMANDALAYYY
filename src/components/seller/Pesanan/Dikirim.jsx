import { useEffect, useState } from "react";
const Send= () => {
    
    const orders = [
        {
          id: 1,
          productImage: "5.jpg", // Ganti dengan path gambar yang sesuai
          productName: "Kambing Boer",
          total: "Rp14.026.000",
          status: "Dikirim",
          buyer: "Wahyu",
          deliveryService: "Reguler (Cashless)",
          statusColor: "text-green-500"
        },
        {
          id: 2,
          productImage: "6.jpg",
          productName: "Kambing Jawarandu",
          total: "Rp6.000.000",
          status: "Dikirim",
          buyer: "Tegar",
          deliveryService: "Ekonomi",
          statusColor: "text-green-500"
        },
   
      ];

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
        <div className="max-w-6xl">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-2 bg-teal-800 text-white text-left">Produk</th>
              <th className="py-2 px-2 bg-teal-800 text-white text-left">Total Pesanan</th>
              <th className="py-2 px-2 bg-teal-800 text-white text-left">Status</th>
              <th className="py-2 px-2 bg-teal-800 text-white text-left">Pembeli</th>
              <th className="py-2 px-2 bg-teal-800 text-white text-left">Jasa Kirim</th>
              <th className="py-2 px-2 bg-teal-800 text-white text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-4 px-2 flex items-center space-x-4">
                  <img src={images[order.productImage]} alt={order.productName} className="w-20 h-20 rounded" />
                  <span>{order.productName}</span>
                </td>
                <td className="py-4 px-2 text-left">{order.total}</td>
                <td className={`py-4 px-2 ${order.statusColor} text-left`}>{order.status}</td>
                <td className="py-4 px-2 text-left">{order.buyer}</td>
                <td className="py-4 px-2 text-left">{order.deliveryService}</td>
                <td className="py-4 px-2 text-left">
                  <button className="bg-green-400 text-white px-2 py-1 rounded text-sm hover:bg-green-700">Detail Pesanan</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      );
    };
    
    export default Send;
    
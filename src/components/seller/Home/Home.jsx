import { useEffect, useState } from "react";

const KambingFresh = () => {
  // Data produk disimpan dalam array
  const products = [
    {
      id: 1,
      name: "Kambing Jawa Randu",
      price: "Rp2.100.000",
      image: "4.jpg",
    },
    {
      id: 2,
      name: "Susu Kambing",
      price: "Rp300",
      image: "5.jpg",
    },
    {
      id: 3,
      name: "Daging Kambing Premium",
      price: "Rp144.000",
      image: "6.jpg",
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
    <div className="flex flex-col space-y-6 p-6 bg-white rounded-md shadow-md max-h-fit max-w-6xl">
      {/* Header */}
      <div className="text-xl font-semibold">
        <h1 className="text-blue-700">Selamat Datang di KambingFresh!</h1>
        <p className="text-gray-600">Ikuti rekomendasi dan strategi untuk penjualan pertama.</p>
      </div>

      {/* Produk Dilihat dan Dalam Keranjang */}
      <div className="flex justify-between space-x-4">
        <div className="flex flex-col bg-blue-50 p-4 rounded-md w-1/2">
          <h2 className="font-semibold text-blue-700">Produk Dilihat</h2>
          <button
            className="text-xl w-fit text-white mt-1 bg-green-400 border border-green-500 rounded-md px-4 py-2 hover:bg-green-700 hover:text-white transition duration-200"
          >
            Tambah Produk
          </button>
 
          <p className="text-2xl font-bold">0%</p>
          <p className="text-xs text-gray-500">dari 30 hari terakhir</p>
        </div>
        <div className="flex flex-col bg-blue-50 p-4 rounded-md w-1/2">
          <h2 className="font-semibold text-blue-700">Dalam Keranjang</h2>
          <p className="text-2xl font-bold">0%</p>
          <p className="text-xs text-gray-500">dari 30 hari terakhir</p>
        </div>
      </div>

      {/* Tren Pasar */}
      <div className="bg-blue-50 p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-blue-700">Tren Pasar</h2>
          <select className="text-sm bg-white border border-gray-300 rounded-md p-1">
            <option value="populer">Produk Populer</option>
          </select>
        </div>

        {/* Header Nama Produk dan Harga */}
        <div className="flex justify-between text-gray-500 font-semibold mb-2">
          <span className="pl-56">Nama Produk</span>
          <span className="pr-20">Harga</span>
        </div>

        {/* Daftar Produk */}
        <div className="space-y-10">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between px-10 py-2 border-t border-gray-200">
              <div className="flex items-center space-x-20">
                <img src={images[product.image]} alt={product.name} className="w-20 h-20 rounded" />
                <p className="font-semibold">{product.name}</p>
              </div>
              <div className="flex items-baseline">
        <span className="text-gray-600 font-semibold">Rp</span>
        <p className="text-gray-600 font-semibold ml-1">{product.price}</p>
      </div>
            </div>
            
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default KambingFresh;

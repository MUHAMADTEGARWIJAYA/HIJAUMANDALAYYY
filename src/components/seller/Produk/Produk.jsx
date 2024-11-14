import { useEffect, useState } from "react";

const ProductPage = () => {
  // Data produk dalam bentuk array
  const products = [
    {
      id: 1,
      name: 'Kambing Boer Uk Sedang',
      price: 'Rp3.000.000',
      stock: 20,
      imageUrl: '4.jpg',
      sold: 0,
    },
    {
      id: 2,
      name: 'Sapi Limousin',
      price: 'Rp20.000.000',
      stock: 5,
      imageUrl: '4.jpg',
      sold: 2,
    },
    {
      id: 3,
      name: 'Ayam Kampung',
      price: 'Rp50.000',
      stock: 100,
      imageUrl: '4.jpg',
      sold: 25,
    },
    // Tambahkan lebih banyak produk jika diperlukan
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
    <div className=" bg-gray-100 min-h-fit max-w-fit">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Produk Saya</h1>
        <a href="/tambahproduk">  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">+ Tambah Produk Baru</button></a>
        </div>

        {/* Tabs */}
        <div className="flex space-x-8 border-b mb-4">
          <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-2">Semua</button>
          <button className="text-gray-600 font-semibold pb-2">Belum Ditampilkan (1)</button>
        </div>

        {/* Search and Filter */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Cari Nama Produk, SKU"
            className="w-full p-2 border rounded-lg focus:outline-none"
          />
          <input
            type="text"
            placeholder="Cari Berdasarkan Kategori"
            className="w-full p-2 border rounded-lg focus:outline-none"
          />
          <button className="text-center py-2 bg-gray-200 rounded-lg">Cari</button>
        </div>

        {/* Product Limit */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-teal-800 text-white px-3 py-1 rounded-lg">Batas Maks. Produk: 50</span>
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-8 border-b pb-2 mb-4 text-gray-600">
          <span>Urutkan:</span>
          <button className="hover:underline">Harga</button>
          <button className="hover:underline">Stok</button>
          <button className="hover:underline">Terlaris</button>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white border rounded-lg shadow-md p-4">
              <div className="flex items-start">
                <input type="checkbox" className="mr-2" />
                <img
                  src={images[product.imageUrl]}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              <div className="mt-2">
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p className="text-red-500 font-bold">{product.price}</p>
                <p className="text-gray-600">Stok {product.stock}</p>
                <div className="flex items-center mt-2">
                  <button className="text-white bg-blue-500 px-2 py-1 rounded-lg">Edit</button>
                  <span className="ml-auto flex items-center space-x-1">
                    <svg className="w-4 h-4 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M2 8h16v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8zm14-6a2 2 0 00-2-2H6a2 2 0 00-2 2v2h12V2z" />
                    </svg>
                    <span>{product.sold}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

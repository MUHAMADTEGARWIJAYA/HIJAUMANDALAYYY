import { useState, useEffect } from "react";

function Content() {
  // Daftar produk
  const products = [
    { id: 1, name: "Kambing Kacang (Ukuran Kecil)", price: "Rp. 2.400.000", image: "5.jpg", farm: "Peternakan Al-Amin", rating: 4.5 },
    { id: 2, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "4.jpg", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 3, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "5.jpg", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 4, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "6.jpg", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 5, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "7.jpg", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 6, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "8.jpg", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 7, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "5.jpg", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 8, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "1.png", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 9, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "2.jpg", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 10, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "5.jpg", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 11, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "8.jpg", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 12, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "7.jpg", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 13, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "1.png", farm: "Peternakan Al-Amin", rating: 4 },
    // Tambahkan lebih banyak produk jika diperlukan
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Hitung total halaman
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Dapatkan produk yang ditampilkan berdasarkan halaman
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  // Fungsi untuk mengubah halaman
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-6xl flex-1 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-gray-50 rounded-lg p-4 shadow-md">
            <img
              src={images[product.image]}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-green-600 font-bold">{product.price}</p>
            <p className="text-gray-500 text-sm">{product.farm}</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">⭐</span>
              <span className="ml-1 text-gray-700">{product.rating}</span>
            </div>
          </div>
        ))}
        
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {/* Tombol untuk setiap halaman */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Content;

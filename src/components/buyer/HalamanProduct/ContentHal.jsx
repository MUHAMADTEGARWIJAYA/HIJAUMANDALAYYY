import { useState } from "react";

function Content() {
  // Daftar produk
  const products = [
    { id: 1, name: "Kambing Kacang (Ukuran Kecil)", price: "Rp. 2.400.000", image: "https://placekitten.com/200/200", farm: "Peternakan Al-Amin", rating: 4.5 },
    { id: 2, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "https://placekitten.com/201/200", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 3, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "https://placekitten.com/202/200", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 4, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "https://placekitten.com/203/200", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 5, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "https://placekitten.com/204/200", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 6, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "https://placekitten.com/205/200", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 7, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "https://placekitten.com/206/200", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 8, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "https://placekitten.com/207/200", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 9, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "https://placekitten.com/208/200", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 10, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "https://placekitten.com/209/200", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 11, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "https://placekitten.com/210/200", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 12, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "https://placekitten.com/211/200", farm: "Peternakan Al-Amin", rating: 4 },
    { id: 13, name: "Kambing Boer (Ukuran Sedang)", price: "Rp. 3.000.000", image: "https://placekitten.com/212/200", farm: "Peternakan Al-Amin", rating: 4 },
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex-1 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-gray-50 rounded-lg p-4 shadow-md">
            <img
              src={product.image}
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

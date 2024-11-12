import  { useState, useEffect } from 'react';

function ProductReviews() {
  // Data contoh ulasan
  const reviewsData = [
    {
      id: 1,
      user: "Rizky Akto",
      rating: 5,
      date: "6 hari lalu",
      comment: "Kambing Boer dari Peternakan Al-Amin sangat berkualitas dan sehat. Penjual responsif, pengiriman cepat. Sangat puas!",
      images: ["https://placekitten.com/100/100", "https://placekitten.com/100/100"]
    },
    {
      id: 2,
      user: "Siti Aminah",
      rating: 4,
      date: "10 hari lalu",
      comment: "Pelayanan cepat, kambing sehat dan bersih. Terima kasih!",
      images: []
    },
    // Tambahkan lebih banyak ulasan sesuai kebutuhan
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 1;

  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentReviews = reviewsData.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );
  const [images, setImages] = useState({});

  useEffect(() => {
    // Mengimpor semua gambar secara asinkron
    const loadImages = async () => {
      const importedImages = import.meta.glob('../../../assets/imgs/*.{png,jpg,jpeg,svg}');
      const imageEntries = await Promise.all(
        Object.entries(importedImages).map(async ([path, importFunc]) => {
          const module = await importFunc();
          const fileName = path.replace('../../../assets/imgs/', ''); // Ambil nama file
          return [fileName, module.default]; // module.default adalah URL gambar
        })
      );
      setImages(Object.fromEntries(imageEntries)); // Simpan gambar dalam bentuk objek
    };

    loadImages();
  }, []);

  return (
    <div className="bg-gray-100 p-6 min-h-fit flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg  w-full max-w-4xl">
        {/* Judul */}
        <div className="bg-teal-700 text-white font-bold text-lg text-center py-3 rounded-t-lg">
          Penilaian Produk
        </div>

        {/* Rata-Rata Penilaian */}
        <div className="p-4 text-gray-800">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold">Ulasan Pembeli</h2>
            <div className="text-4xl font-bold ml-4">5.0</div>
            <span className="text-gray-500 ml-2">Dari 5</span>
            <div className="ml-2 text-yellow-500 text-sm">★★★★★</div>
          </div>

          {/* Filter Penilaian */}
          <div className="flex gap-2 mb-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full">Semua</button>
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full">5 Bintang</button>
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full">4 Bintang</button>
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full">3 Bintang</button>
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full">2 Bintang</button>
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full">1 Bintang</button>
          </div>

          {/* Daftar Ulasan */}
          {currentReviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-4 rounded-lg mb-4 shadow">
              <div className="flex items-center mb-2">
                <img
                  src={images["2.jpg"]}
                  alt={review.user}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold">{review.user}</h3>
                  <div className="flex items-center text-yellow-500 text-sm">★★★★★</div>
                  <p className="text-gray-500 text-xs">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
              <div className="flex gap-2 mt-2">
                {review.images.map((img, index) => (
                  <img
                    key={index}
                    src={images["7.jpg"]}
                    alt="Review"
                    className="w-16 h-16 rounded object-cover"
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Navigasi Halaman */}
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-l-lg ${
                currentPage === 1 ? 'bg-gray-300' : 'bg-green-500 text-white'
              }`}
            >
              Previous
            </button>
            <span className="px-3 py-1 bg-white border-t border-b border-gray-300">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-r-lg ${
                currentPage === totalPages ? 'bg-gray-300' : 'bg-green-500 text-white'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReviews;

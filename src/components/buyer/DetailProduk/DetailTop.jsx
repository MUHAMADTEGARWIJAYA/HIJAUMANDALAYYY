import { useState, useEffect } from 'react';

function ProductPage() {
  const [quantity, setQuantity] = useState(2); // Kuantitas default adalah 2
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State untuk kontrol popup
  const stock = 5; // Stok produk

  const incrementQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [images, setImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const importedImages = import.meta.glob('../../../assets/imgs/*.{png,jpg,jpeg,svg}');
      const imageEntries = await Promise.all(
        Object.entries(importedImages).map(async ([path, importFunc]) => {
          const module = await importFunc();
          const fileName = path.replace('../../../assets/imgs/', '');
          return [fileName, module.default];
        })
      );
      setImages(Object.fromEntries(imageEntries));
    };

    loadImages();
  }, []);

  // Function untuk menampilkan popup dan menghilangkannya setelah beberapa waktu
  const handleAddToCart = () => {
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000); // Popup akan menghilang setelah 3 detik
  };

  return (
    <div className="bg-gray-100 p-6 min-h-fit flex justify-center items-center relative">
      {/* Popup */}
      {isPopupVisible && (
        <div
          className="fixed top-4  transform -translate-x-1/2 p-4 w-80 bg-white shadow-lg rounded-lg flex flex-col items-center transition-transform duration-500 ease-out z-50"
          style={{ transform: isPopupVisible ? 'translateY(0)' : 'translateY(-50px)' }}
        >
          <p className="text-center mb-2">Produk yang anda pilih sudah ditambahkan ke Halaman Keranjang</p>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md w-1/2">
            Keranjang
          </button>
        </div>
      )}

      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row w-full md:max-w-4xl">
        {/* Gambar Produk */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src={images["1.png"]}
            alt="Kambing Boer"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        {/* Detail Produk */}
        <div className="md:w-1/2 md:pl-6 flex flex-col">
          <div className="flex items-center bg-gray-100 p-4 rounded-lg">
            <img
              src={images["5.jpg"]}
              alt="Penjual"
              className="w-16 h-16 object-cover rounded-full mr-4"
            />
            <div>
              <h3 className="font-semibold">Peternakan Al-Amin</h3>
              <p className="text-gray-500 text-sm">Online 5 menit lalu</p>
              <div className="flex gap-2 mt-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm">
                  Chat Sekarang
                </button>
                <button className="bg-white border border-green-500 text-green-500 px-3 py-1 rounded-lg text-sm">
                  Kunjungi Toko
                </button>
              </div>
              <div className="flex items-center text-gray-600 text-sm mt-2">
                <span className="mr-2">★ 4.6 (20 Penilaian)</span>
                <span> | 7 Produk Tersedia</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold mb-1">Kambing Boer (Ukuran Sedang)</h2>
          <div className="text-yellow-500 text-sm mb-2 flex items-center">
            ★★★★★ <span className='text-black' > (12 Rating) | Terjual 12+ </span>
          </div>
          <div className="text-2xl font-bold text-green-600 mb-4">Rp. 3.000.000</div>

          <div className="mb-2">
            <span className="font-semibold">Jenis Kambing:</span>
            <div className="flex gap-2 mt-2">
              <button className="bg-[#1C464F] text-white px-4 py-1 rounded-full">Kambing Betina</button>
              <button className="bg-[#1C464F] text-white px-4 py-1 rounded-full">Kambing Jantan</button>
            </div>
          </div>

          {/* Kuantitas dan Stok */}
          <div className="flex items-center mb-4">
            <span className="font-semibold mr-2">Kuantitas:</span>
            <div className="flex items-center">
              <button
                onClick={decrementQuantity}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l"
              >
                -
              </button>
              <span className="px-4 border-t border-b border-gray-200">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r"
              >
                +
              </button>
            </div>
            <span className="ml-4 text-gray-500">Stok: ({stock} Buah)</span>
          </div>

          {/* Tombol Aksi */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={handleAddToCart} // Tambahkan handleAddToCart untuk memicu popup
              className="flex-1 bg-white border border-green-500 text-green-500 py-2 rounded-lg font-semibold hover:bg-green-50"
            >
              Masukkan Keranjang
            </button>
            <button className="flex-1 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

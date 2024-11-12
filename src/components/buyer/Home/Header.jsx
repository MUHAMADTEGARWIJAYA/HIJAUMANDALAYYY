import { useState, useEffect } from 'react';

const PromoBanner = () => {
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
    <div className="bg-[#ECD8CD] pl-6 rounded-lg max-w-7xl mx-auto mt-8 ">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex bg flex-col gap-4 max-w-md text-center md:text-left">
          <h2 className="text-2xl font-bold text-black">
            Belanja Hemat, Mudah dan Cepat Hanya di Sini!
          </h2>
          <p className="text-gray-700">
            Temukan berbagai produk kambing berkualitas unggul di marketplace kami
          </p>
          <a href="/halamanproduk">
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-green-600 transition duration-300">
              Beli Sekarang
            </button>
          </a>
        </div>
        {/* Pastikan gambar telah dimuat sebelum mengaksesnya */}
        {images['kambing.jpg'] && (
          <img
            src={images['img_beranda_pembeli.png']}
            alt="kambing"
            className="rounded-lg max-w-xs"
          />
        )}
      </div>
    </div>
  );
};

export default PromoBanner;

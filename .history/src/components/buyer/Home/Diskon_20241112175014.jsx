import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Kambing Jawa Randu',
    originalPrice: 3000000,
    discountedPrice: 2100000,
    distance: '0.1 km',
    image: '2.jpg', // Sesuaikan nama file dengan gambar yang diimpor
  },
  {
    id: 2,
    name: 'Kambing Kacang (Uk Sedang)',
    originalPrice: 5000000,
    discountedPrice: 3500000,
    distance: '0.1 km',
    image: '4.jpg',
  },
  {
    id: 3,
    name: 'Kambing Kacang (Uk Sedang)',
    originalPrice: 5000000,
    discountedPrice: 3500000,
    distance: '0.1 km',
    image: '4.jpg',
  },
  {
    id: 4,
    name: 'Kambing Kacang (Uk Sedang)',
    originalPrice: 5000000,
    discountedPrice: 3500000,
    distance: '0.1 km',
    image: '4.jpg',
  },
  {
    id: 5,
    name: 'Kambing Kacang (Uk Sedang)',
    originalPrice: 5000000,
    discountedPrice: 3500000,
    distance: '0.1 km',
    image: '4.jpg',
  },
  // Tambahkan produk lainnya
];

const ProductCard = ({ product, images }) => (
  <div className="bg-gray-100 rounded-b-3xl shadow-md p-4 pb-10 flex flex-col items-center">
    <img
      src={images[product.image]} // Mengambil path gambar yang sesuai
      alt={product.name}
      className="w-full h-40 object-cover rounded-lg mb-4"
    />
    <div className="text-gray-500 text-xs">{product.distance}</div>
    <h3 className="text-gray-800 font-semibold text-center mt-2">{product.name}</h3>
    <div className="flex items-center mt-1 text-red-500 line-through text-sm">Rp. {product.originalPrice.toLocaleString()}</div>
    <div className="text-green-700 font-bold text-lg">Rp. {product.discountedPrice.toLocaleString()}</div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    distance: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  images: PropTypes.object.isRequired,
};

const ProductSection = ({ title, products, images }) => (
  <section className="pb-10">
    <h2 className="bg-[#1C464F] text-white text-center py-2 rounded-ss-3xl rounded-se-3xl text-lg font-bold">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} images={images} />
      ))}
    </div>
  </section>
);

ProductSection.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      originalPrice: PropTypes.number.isRequired,
      discountedPrice: PropTypes.number.isRequired,
      distance: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  images: PropTypes.object.isRequired,
};

const App = () => {
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
    <div className="bg-white max-w-7xl mx-auto mb-8 pb-8 mt-8 rounded-s-3xl rounded-e-3xl">
      <ProductSection title="Diskon 30%" products={products.slice(0, 4)} images={images} />
      <ProductSection title="Diskon 30%" products={products.slice(4, 8)} images={images} />
      <button className="bg-green-500 text-white py-2 px-4 mt-8 rounded-md mx-auto block hover:bg-green-600 transition duration-200">
        Lihat Lainnya
      </button>
    </div>
  );
};

export default App;

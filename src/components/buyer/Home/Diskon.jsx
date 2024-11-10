
import PropTypes from 'prop-types';

const products = [
  {
    id: 1,
    name: 'Kambing Jawa Randu',
    originalPrice: 3000000,
    discountedPrice: 2100000,
    distance: '0.1 km',
    image: 'path/to/image1.jpg',
  },
  {
    id: 2,
    name: 'Kambing Kacang (Uk Sedang)',
    originalPrice: 5000000,
    discountedPrice: 3500000,
    distance: '0.1 km',
    image: 'path/to/image2.jpg',
  },
  {
    id: 3,
    name: 'Kambing (Uk Sedang)',
    originalPrice: 4000000,
    discountedPrice: 2800000,
    distance: '0.1 km',
    image: 'path/to/image3.jpg',
  },
  {
    id: 4,
    name: 'Daging Kambing Premium',
    originalPrice: 160000,
    discountedPrice: 144000,
    distance: '0.1 km',
    image: 'path/to/image4.jpg',
  },
  {
    id: 6,
    name: 'Daging Kambing Iga',
    originalPrice: 140000,
    discountedPrice: 129600,
    distance: '0.1 km',
    image: 'path/to/image5.jpg',
  },
  {
    id: 7,
    name: 'Daging Kambing Iga',
    originalPrice: 140000,
    discountedPrice: 129600,
    distance: '0.1 km',
    image: 'path/to/image5.jpg',
  },
  {
    id: 8,
    name: 'Daging Kambing Iga',
    originalPrice: 140000,
    discountedPrice: 129600,
    distance: '0.1 km',
    image: 'path/to/image5.jpg',
  },
  {
    id: 9,
    name: 'Daging Kambing Iga',
    originalPrice: 140000,
    discountedPrice: 129600,
    distance: '0.1 km',
    image: 'path/to/image5.jpg',
  },
 
 
  // Tambahkan produk lainnya sesuai kebutuhan
];

const ProductCard = ({ product }) => (
  <div className="bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center">
    <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
    <div className="text-gray-500 text-xs">{product.distance}</div>
    <h3 className="text-gray-800 font-semibold text-center mt-2">{product.name}</h3>
    <div className="flex items-center mt-1 text-red-500 line-through text-sm">Rp. {product.originalPrice.toLocaleString()}</div>
    <div className="text-green-700 font-bold text-lg">Rp. {product.discountedPrice.toLocaleString()}</div>
  </div>
);

// Validasi Prop untuk ProductCard
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    distance: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const ProductSection = ({ title, products }) => (
  <section className="my-8">
    <h2 className="bg-teal-500 text-white text-center py-2 rounded-md text-lg font-bold">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

// Validasi Prop untuk ProductSection
ProductSection.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number.isRequired,
    distance: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

const App = () => (
  <div className=" bg-white max-w-7xl mx-auto p-8 mt-8 rounded-lg">
    <ProductSection title="Diskon 30%" products={products.slice(0, 4)} />
    <ProductSection title="Diskon 30%" products={products.slice(4)} />
    <button className="bg-green-500 text-white py-2 px-4 mt-8 rounded-md mx-auto block hover:bg-green-600 transition duration-200">
      Lihat Lainnya
    </button>
  </div>
);

export default App;

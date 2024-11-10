// import { useRef, useEffect } from 'react';

// const products = [
//   { id: 1, name: 'Kambing Potong', price: 2000000, distance: '0.1 km', image: 'https://via.placeholder.com/150' },
//   { id: 2, name: 'Susu Kambing', price: 30000, distance: '2.3 km', image: 'https://via.placeholder.com/150' },
//   { id: 3, name: 'Kambing Perah', price: 4000000, distance: '0.3 km', image: 'https://via.placeholder.com/150' },
//   { id: 4, name: 'Daging Kambing', price: 130000, distance: '3.3 km', image: 'https://via.placeholder.com/150' },
//   { id: 5, name: 'Produk Tambahan 1', price: 50000, distance: '1.0 km', image: 'https://via.placeholder.com/150' },
//   { id: 6, name: 'Produk Tambahan 2', price: 75000, distance: '1.5 km', image: 'https://via.placeholder.com/150' },
//   // Tambahkan produk tambahan di sini untuk menguji scroll
// ];

// const ProductCarousel = () => {
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (carouselRef.current) {
//         carouselRef.current.scrollLeft += 1;
//         if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
//           carouselRef.current.scrollLeft = 0;
//         }
//       }
//     }, 20);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-white min-h-30 flex rounded-lg max-w-7xl mx-auto mt-8 lex-col items-center p-6">
//       <div  className="w-full max-w-5xl">
//       <h2 className="text-gray-800 font-bold text-xl mb-4">Produk Terpopuler</h2>
//       </div>
//       <div
//         ref={carouselRef}
//         className="flex gap-4 overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-hide p-4 bg-gray-100 rounded-lg"
//         style={{ maxWidth: '100%' }}
//       >
//         {products.map((product) => (
//           <div key={product.id} className="bg-red-100 rounded-lg shadow-md p-4 flex-shrink-0 max-w-7xl">
//             <img src={product.image} alt={product.name} className="w-full h-36 object-cover rounded-md mb-4" />
//             <div className="text-gray-500 text-xs">{product.distance}</div>
//             <h3 className="text-gray-800 font-semibold mt-2">{product.name}</h3>
//             <div className="text-green-700 font-bold text-lg">Rp. {product.price.toLocaleString()}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCarousel;

import { useRef, useEffect } from 'react';

const products = [
  { id: 1, name: 'Kambing Potong', price: 2000000, distance: '0.1 km', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Susu Kambing', price: 30000, distance: '2.3 km', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Kambing Perah', price: 4000000, distance: '0.3 km', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Daging Kambing', price: 130000, distance: '3.3 km', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Produk Tambahan 1', price: 50000, distance: '1.0 km', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Produk Tambahan 2', price: 75000, distance: '1.5 km', image: 'https://via.placeholder.com/150' },
];

const ProductCarousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white min-h-40 flex flex-col rounded-lg max-w-7xl mx-auto mt-8 lex-col items-center p-6 mb-20">
      {/* <h2> ditempatkan di dalam div terpisah untuk berada di atas carousel */}
      <div className="w-full max-w-5xl">
        <h2 className="text-gray-800 font-bold text-xl mb-4">Produk Terpopuler</h2>
      </div>

      {/* Container produk dengan overflow-x-scroll */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-scroll overflow-y-hidden whitespace-nowrap scrollbar-hide p-4 bg-gray-100 rounded-lg w-full max-w-5xl"
      >
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4 flex-shrink-0 w-60">
            <img src={product.image} alt={product.name} className="w-full h-36 object-cover rounded-md mb-4" />
            <div className="text-gray-500 text-xs">{product.distance}</div>
            <h3 className="text-gray-800 font-semibold mt-2">{product.name}</h3>
            <div className="text-green-700 font-bold text-lg">Rp. {product.price.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;

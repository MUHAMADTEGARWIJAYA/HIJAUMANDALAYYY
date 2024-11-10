

const products = [
  { name: "Kambing", image: "./assets/kambing.jpg" },
  { name: "Daging Kambing", image: "./assets/daging-kambing.jpg" },
  { name: "Gulai Kambing", image: "./assets/gulai-kambing.jpg" },
  { name: "Tongseng Kambing", image: "./assets/tongseng-kambing.jpg" },
  { name: "Sate Kambing", image: "./assets/sate-kambing.jpg" },
  { name: "Susu Kambing", image: "./assets/susu-kambing.jpg" },
];

const FeaturedProducts = () => {
  return (
    <div className="bg-[#ffffff] p-8 rounded-lg max-w-7xl mx-auto mt-8 py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Kategori Produk Unggulan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg shadow-md object-cover"
              />
              <p className="text-center font-semibold text-gray-800 mt-2">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

function ProductCard() {
    const products = [
      {
        id: 1,
        imageUrl: "https://via.placeholder.com/100",
        title: "Peternakan Al-Amin",
        description: "Kambing Boer (Ukuran Sedang)",
        unitPrice: 3000000,
        quantity: 2,
        totalPrice: 6000000,
      },
      {
        id: 2,
        imageUrl: "https://via.placeholder.com/100",
        title: "Peternakan Cipta Ternak",
        description: "Kambing Etawa (Ukuran Besar)",
        unitPrice: 3500000,
        quantity: 3,
        totalPrice: 10500000,
      },
      // Produk lainnya dapat ditambahkan di sini
    ];
  
    return (
      <div className="flex flex-col justify-center items-center min-h-fit">
        {products.map((product) => (
          <div key={product.id} className="p-3 bg-gray-50 rounded-lg shadow-md w-full max-w-4xl mb-4">
            {/* Mengubah flex ke arah kolom untuk bagian gambar dan teks */}
            <div className="flex flex-col items-center">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-24 h-24 rounded-md object-cover mb-4"
              />
              <div className="text-center">
                <h2 className="text-lg font-semibold text-gray-700">{product.title}</h2>
                <p className="text-gray-500">{product.description}</p>
              </div>
            </div>
  
            {/* Bagian harga dan kuantitas tetap horizontal */}
            <div className="flex justify-between items-center mt-4 border-t pt-4">
              <div className="text-left">
                <p className="text-gray-500">Harga Satuan</p>
                <p className="font-semibold">Rp{product.unitPrice.toLocaleString()}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Kuantitas</p>
                <span className="text-white font-semibold bg-green-500 px-3 py-1 rounded-md">
                  {product.quantity}
                </span>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Total Harga</p>
                <p className="font-semibold text-black">Rp{product.totalPrice.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default ProductCard;
  
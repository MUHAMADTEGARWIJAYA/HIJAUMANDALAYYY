

const KambingFresh = () => {
  // Data produk disimpan dalam array
  const products = [
    {
      id: 1,
      name: "Kambing Jawa Randu",
      price: "Rp2.100.000",
      image: "kambing_jawa.jpg",
    },
    {
      id: 2,
      name: "Susu Kambing",
      price: "Rp300",
      image: "susu_kambing.jpg",
    },
    {
      id: 3,
      name: "Daging Kambing Premium",
      price: "Rp144.000",
      image: "daging_kambing.jpg",
    },
  ];

  return (
    <div className="flex flex-col space-y-6 p-6 bg-white rounded-md shadow-md max-h-fit max-w-6xl">
      {/* Header */}
      <div className="text-xl font-semibold">
        <h1 className="text-blue-700">Selamat Datang di KambingFresh!</h1>
        <p className="text-gray-600">Ikuti rekomendasi dan strategi untuk penjualan pertama.</p>
      </div>

      {/* Produk Dilihat dan Dalam Keranjang */}
      <div className="flex justify-between space-x-4">
        <div className="flex flex-col bg-blue-50 p-4 rounded-md w-1/2">
          <h2 className="font-semibold text-blue-700">Produk Dilihat</h2>
         <a href=""> <p className="text-xl w-fit  text-green-500  mt-1">Tambah Produk</p></a>
          <p className="text-2xl font-bold">0%</p>
          <p className="text-xs text-gray-500">dari 30 hari terakhir</p>
        </div>
        <div className="flex flex-col bg-blue-50 p-4 rounded-md w-1/2">
          <h2 className="font-semibold text-blue-700">Dalam Keranjang</h2>
          <p className="text-2xl font-bold">0%</p>
          <p className="text-xs text-gray-500">dari 30 hari terakhir</p>
        </div>
      </div>

      {/* Tren Pasar */}
      <div className="bg-blue-50 p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-blue-700">Tren Pasar</h2>
          <select className="text-sm bg-white border border-gray-300 rounded-md p-1">
            <option value="populer">Produk Populer</option>
          </select>
        </div>

        {/* Header Nama Produk dan Harga */}
        <div className="flex justify-between text-gray-500 font-semibold mb-2">
          <span className="pl-56">Nama Produk</span>
          <span className="pr-20">Harga</span>
        </div>

        {/* Daftar Produk */}
        <div className="space-y-10">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between px-10 py-2 border-t border-gray-200">
              <div className="flex items-center space-x-20">
                <img src={product.image} alt={product.name} className="w-20 h-20 rounded" />
                <p className="font-semibold">{product.name}</p>
              </div>
              <div className="flex items-baseline">
        <span className="text-gray-600 font-semibold">Rp</span>
        <p className="text-gray-600 font-semibold ml-1">{product.price}</p>
      </div>
            </div>
            
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default KambingFresh;

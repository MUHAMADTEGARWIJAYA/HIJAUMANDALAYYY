import { useState } from 'react';

function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      farm: "Peternakan Al-Amin",
      name: "Kambing Boer (Ukuran Sedang)",
      price: 3000000,
      quantity: 1,
      image: "https://placekitten.com/200/200",
    },
    {
      id: 2,
      farm: "Peternakan Pak Simin",
      name: "Kambing Boer (Ukuran Kecil)",
      price: 2600000,
      quantity: 1,
      image: "https://placekitten.com/201/200",
    },
    {
      id: 3,
      farm: "Peternakan Ibu Siti",
      name: "Kambing Boer (Ukuran Besar)",
      price: 6000000,
      quantity: 1,
      image: "https://placekitten.com/202/200",
    },
  ]);

  const incrementQuantity = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        return item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : null;
      }
      return item;
    }).filter(item => item !== null)); // Filter out items with quantity zero
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 p-6 min-h-screen flex flex-col md:flex-row gap-6">
      {/* Bagian Keranjang */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Keranjang</h1>
        
        {/* Daftar Produk di Keranjang */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4l ">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="font-semibold">Pilih Semua ({cartItems.length})</span>
            </div>
            <button className="text-gray-600 font-semibold">Hapus</button>
          </div>
        </div>

        {cartItems.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg mb-4 mt-4 ">
            <div className="flex gap-4">
              <input type="checkbox" className="mt-2" />
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.farm}</h3>
                <p>{item.name}</p>
                <p className="text-green-600 font-bold">Rp{item.price.toLocaleString()}</p>
              </div>
              <div className="flex flex-col items-center justify-between">
                <div className="flex items-center">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="px-2 py-1 bg-green-600 text-white rounded"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="px-2 py-1 bg-green-600 text-white rounded"
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-800 font-semibold">
                  Rp{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 font-bold"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Ringkasan Transaksi */}
      <div className="w-full md:w-1/3 mt-12">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Ringkasan Transaksi</h2>
          <div className="flex justify-between mb-2">
            <span>Total Produk</span>
            <span>({totalItems})</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Total Harga</span>
            <span className="font-semibold text-green-600">Rp{totalPrice.toLocaleString()}</span>
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold">
            Beli
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;

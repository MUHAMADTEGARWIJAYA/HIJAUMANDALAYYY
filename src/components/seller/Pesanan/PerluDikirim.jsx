
const NeedToSend = () => {
    
    const orders = [
        {
          id: 1,
          productImage: "/path/to/kambing-boer.jpg", // Ganti dengan path gambar yang sesuai
          productName: "Kambing Boer",
          total: "Rp14.026.000",
          status: "Perlu Dikirim",
          buyer: "Wahyu",
          deliveryService: "Reguler (Cashless)",
          statusColor: "text-yellow-500"
        },
 
      ];
    
      return (
        <div className="max-w-6xl">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-2 bg-teal-700 text-white text-left">Produk</th>
              <th className="py-2 px-2 bg-teal-700 text-white text-left">Total Pesanan</th>
              <th className="py-2 px-2 bg-teal-700 text-white text-left">Status</th>
              <th className="py-2 px-2 bg-teal-700 text-white text-left">Pembeli</th>
              <th className="py-2 px-2 bg-teal-700 text-white text-left">Jasa Kirim</th>
              <th className="py-2 px-2 bg-teal-700 text-white text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-4 px-2 flex items-center space-x-4">
                  <img src={order.productImage} alt={order.productName} className="w-20 h-20 rounded" />
                  <span>{order.productName}</span>
                </td>
                <td className="py-4 px-2 text-left">{order.total}</td>
                <td className={`py-4 px-2 ${order.statusColor} text-left`}>{order.status}</td>
                <td className="py-4 px-2 text-left">{order.buyer}</td>
                <td className="py-4 px-2 text-left">{order.deliveryService}</td>
                <td className="py-4 px-2 text-left">
                  <button className="bg-green-500 text-white px-2 py-1 rounded text-sm">Detail Pesanan</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      );
    };
    
    export default NeedToSend;
    
function TransactionSummary() {
    return (
      <div className="flex justify-center items-center min-h-fit bg-gray-100 p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">Ringkasan Transaksi</h2>
  
          {/* Ringkasan Transaksi */}
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span>Total Produk</span>
              <span>(2)</span>
            </div>
            <div className="flex justify-between">
              <span>Total Harga (2 Produk)</span>
              <span>Rp6.000.000</span>
            </div>
            <div className="flex justify-between">
              <span>Total Ongkos Kirim</span>
              <span>Rp1.000.000</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Layanan Platform</span>
              <span>Rp1.000</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Penanganan</span>
              <span>Rp1.000</span>
            </div>
  
            {/* Total Pembayaran */}
            <div className="flex justify-between font-semibold text-lg mt-6">
              <span>Total Pembayaran</span>
              <span>Rp7.002.000</span>
            </div>
          </div>
  
          {/* Tombol Buat Pesanan */}
          <div className="mt-6">
            <button className="w-full py-2 bg-teal-800 text-white rounded-lg font-semibold hover:bg-teal-600">
              Buat Pesanan
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TransactionSummary;
  
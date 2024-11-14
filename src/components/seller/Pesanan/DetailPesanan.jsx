import { useState, useEffect } from "react";

const OrderDetail = () => {
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-gray-100">
       <a href="/semua"> <button className="mb-4 text-blue-600 hover:underline">← Back</button></a>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Detail Pesanan (OR001)</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <img src={images["5.jpg"]} alt="Kambing Boer" className="rounded-lg object-cover w-full h-full" />
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <p><strong>Nomor Pesanan</strong></p><p>OR001</p>
                <p><strong>Tanggal Pemesanan</strong></p><p>02/11/2004</p>
                <p><strong>Dipesan oleh</strong></p><p>Helmi</p>
                <p><strong>Alamat Pengiriman</strong></p><p>Jl. Manggala No.17, Kalimantan Selatan, Banjarmasin, Kec. Serayu, 60123</p>
                <p><strong>Jasa Pengiriman</strong></p><p>Reguler (Cashless)</p>
                <p><strong>Metode Pembayaran</strong></p><p>Virtual Account (Bank BCA)</p>
                <p><strong>Status Pengiriman</strong></p><p>Sedang dikirim</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-2">
          <h2 className="text-xl font-bold mb-4">Detail Produk dan Harga</h2>
          <table className="text-left">
            <thead>
              <tr>
                <th className=" p-2">No.</th>
                <th className=" p-2">Nama Produk</th>
                <th className=" p-2">Harga Satuan</th>
                <th className=" p-2">Kuantitas</th>
                <th className=" p-2">Total Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">1</td>
                <td className="p-2">Kambing Boer</td>
                <td className="p-2">Rp7.002.000</td>
                <td className="p-2">2</td>
                <td className="p-2">Rp14.004.000</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Harga</span>
              <span>Rp14.004.000</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Jasa Pengiriman</span>
              <span>Rp20.000</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Layanan Platform</span>
              <span>Rp1.000</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Penanganan</span>
              <span>Rp1.000</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total Pesanan</span>
              <span>Rp14.026.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;

import { CheckCircle } from "lucide-react";
import React from "react";

const BerhasilBayar = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
        {/* Success Icon and Message */}
        <div className="flex flex-col items-center text-center mb-6">
          <CheckCircle className="w-12 h-12 text-green-500 mb-2" />
          <h2 className="text-xl font-semibold text-gray-800">
            Pembayaran Berhasil!
          </h2>
          <p className="text-2xl font-bold text-gray-800">Rp 7,002,000</p>
        </div>

        {/* Payment Details */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Nomor Virtual Account</span>
            <span className="text-gray-800 font-semibold">000085752267</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Waktu Pembayaran</span>
            <span className="text-gray-800 font-semibold">
              01-11-2024, 13:22:16
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Payment Method</span>
            <span className="text-gray-800 font-semibold">
              BCA Virtual Account
            </span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-600">Nama Pengirim</span>
            <span className="text-gray-800 font-semibold">Hijau Mandala</span>
          </div>
          <div className="flex justify-between py-2 border-t border-gray-200 mt-2 pt-2">
            <span className="text-gray-600">Jumlah</span>
            <span className="text-gray-800 font-semibold">Rp 7,002,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BerhasilBayar;

import  { useState } from "react";

function BankAccountForm({ onAddBankAccount }) {
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolder, setAccountHolder] = useState("");

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Buat objek rekening baru
    const newAccount = {
      bankName,
      accountNumber,
      accountHolder
    };

    // Kirim data rekening baru ke komponen utama
    onAddBankAccount(newAccount);

    // Reset form
    setBankName("");
    setAccountNumber("");
    setAccountHolder("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-lg shadow-md">
      <h2 className="text-center text-lg font-semibold mb-6">Tambah Rekening Bank</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama Bank</label>
          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            placeholder="Masukkan Nama Bank"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Nomor Rekening</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Masukkan Nomor Rekening"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap Pemilik Rekening</label>
          <input
            type="text"
            value={accountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
            placeholder="Masukkan Nama Pemilik Rekening"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
        </div>

        <p className="text-xs text-gray-500 text-center mt-4 mb-6">
          Dengan klik tombol di bawah ini, kamu telah menyetujui{" "}
          <span className="text-blue-500 cursor-pointer">Syarat & Ketentuan</span> serta{" "}
          <span className="text-blue-500 cursor-pointer">Kebijakan Privasi</span> untuk penambahan rekening bank.
        </p>

        <button
          type="submit"
          className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 focus:outline-none"
        >
          Tambah Rekening Bank
        </button>
      </form>
    </div>
  );
}

export default BankAccountForm;

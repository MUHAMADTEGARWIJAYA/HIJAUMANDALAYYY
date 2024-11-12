import { useState } from "react";
import BankAccountForm from "./BankAccountForm";

function AddBankAccount() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddAccountClick = () => {
    setIsFormVisible(true); // Menampilkan form ketika tombol "Tambah Rekening Bank" diklik
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      {isFormVisible ? (
        <BankAccountForm /> // Menampilkan form jika isFormVisible bernilai true
      ) : (
        <>
          <h2 className="text-lg font-semibold mb-2">Kamu bisa simpan maksimal (2 rekening bank)</h2>
          <p className="text-sm text-gray-600 mb-4">
            Tambah Rekening Bank anda supaya lebih mudah saat tarik Saldo
          </p>
          <div
            onClick={handleAddAccountClick}
            className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:bg-gray-100"
          >
            <span className="text-2xl font-bold">+</span>
            <p className="ml-2 text-gray-600 font-medium">Tambah Rekening Bank</p>
          </div>
        </>
      )}
    </div>
  );
}

export default AddBankAccount;

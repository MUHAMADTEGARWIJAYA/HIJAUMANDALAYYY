

function AddBankAccount() {
  const handleAddAccount = () => {
    alert("Tambah Rekening Bank diklik");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Kamu bisa simpan maksimal (2 rekening bank)</h2>
      <p className="text-sm text-gray-600 mb-4">
        Tambah Rekening Bank anda supaya lebih mudah saat tarik Saldo
      </p>
      <div
        onClick={handleAddAccount}
        className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:bg-gray-100"
      >
        <span className="text-2xl font-bold">+</span>
        <p className="ml-2 text-gray-600 font-medium">Tambah Rekening Bank</p>
      </div>
    </div>
  );
}

export default AddBankAccount;

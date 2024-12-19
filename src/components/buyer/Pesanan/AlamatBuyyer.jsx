import  { useState } from 'react';

function Checkout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState({
    name: 'Rumah Hijau Mandala',
    phone: '+62 81152348756',
    detail: 'Jalan Angkasa No.43, Kalimantan Selatan, Banjarmasin, Kecamatan Gubeng, 60281'
  });
  const [tempAddress, setTempAddress] = useState(address); // Temp address for editing

  const openModal = () => {
    setTempAddress(address); // Reset temp address
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setTempAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setAddress(tempAddress); // Save changes
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 p-6 min-h-fit flex justify-center">
      <div className="bg-white rounded-lg shadow-md w-full max-w-4xl p-8 flex flex-col items-start">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
        
        <div className="w-full mb-6">
          <h3 className="text-lg font-medium mb-2">Alamat Pengiriman</h3>
          <div className="bg-gray-200 p-4 rounded-md">
            <p className="font-semibold">{address.name}</p>
            <p>{address.phone}</p>
            <p>{address.detail}</p>
          </div>
        </div>
        
        <button
          onClick={openModal}
          className="bg-green-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-600 transition"
        >
          Ganti Alamat
        </button>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium mb-4">Edit Alamat</h3>
              
              <input
                type="text"
                name="name"
                value={tempAddress.name}
                onChange={handleAddressChange}
                className="w-full p-2 mb-2 rounded-md border border-gray-300"
                placeholder="Nama"
              />
              <input
                type="text"
                name="phone"
                value={tempAddress.phone}
                onChange={handleAddressChange}
                className="w-full p-2 mb-2 rounded-md border border-gray-300"
                placeholder="Nomor Telepon"
              />
              <textarea
                name="detail"
                value={tempAddress.detail}
                onChange={handleAddressChange}
                className="w-full p-2 rounded-md border border-gray-300"
                placeholder="Detail Alamat"
                rows="3"
              />

              <div className="flex justify-end mt-4 space-x-2">
                <button
                  onClick={closeModal}
                  className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 transition"
                >
                  Batal
                </button>
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;

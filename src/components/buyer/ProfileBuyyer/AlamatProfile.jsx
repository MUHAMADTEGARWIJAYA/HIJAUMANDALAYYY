// AlamatSaya.js
import { useState } from "react";

function AlamatSaya() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: "Rumah",
      name: "Hijau Mandala",
      phone: "+62 81152348756",
      street: "Jalan Angkasa No.43",
      city: "Kalimantan Selatan, Banjarmasin",
      district: "Kecamatan Gubeng",
      postalCode: "60281",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentAddress, setCurrentAddress] = useState({
    id: null,
    label: "",
    name: "",
    phone: "",
    street: "",
    city: "",
    district: "",
    postalCode: "",
  });

  // Fungsi untuk membuka modal untuk tambah alamat baru
  const handleAddAddress = () => {
    setCurrentAddress({
      id: null,
      label: "",
      name: "",
      phone: "",
      street: "",
      city: "",
      district: "",
      postalCode: "",
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  // Fungsi untuk membuka modal untuk edit alamat
  const handleEditAddress = (address) => {
    setCurrentAddress(address);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // Fungsi untuk menyimpan alamat (baik tambah atau edit)
  const handleSaveAddress = () => {
    if (isEditing) {
      setAddresses((prevAddresses) =>
        prevAddresses.map((address) =>
          address.id === currentAddress.id ? currentAddress : address
        )
      );
    } else {
      setAddresses((prevAddresses) => [
        ...prevAddresses,
        { ...currentAddress, id: Date.now() },
      ]);
    }
    setIsModalOpen(false);
  };

  // Fungsi untuk menghapus alamat
  const handleDeleteAddress = (id) => {
    setAddresses((prevAddresses) => prevAddresses.filter((address) => address.id !== id));
  };

  return (
    <div className="flex flex-col w-full max-w-5xl bg-white shadow-lg rounded-lg p-8 m-4">
      {/* Header */}
      <div className="bg-teal-700 text-white text-center p-4 rounded-t-lg">
        <h2 className="text-lg font-semibold">Alamat Saya</h2>
      </div>

      {/* Button Tambah Alamat Baru */}
      <div className="flex justify-end mt-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 font-semibold"
          onClick={handleAddAddress}
        >
          + Tambah Alamat Baru
        </button>
      </div>

      {/* Daftar Alamat */}
      {addresses.map((address) => (
        <div
          key={address.id}
          className="flex flex-col bg-gray-100 rounded-lg p-4 mt-6 space-y-4 shadow-md"
        >
          <div className="flex justify-between">
            <div>
              <h3 className="font-semibold text-gray-700">{address.label}</h3>
              <p className="text-gray-900">{address.name}</p>
              <p className="text-gray-700">{address.phone}</p>
              <p className="text-gray-700">{address.street}</p>
              <p className="text-gray-700">
                {address.city}, {address.district}, {address.postalCode}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleEditAddress(address)}
                className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700"
              >
                Ubah
              </button>
              <button
                onClick={() => handleDeleteAddress(address.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal untuk Tambah / Ubah Alamat */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              {isEditing ? "Ubah Alamat" : "Tambah Alamat Baru"}
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Label (Rumah/Kantor)"
                value={currentAddress.label}
                onChange={(e) =>
                  setCurrentAddress({ ...currentAddress, label: e.target.value })
                }
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <input
                type="text"
                placeholder="Nama"
                value={currentAddress.name}
                onChange={(e) =>
                  setCurrentAddress({ ...currentAddress, name: e.target.value })
                }
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <input
                type="text"
                placeholder="Nomor Telepon"
                value={currentAddress.phone}
                onChange={(e) =>
                  setCurrentAddress({ ...currentAddress, phone: e.target.value })
                }
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <input
                type="text"
                placeholder="Jalan"
                value={currentAddress.street}
                onChange={(e) =>
                  setCurrentAddress({ ...currentAddress, street: e.target.value })
                }
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <input
                type="text"
                placeholder="Kota"
                value={currentAddress.city}
                onChange={(e) =>
                  setCurrentAddress({ ...currentAddress, city: e.target.value })
                }
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <input
                type="text"
                placeholder="Kecamatan"
                value={currentAddress.district}
                onChange={(e) =>
                  setCurrentAddress({ ...currentAddress, district: e.target.value })
                }
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <input
                type="text"
                placeholder="Kode Pos"
                value={currentAddress.postalCode}
                onChange={(e) =>
                  setCurrentAddress({ ...currentAddress, postalCode: e.target.value })
                }
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md font-semibold"
              >
                Batal
              </button>
              <button
                onClick={handleSaveAddress}
                className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AlamatSaya;

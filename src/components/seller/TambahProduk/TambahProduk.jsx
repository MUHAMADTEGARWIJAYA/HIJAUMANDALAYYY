import { useState } from "react";

function AddOrderPage() {
  const [formData, setFormData] = useState({
    productName: "",
    productImage: null,
    price: "",
    weight: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({ ...prevData, productImage: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk menambah pesanan di sini (misalnya simpan ke database atau tampilkan alert)
    alert("Pesanan berhasil ditambahkan!");
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Tambah Produk</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nama Produk */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Nama Produk</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                placeholder="Masukkan nama produk"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Gambar Produk */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Gambar Produk</label>
              <input
                type="file"
                name="productImage"
                onChange={handleImageChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                accept="image/*"
              />
            </div>

            {/* Harga */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Harga</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Masukkan harga produk"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Berat */}
            <div>
              <label className="block text-gray-600 font-medium mb-2">Berat (gram)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="Masukkan berat produk"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Deskripsi Barang - Mengambil satu kolom penuh */}
            <div className="md:col-span-2">
              <label className="block text-gray-600 font-medium mb-2">Deskripsi Barang</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Masukkan deskripsi produk"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="4"
                required
              />
            </div>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full bg-green-400 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition duration-200"
          >
            Tambah Produk
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddOrderPage;

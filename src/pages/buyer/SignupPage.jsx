import { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika submit, bisa dengan API atau lainnya
    console.log("Data Form:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-6">
          <img
            src="https://placekitten.com/400/300" // Ganti dengan URL gambar yang sesuai
            alt="Kambing"
            className="rounded-lg object-cover w-full"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Daftar Akun KambingFresh
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Daftarkan akun anda agar Anda dapat mengakses akun pribadi Anda.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Nama Lengkap"
            value={form.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Nomor Telepon"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="Kata Sandi"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Konfirmasi Kata Sandi"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Daftar
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Sudah mempunyai akun?{" "}
            <a href="/#" className="text-blue-500 font-semibold">
              Login
            </a>
          </p>
          <p className="mt-4 text-gray-600 text-sm">Atau daftar menggunakan</p>
          <div className="flex justify-center space-x-4 mt-2">
            <button className="bg-blue-600 text-white p-3 rounded-full">
              <i className="fab fa-facebook-f"></i> {/* Ikon Facebook */}
            </button>
            <button className="bg-red-500 text-white p-3 rounded-full">
              <i className="fab fa-google"></i> {/* Ikon Google */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

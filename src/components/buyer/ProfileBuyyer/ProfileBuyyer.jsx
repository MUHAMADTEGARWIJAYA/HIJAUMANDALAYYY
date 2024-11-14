// UserProfile.js
import { useState } from "react";

function UserProfile() {
  // State untuk menyimpan data pengguna
  const [name, setName] = useState("Hijau Mandala");
  const [email, setEmail] = useState("hijaumandala@gmail.com");
  const [phone, setPhone] = useState("+6281152348756");
  const [gender, setGender] = useState("Perempuan");
  const [birthDate, setBirthDate] = useState({ day: "20", month: "02", year: "2002" });

  // State untuk melacak apakah field dalam mode edit atau tidak
  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    phone: false,
    gender: false,
    birthDate: false,
  });

  // State untuk menyimpan foto profil
  const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");

  // Fungsi untuk mengaktifkan mode edit pada field tertentu
  const handleEditClick = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  // Fungsi untuk menyimpan perubahan
  const handleSave = () => {
    setIsEditing({
      name: false,
      email: false,
      phone: false,
      gender: false,
      birthDate: false,
    });
    alert("Data berhasil disimpan!");
    console.log({
      name,
      email,
      phone,
      gender,
      birthDate,
    });
  };

  // Fungsi untuk mengubah foto profil
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-5xl bg-white shadow-lg rounded-lg m-4">
      {/* Header */}
      <div className="bg-teal-800 text-white text-center p-4 rounded-t-lg">
        <h2 className="text-lg font-semibold">Profil Pengguna</h2>
      </div>

      <div className="flex p-8 space-x-8">
        {/* Profile Image and Upload Button */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="upload-photo"
          />
          <label
            htmlFor="upload-photo"
            className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
          >
            Pilih Foto
          </label>
          <p className="text-sm text-gray-500 text-center">
            Ukuran File Maksimal 10 MB, Format File yang di izinkan: (Jpg, Jpeg, PNG)
          </p>
        </div>

        {/* User Information Form */}
        <div className="flex flex-col space-y-6 w-full">
          {/* Name */}
          <div className="flex items-center space-x-4">
            <label className="w-32 text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing.name}
            />
            <button
              onClick={() => handleEditClick("name")}
              className="text-green-500"
            >
              Ubah
            </button>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <label className="w-32 text-gray-700">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditing.email}
            />
            <button
              onClick={() => handleEditClick("email")}
              className="text-green-500"
            >
              Ubah
            </button>
          </div>

          {/* Phone Number */}
          <div className="flex items-center space-x-4">
            <label className="w-32 text-gray-700">Nomer Telepon</label>
            <input
              type="tel"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={!isEditing.phone}
            />
            <button
              onClick={() => handleEditClick("phone")}
              className="text-green-500"
            >
              Ubah
            </button>
          </div>

          {/* Gender */}
          <div className="flex items-center space-x-4">
            <label className="w-32 text-gray-700">Jenis Kelamin</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="mr-2"
                  checked={gender === "Laki-Laki"}
                  onChange={() => setGender("Laki-Laki")}
                  disabled={!isEditing.gender}
                />
                Laki-Laki
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  className="mr-2"
                  checked={gender === "Perempuan"}
                  onChange={() => setGender("Perempuan")}
                  disabled={!isEditing.gender}
                />
                Perempuan
              </label>
            </div>
            <button
              onClick={() => handleEditClick("gender")}
              className="text-green-500"
            >
              Ubah
            </button>
          </div>

          {/* Date of Birth */}
          <div className="flex items-center space-x-4">
            <label className="w-32 text-gray-700">Tanggal Lahir</label>
            <div className="flex space-x-2">
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-12 text-center"
                value={birthDate.day}
                onChange={(e) => setBirthDate({ ...birthDate, day: e.target.value })}
                disabled={!isEditing.birthDate}
              />
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-12 text-center"
                value={birthDate.month}
                onChange={(e) => setBirthDate({ ...birthDate, month: e.target.value })}
                disabled={!isEditing.birthDate}
              />
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 w-16 text-center"
                value={birthDate.year}
                onChange={(e) => setBirthDate({ ...birthDate, year: e.target.value })}
                disabled={!isEditing.birthDate}
              />
            </div>
            <button
              onClick={() => handleEditClick("birthDate")}
              className="text-green-500"
            >
              Ubah
            </button>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

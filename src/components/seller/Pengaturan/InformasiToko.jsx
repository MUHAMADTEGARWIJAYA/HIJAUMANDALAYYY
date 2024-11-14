import { useState } from 'react';

const StoreProfile = () => {
  const [photo, setPhoto] = useState(null);
  const [storeName, setStoreName] = useState("Hijau Mandala");
  const [storeDomain, setStoreDomain] = useState("www.KambingFresh.com/Hijau Mandala");
  const [description, setDescription] = useState("");
  const [descriptionCount, setDescriptionCount] = useState(0);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [tempStoreName, setTempStoreName] = useState(storeName);
  const [tempStoreDomain, setTempStoreDomain] = useState(storeDomain);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleSaveInfo = () => {
    setStoreName(tempStoreName);
    setStoreDomain(tempStoreDomain);
    setIsPopupOpen(false);
  };

  const handleSaveDescription = () => {
    alert("Data deskripsi tersimpan!");
  };

  return (
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-6">Profil Toko</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Photo Upload Section */}
        <div className="p-4 rounded-md shadow border flex">
          <div className="w-32 h-32 mb-4 border border-gray-300 mr-4">
            <img 
              src={photo || "https://via.placeholder.com/300"} 
              alt="Store" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handlePhotoChange} 
              className="hidden" 
              id="upload-photo"
            />
            <label htmlFor="upload-photo" className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer max-w-fit">
              Pilih Foto
            </label>
            <p className="text-gray-500 text-sm mt-2">
              Ukuran optimal 300 × 300 piksel dengan besar file Maksimum 10.000.000 bytes (10 Megabytes).<br />
              Eksistensi File yang diperbolehkan JPG, JPEG, dan PNG
            </p>
          </div>
        </div>
        
        {/* Store Information Section */}
        <div className="bg-white p-4 rounded-md shadow border">
          <div className="mb-4">
            <p className="font-semibold">Nama Toko</p>
            <p>{storeName}</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Domain Toko</p>
            <p>{storeDomain}</p>
          </div>
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Ubah
          </button>
        </div>
        
        {/* Description Section */}
        <div className="col-span-2 bg-white p-4 rounded-md shadow border">
          <label className="block font-semibold mb-2">Deskripsi</label>
          <textarea 
            value={description} 
            onChange={(e) => {
              setDescription(e.target.value);
              setDescriptionCount(e.target.value.length);
            }}
            maxLength={150}
            rows="4"
            className="w-full border border-gray-300 p-2 rounded"
          ></textarea>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-500 text-sm">{descriptionCount}/150</span>
            <button 
              onClick={handleSaveDescription}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal for Editing Store Info */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-80">
            <h3 className="text-lg font-bold mb-4">Ubah Informasi Toko</h3>
            <div className="mb-4">
              <label className="block font-semibold mb-2">Nama Toko</label>
              <input 
                type="text" 
                value={tempStoreName} 
                onChange={(e) => setTempStoreName(e.target.value)} 
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            
            <div className="mb-4">
              <label className="block font-semibold mb-2">Domain Toko</label>
              <input 
                type="text" 
                value={tempStoreDomain} 
                onChange={(e) => setTempStoreDomain(e.target.value)} 
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="flex justify-end">
              <button 
                onClick={() => setIsPopupOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Batal
              </button>
              <button 
                onClick={handleSaveInfo}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoreProfile;

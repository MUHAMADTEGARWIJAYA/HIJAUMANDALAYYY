

const PromoBanner = () => {
  return (
    <div className="bg-[#f7e4db] p-8 rounded-lg max-w-7xl mx-auto mt-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex flex-col gap-4 max-w-md text-center md:text-left">
          <h2 className="text-2xl font-bold text-black">
            Belanja Hemat, Mudah dan Cepat Hanya di Sini!
          </h2>
          <p className="text-gray-700">
            Temukan berbagai produk kambing berkualitas unggul di marketplace kami
          </p>
          <a href="/halamanproduk"><button className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow-lg hover:bg-green-600 transition duration-300">
            Beli Sekarang
          </button></a>
        </div>
        <img
          src="./assets/steak-image.png"  // Replace this with the correct path to your image
          alt="Steak"
          className="rounded-lg max-w-xs"
        />
      </div>
    </div>
  );
};

export default PromoBanner;

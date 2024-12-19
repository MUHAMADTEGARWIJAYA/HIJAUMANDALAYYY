

function HalamanProduct() {
  return (
    <div className="bg-pink-100 min-h-96 mb-10">
      <div className="relative">
        <img
          src="https://placekitten.com/1200/400" // Ganti dengan URL gambar kambing yang sesuai
          alt="Background"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start px-8">
          <h1 className="text-4xl max-w-2xl md:text-4xl font-bold text-white mb-4">
            Mudah & Transparan! Kambing Langsung dari Peternak
          </h1>
          <p className="text-white text-lg md:text-1xl max-w-2xl">
            Akses langsung ke peternak, harga transparan, dan kualitas terjamin.
            Pilih kambing untuk kebutuhan Anda hanya di sini!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HalamanProduct;

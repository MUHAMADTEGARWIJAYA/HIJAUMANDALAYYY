

function ProductDescription() {
  return (
    <div className="bg-gray-100 min-h-fit flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl">
        {/* Judul */}
        <div className="bg-teal-700 text-white font-bold text-lg text-center py-3 rounded-t-lg">
          Deskripsi Produk
        </div>

        {/* Konten Deskripsi */}
        <div className="p-4 text-gray-800">
          {/* Nama Produk */}
          <h2 className="text-xl font-semibold mb-4">Kambing Boer (Ukuran Sedang)</h2>

          {/* Deskripsi Produk */}
          <h3 className="font-semibold mb-2">-. Deskripsi Produk:</h3>
          <p className="mb-4">
            Dapatkan kambing Boer ukuran sedang yang sehat dan berkualitas tinggi! Kambing ini terkenal dengan produksi daging yang optimal, menjadikannya pilihan tepat untuk konsumsi atau acara khusus. Kambing Boer dikenal dengan pertumbuhan cepat, tubuh berotot, dan daging yang berkualitas.
          </p>

          {/* Detail Produk */}
          <h3 className="font-semibold mb-2">-. Detail Produk:</h3>
          <ul className="mb-4 list-disc pl-5">
            <li>Berat: ±35-45 kg (tergantung ukuran)</li>
            <li>Umur: 10-15 bulan</li>
            <li>Jenis Kelamin: Jantan/Betina</li>
            <li>Asal: Peternakan lokal, Jawa Tengah</li>
            <li>Kondisi Kambing: Sehat, bebas penyakit</li>
          </ul>

          {/* Keunggulan */}
          <h3 className="font-semibold mb-2">-. Keunggulan:</h3>
          <ul className="mb-4 list-disc pl-5">
            <li>Daging Berkualitas Tinggi: Kambing Boer menghasilkan daging yang lebih banyak dan kaya nutrisi.</li>
            <li>Pertumbuhan Cepat: Cocok untuk pembesaran dan penggemukan lebih lanjut.</li>
            <li>Kambing Sehat: Dirawat dengan pakan berkualitas dan pengawasan ketat.</li>
            <li>Perawatan Mudah: Tidak membutuhkan perawatan intensif dan adaptif terhadap berbagai lingkungan.</li>
          </ul>

          {/* Informasi Kesehatan */}
          <h3 className="font-semibold mb-2">-. Informasi Kesehatan:</h3>
          <ul className="mb-4 list-disc pl-5">
            <li>Vaksinasi: Sudah divaksin dan bebas dari penyakit menular.</li>
            <li>Pakan: Diberi pakan alami (rumput segar) dan suplemen tambahan.</li>
            <li>Kesehatan Fisik: Postur besar dan berotot, bulu tebal, dan mata sehat.</li>
          </ul>

          {/* Cara Pemeliharaan */}
          <h3 className="font-semibold mb-2">-. Cara Pemeliharaan:</h3>
          <ul className="mb-4 list-disc pl-5">
            <li>Pastikan kandang bersih dan berventilasi baik.</li>
            <li>Sediakan air bersih dan pakan yang cukup setiap hari.</li>
            <li>Rutin membersihkan kandang dan menjaga kebersihan kambing.</li>
          </ul>

          {/* Catatan */}
          <h3 className="font-semibold mb-2">-. Catatan:</h3>
          <ul className="mb-4 list-disc pl-5">
            <li>Pengiriman dapat dalam kondisi hidup atau dipotong sesuai permintaan.</li>
            <li>Berat kambing mungkin sedikit bervariasi (±5%).</li>
            <li>Cocok untuk konsumsi pribadi, aqiqah, atau acara khusus lainnya.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;

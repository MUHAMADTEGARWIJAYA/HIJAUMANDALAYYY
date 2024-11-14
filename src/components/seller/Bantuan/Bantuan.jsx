import  { useState } from 'react';

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Array of FAQ questions and answers
  const faqs = [
    {
      question: "[Akun Saya] Bagaimana cara mendaftar dan mengelola akun di KambingFresh?",
      answer: "Untuk mendaftar, klik tombol 'Daftar' di halaman utama dan isi data yang diminta. Anda bisa mengelola akun melalui menu 'Pengaturan Akun'."
    },
    {
      question: "[Lupa Kata Sandi] Apa yang harus dilakukan jika saya lupa kata sandi akun saya?",
      answer: "Klik 'Lupa Kata Sandi' di halaman login, lalu ikuti petunjuk untuk mengatur ulang kata sandi melalui email yang terdaftar."
    },
    {
      question: "[Pembelian Produk] Bagaimana cara mencari dan membeli produk yang saya inginkan?",
      answer: "Gunakan fitur pencarian atau jelajahi kategori untuk menemukan produk. Setelah itu, tambahkan produk ke keranjang dan lanjutkan ke checkout untuk membeli."
    },
    {
      question: "[Pembayaran] Metode pembayaran apa saja yang tersedia di KambingFresh?",
      answer: "Kami menerima pembayaran melalui transfer bank, kartu kredit, dan e-wallet seperti OVO dan GoPay."
    },
    {
      question: "[Transaksi Aman] Apakah transaksi di KambingFresh dijamin aman?",
      answer: "Ya, transaksi di KambingFresh dilindungi oleh sistem keamanan yang teruji untuk menjaga kerahasiaan data Anda."
    },
    {
      question: "[Pengiriman] Bagaimana cara melacak status pengiriman pesanan saya?",
      answer: "Anda bisa melacak status pengiriman melalui menu 'Pesanan Saya' atau dengan nomor resi yang dikirimkan setelah produk dikirim."
    },
    {
      question: "[Pengembalian Produk] Bagaimana cara mengajukan pengembalian produk yang tidak sesuai?",
      answer: "Ajukan pengembalian melalui menu 'Pesanan Saya' dengan memilih produk yang ingin dikembalikan dan alasan pengembalian."
    },
    {
      question: "[Ulasan Produk] Bagaimana cara memberikan ulasan untuk produk yang telah saya beli?",
      answer: "Setelah produk diterima, masuk ke 'Pesanan Saya' dan pilih produk yang ingin Anda ulas untuk memberikan feedback."
    },
    {
      question: "[Promo & Diskon] Bagaimana cara menggunakan kode promo saat checkout?",
      answer: "Masukkan kode promo di halaman checkout pada kolom 'Kode Promo' dan klik 'Terapkan'. Diskon akan otomatis diterapkan."
    },
    {
      question: "[Layanan Pelanggan] Bagaimana cara menghubungi layanan pelanggan KambingFresh untuk bantuan lebih lanjut?",
      answer: "Anda bisa menghubungi layanan pelanggan melalui menu 'Bantuan' atau melalui chat di aplikasi KambingFresh."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        
        {/* Search Section */}
        <div className="w-full mb-8">
          <div className="flex justify-start mb-4">
            <a href="/home"><button className="text-blue-500">&larr; Kembali</button></a>
          </div>
          <h1 className="text-2xl font-semibold text-center mb-4">Halo, ada yang bisa kami bantu?</h1>
          <input
            type="text"
            placeholder="Cari Kata Kunci (misal: pengiriman barang)"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        {/* Buttons Section */}
        <div className="w-full mb-8">
          <h2 className="text-lg font-semibold text-center mb-4">Pilih topik sesuai kendala anda</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex-1 min-w-[45%] bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-600 text-center">Pendaftaran dan Akun</button>
            <button className="flex-1 min-w-[45%] bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-600 text-center">Cara Belanja di KambingFresh</button>
            <button className="flex-1 min-w-[45%] bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-600 text-center">Promo dan Diskon</button>
            <button className="flex-1 min-w-[45%] bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-600 text-center">Pembayaran dan Transaksi</button>
            <button className="flex-1 min-w-[45%] bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-600 text-center">Dukungan Pelanggan</button>
            <button className="flex-1 min-w-[45%] bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-600 text-center">Penilaian dan Ulasan Produk</button>
            <button className="flex-1 min-w-[45%] bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-600 text-center">Kebijakan dan Keamanan Pengguna</button>
            <button className="flex-1 min-w-[45%] bg-teal-700 text-white py-2 px-4 rounded-lg hover:bg-teal-600 text-center">Pengiriman dan Pengembalian Barang</button>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="w-full mt-8">
          <h2 className="text-xl font-semibold mb-4">FAQ (Frequently Asked Question)</h2>
          <div className="border rounded-lg">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b">
                <div
                  className="p-4 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span>{openIndex === index ? '-' : '+'}</span>
                </div>
                {openIndex === index && (
                  <div className="p-4 bg-gray-50 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HelpCenter;

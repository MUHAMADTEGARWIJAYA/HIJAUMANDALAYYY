
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* KambingFresh Description */}
        <div>
          <h2 className="text-xl font-bold">KambingFresh</h2>
          <p className="mt-4 text-sm">
            KambingFresh adalah platform digital yang memudahkan akses pembelian kambing langsung dari peternak lokal.
            Kami hadir untuk mendukung peternak dan menyediakan pengalaman berbelanja kambing yang mudah, transparan, dan terpercaya bagi Anda.
          </p>
          <button className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-500">
            Baca selengkapnya
          </button>
        </div>

        {/* Jelajahi Halaman */}
        <div>
          <h2 className="text-xl font-bold">Jelajahi Halaman</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Beranda</a></li>
            <li><a href="/" className="hover:underline">Produk</a></li>
            <li><a href="/" className="hover:underline">Tentang Kami</a></li>
            <li><a href="/" className="hover:underline">Hubungi Kami</a></li>
            <li><a href="/" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Bantuan dan Panduan */}
        <div>
          <h2 className="text-xl font-bold">Bantuan dan Panduan</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Bantuan</a></li>
            <li><a href="/" className="hover:underline">Edukasi</a></li>
            <li><a href="/" className="hover:underline">Syarat dan Ketentuan</a></li>
            <li><a href="/" className="hover:underline">Kebijakan Privasi</a></li>
          </ul>
        </div>

        {/* Kontak Kami */}
        <div>
          <h2 className="text-xl font-bold">Kontak Kami</h2>
          <p className="mt-4 text-sm">kambingfresh@gmail.com</p>
          <p className="text-sm">+6281234589534</p>
          <div className="mt-4 flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <IoLogoFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <IoLogoInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <IoLogoTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 border-t border-gray-500 text-center pt-4">
        <p className="text-sm text-gray-400">© KambingFresh 2024. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

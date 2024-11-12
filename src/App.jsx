import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout"; // Layout untuk halaman login
import BuyerLayout from "./layout/BuyerLayout";
import Login from "./pages/buyer/LoginPage"; // Halaman login
import SingupPage from "./pages/buyer/SignupPage";
// import Header from './components/buyer/Home/Header'
import HalLayout from './layout/HalLayout'
import Universal from './layout/Universal';
import Keranjang from './pages/buyer/Keranjang'
import PendaftaranToko from './pages/seller/PendaftaranToko'
import Verifikasi from './pages/seller/Verifikasi'
import HomeLayout from './layout/Seller/HomeLayout'
import PesananLayout from './layout/Seller/PesananLayout'
import Semua from './components/seller/Pesanan/Semua'
import NotBayar from './components/seller/Pesanan/NotBayar'
import Dibatalkan from './components/seller/Pesanan/Dibatalkan'
import PerluDikirim from './components/seller/Pesanan/PerluDikirim'
import Dikirim from './components/seller/Pesanan/Dikirim'
import Selesai from './components/seller/Pesanan/Selesai'
import DetailPesanan from './components/seller/Pesanan/DetailPesanan'
import Produk from './components/seller/Produk/Produk'
import ProdukLayout from './layout/Seller/ProdukLayout';
import ChatLayout from './layout/Seller/ChatLayout'
import PengaturanLayout from './layout/Seller/PengaturanLayout'
import InformasiToko from './components/seller/Pengaturan/InformasiToko'
import Rekening from './components/seller/Pengaturan/Rekening'
import BantuanLayout from './layout/Seller/BantuanLayout';
import TambahProdukLayout from './layout/Seller/TambahProdukLayout'
import EdukasiLayout from './layout/Seller/EdukasiLayout';
import AkunSaya from "./pages/buyer/AkunSaya";
import AlamatSaya from "./pages/buyer/AlamatSaya";
import BelumBayar from "./pages/buyer/BelumBayar";
import BerhasilBayar from "./pages/buyer/BerhasilBayar";
import DetailPembayaran from "./pages/buyer/DetailPembayaran";

import PesananSaya from "./pages/buyer/PesananSaya";
import ProductDetailPage from "./pages/buyer/ProductDetailPage";
import DetailProdukLay from './layout/DetailProdukLay'
import Succes from './pages/seller/Succes'
import Pemesanan from './layout/PemesananLay'


function App() {
    return (
     
            <Routes>
                {/* Rute untuk halaman login dengan AuthLayout */}
                <Route element={<AuthLayout />}>
                    <Route path="/" element={<Login />} />
                    <Route path="/singup" element={<SingupPage />} />
                </Route>
                {/* Rute BuyerLayout */}
                <Route element={<BuyerLayout />}>
                    <Route path="/utama" element={<div />}/>
                </Route>
                {/* Route HalLayout */}
                <Route element={<HalLayout />}>
                    <Route path="/halamanproduk" element={<div />}/>
                </Route>

                {/* Ini pemesanan */}
                <Route element={<Pemesanan />}>
                    <Route path="/pemesanan" element={<div />}/>
                </Route>
                {/* Universal Layout */}
                <Route element={<Universal />}>
                    <Route path="/keranjang" element={<Keranjang />}/>
                    <Route path="/pendaftarantoko" element={<PendaftaranToko />}/>
                    <Route path="/verifikasi" element={<Verifikasi />}/>
                    <Route path="/detailpesanan" element={<DetailPesanan />}/>
                    <Route path="/detailpembayaran" element={<DetailPembayaran />} />
                    <Route path="/belumbayar" element={<BelumBayar />} />
                    <Route path="/productdetail" element={<ProductDetailPage />} />
                 
                    <Route path="/alamatsaya" element={<AlamatSaya />} />
                    <Route path="/akunsaya" element={<AkunSaya />} />
                    <Route path="/berhasilbayar" element={<BerhasilBayar />} />
                    <Route path="/pesanansaya" element={<PesananSaya />} />
                    <Route path="/sukses" element={<Succes />} />
                    
                </Route>

                {/* Home sidebarSeller*/}
                <Route element={<HomeLayout />}>
                  <Route path="/home" element={<div />}/>
                </Route>

                <Route element={<DetailProdukLay />}>
                  <Route path="/detailproduk" element={<div />}/>
                </Route>


               {/* Produk Sidebar Seller */}
               <Route element={<PesananLayout />}>
                 <Route path="/semua" element={<Semua />}/>
                 <Route path="/notbayar" element={<NotBayar />}/>
                 <Route path="/dibatalkan" element={<Dibatalkan />}/>
                 <Route path="/perludikirim" element={<PerluDikirim />}/>
                 <Route path="/dikirim" element={<Dikirim />}/>
                 <Route path="/selesai" element={<Selesai/>}/>
                </Route>

                {/* Produk Seller */}
                <Route element={<ProdukLayout />}>
                  <Route path="/produk" element={<Produk />}/>
                </Route>

                {/* ChatLayout */}
                <Route element={<ChatLayout />}>
                  <Route path="/chat" element={<div />}/>
                </Route>
                
                {/*Rekening Layou*/}
                <Route element={<PengaturanLayout />}>
                  <Route path="/pengaturan" element={<InformasiToko />}/>
                  <Route path="/rekening" element={<Rekening />}/>
                </Route>

                <Route element={<BantuanLayout />}>
                  <Route path="/bantuan" element={<div />}/>
                 
                </Route>

                <Route element={<TambahProdukLayout />}>
                  <Route path="/tambahproduk" element={<div />}/>
                </Route>

                <Route element={<EdukasiLayout />}>
                  <Route path="/edukasi" element={<div />}/>
                </Route>
            </Routes>
     
    );
  }



export default App;



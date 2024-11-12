import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AlamatBuyyer from '../components/buyer/Pesanan/AlamatBuyyer'
import ProdukPemesanan from '../components/buyer/Pesanan/ProdukPemesanan'
import Pengiriman from '../components/buyer/Pesanan/Pengiriman'
import PilihRek from '../components/buyer/Pesanan/PilihRek'
import RingkasanTran from '../components/buyer/Pesanan/RinngkasanTran'
const PesananLay = () => {
    return (
        <div className='bg-gray-100 min-h-screen flex flex-col'>
            <Navbar /> 
            
            {/* <Outlet /> Halaman login akan dirender di sini */}
            
            
          
                <AlamatBuyyer  /> 
                
                
             
                
            <ProdukPemesanan />
        
            <Pengiriman />
            <PilihRek />
            <RingkasanTran />
            <Footer />
          
        </div>
    );
};

export default PesananLay;
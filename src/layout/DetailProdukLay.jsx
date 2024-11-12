import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // Navbar khusus login
// import { Outlet } from 'react-router-dom';
import DeksDetail from '../components/buyer/DetailProduk/DeskDetail'
import DetailTop from '../components/buyer/DetailProduk/DetailTop'
// import Unggulan from '../components/buyer/Home/Unggulan'
import Ulasan from '../components/buyer/DetailProduk/Ulasan'
const BuyerLayout = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar /> {/* Navbar khusus login */}
            
            {/* <Outlet /> Halaman login akan dirender di sini */}
           
            <DetailTop />
            <DeksDetail />
            {/* <Unggulan /> */}
            <Ulasan />
            <Footer />
          
        </div>
    );
};

export default BuyerLayout;
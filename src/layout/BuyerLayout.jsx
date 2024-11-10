import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // Navbar khusus login
// import { Outlet } from 'react-router-dom';
import Header from '../components/buyer/Home/Header'
import Product from '../components/buyer/Home/Product'
import Diskon from '../components/buyer/Home/Diskon'
import Unggulan from '../components/buyer/Home/Unggulan'

const BuyerLayout = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar /> {/* Navbar khusus login */}
            
            {/* <Outlet /> Halaman login akan dirender di sini */}
            <Header />
            <Product />
            <Diskon />
            <Unggulan />

            <Footer />
          
        </div>
    );
};

export default BuyerLayout;
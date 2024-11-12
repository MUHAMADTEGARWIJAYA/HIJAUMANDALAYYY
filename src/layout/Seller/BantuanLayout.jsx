import Footer from '../../components/Footer';
import NavbarBantuan from '../../components/NavbarBantuan';

import Bantuan from '../../components/seller/Bantuan/Bantuan'

const BantuanLayout = () => {
    return (
        <div className='bg-gray-100 min-h-screen flex flex-col'>
            <NavbarBantuan /> 
            
            {/* <Outlet /> Halaman login akan dirender di sini */}
            
           
            <Bantuan  /> 
            
          

            <Footer />
          
        </div>
    );
};

export default BantuanLayout;
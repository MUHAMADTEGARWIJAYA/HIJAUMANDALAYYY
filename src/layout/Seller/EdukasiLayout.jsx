import Footer from '../../components/Footer';
import NavbarEdukasi from '../../components/NavbarEdukasi';

import Edukasi from '../../components/seller/Edukasi/Edukasi';


const HomeLayout = () => {
    return (
        <div className='bg-gray-100 min-h-screen flex flex-col'>
            <NavbarEdukasi /> 
            
            {/* <Outlet /> Halaman login akan dirender di sini */}
            
           
                <Edukasi  /> 
           
          

            <Footer />
          
        </div>
    );
};

export default HomeLayout;
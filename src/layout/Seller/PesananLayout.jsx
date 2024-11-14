import NavSeller from '../../components/NavSeller'
import Footer from '../../components/Footer'
import SidebarSeller from '../../components/SidebarSeller'
import NavPesanan from '../../components/seller/Pesanan/NavPesanan'
// import { Outlet } from 'react-router-dom';
// import Home from '../../components/seller/Home/Home'

import { Outlet } from 'react-router-dom'
const Pesanan = () => {
    return (
        <div>
            <NavSeller /> {/* Navbar khusus login */}
            
             {/* <Outlet /> Halaman yang ada akan dirender di sini */}
           
             <div className="flex flex-1 p-4 gap-4">
                <SidebarSeller className="w-1/4" /> 
                <div className="flex-1">
                <NavPesanan  /> 
                <Outlet />
                {/* <Home /> */}
                </div>
            </div>
        
          <Footer />
        </div>
    );
};

export default Pesanan;



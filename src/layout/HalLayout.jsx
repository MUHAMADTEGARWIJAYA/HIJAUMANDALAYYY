import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // Navbar khusus login
// import { Outlet } from 'react-router-dom';
import Top from '../components/buyer/HalamanProduct/Top'
import SidebarHal from '../components/buyer/HalamanProduct/SidebarHal'
import ContentHal from '../components/buyer/HalamanProduct/ContentHal'

const HalLayout = () => {
    return (
        <div className='bg-gray-100'>
            <Navbar /> {/* Navbar khusus login */}
            
            {/* <Outlet /> Halaman login akan dirender di sini */}
            
            <Top />
            <div className="flex flex-1 p-4 gap-4">
                <SidebarHal className="w-1/4" /> {/* Sidebar menempati 1/4 dari lebar */}
                <ContentHal className="flex-1" /> {/* Konten utama mengambil sisa lebar */}
            </div>

            <Footer />
          
        </div>
    );
};

export default HalLayout;
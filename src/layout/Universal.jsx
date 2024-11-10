import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // Navbar khusus login
import { Outlet } from 'react-router-dom';

const Universal = () => {
    return (
        <div>
         <Navbar /> {/* Navbar khusus login */}
            
            <Outlet /> {/* Halaman login akan dirender di sini */}
            
         <Footer />
        </div>
    );
};

export default Universal;



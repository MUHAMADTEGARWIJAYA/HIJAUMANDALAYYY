// AuthLayout.jsx
import LoginNavbar from '../components/LoginNavbar'; // Navbar khusus login
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <LoginNavbar /> {/* Navbar khusus login */}
            
                <Outlet /> {/* Halaman login akan dirender di sini */}
          
        </div>
    );
};

export default AuthLayout;




import NavSeller from '../../components/NavSeller'
import Footer from '../../components/Footer'
import SidebarSeller from '../../components/SidebarSeller'


import { Outlet } from 'react-router-dom'
const ProdukLayout = () => {
    return (
        <div>
            <NavSeller /> 
             <div className="flex flex-1 p-4 gap-4">
                <SidebarSeller className="w-1/4" /> 
                <div className="flex-1">
                <Outlet />
                </div>
            </div>
        
          <Footer />
        </div>
    );
};

export default ProdukLayout;

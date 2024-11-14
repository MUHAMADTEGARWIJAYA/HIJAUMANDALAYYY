import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SidebarBuyyer from '../../components/buyer/ProfileBuyyer/SidebarBuyyer'

import ProfileBuyyer from '../../components/buyer/ProfileBuyyer/ProfileBuyyer'

const SidebarBuyyerP = () => {
    return (
        <div className='bg-gray-200'>
            <Navbar /> 
 
           
             <div className="flex flex-1 gap-4">
                <SidebarBuyyer className="w-1/4" /> 
                <div className="flex-1">
                <ProfileBuyyer />
        
                </div>
            </div>
        
          <Footer />
        </div>
    );
};

export default SidebarBuyyerP;



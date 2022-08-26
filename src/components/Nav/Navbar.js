import classes from '../Nav/Navbar.modules.css'

import MobileNavgation from './MobileNavigation'
import Navgation from './Navigation'


const Navbar = () => {
    return (
        <div className="Navbar">
            <Navgation/>
            <MobileNavgation/>
        </div>
    );
}
 
export default Navbar;
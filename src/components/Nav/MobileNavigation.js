import classes from '../Nav/Navbar.modules.css'
import NavLinks from "./NavLinks";

import {CgClose, CgMenuRound} from 'react-icons/cg'

import { useState } from 'react';
import NavLinksMobile from './NavLinksMobile';

const MobileNavigation = () => {

    const hamburguerIcon = <CgMenuRound className='Hamburguer'size='60px' color='rgb(30, 111, 216)' onClick={() => setOpen(!open)}/>

    const closeIcon = <CgClose className='Hamburguer'size='60px' color='red' onClick={() => setOpen(!open)}/>

    const [open, setOpen] = useState(false);
    return (  
        <nav className="MobileNavigation">
         {open ? closeIcon : hamburguerIcon}

         {/* <CgMenuRound className='Hamburguer' size='50px' color='white' onClick={() => setOpen(!open)}/> */}

        {open && <NavLinksMobile/>}
        </nav>
     );
}
 
export default MobileNavigation;
const NavLinks = () => {
    return (  
        <ul>
            <li>
                <a href="/"> Home</a>
            </li>
            <li>
                <a href="/#about"> Sobre</a>
            </li>
            <li>
                <a href="/#contact" className="in">
                <img src="assets/whatsapp.png" width="30px"  alt="entre em contato" />
                </a>
            </li>
            <li>
                <a href="/#skilss"> Jobs</a>
            </li>
            <li>
                <a href="/#contact"> Blog</a>
            </li>
            
        </ul>
    );
}
 
export default NavLinks;
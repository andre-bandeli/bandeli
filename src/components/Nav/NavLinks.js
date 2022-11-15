import linkedin from './in-ft.png'
import git from './git-ft.png'
import $ from 'jquery';


const NavLinks = () => {

    $(window).scroll(function(){
        var fromTop = $(window).scrollTop();
        if (fromTop > 100) {
            $(".h1-desk").css('font-size', '0px');
            $(".h1-desk").css('transition', '.4s');
            $(".Navbar").css('height', '10vh');
            $("#ul").css('margin-top', '30px');
            $(".git").css('margin-top', '10px');
            $(".git").css('transition', '.3s');
            $(".in").css('margin-top', '10px');
            $(".in").css('transition', '.3s');

        }
        else {
            $(".h1-desk").css('font-size', '25px');
            $("#ul").css('margin-top', '0px');
            $(".git").css('margin-top', '55px');
            $(".in").css('margin-top', '55px');
            
        }
       
    });

    return (  
        <div className='navbar-selector'>
            <h1 className='h1-desk'>Software Developer.</h1>
            <h1 className='h1-mob'>Software Developer.</h1>
            <ul id='ul'>

                <li className='li-selector'>
                    <div className='link'>
                        <a href="/#header"> Home</a>
                    </div>
                    
                </li>
                <li>
                    <div className='link'>
                        <a href="/#portfolio"> Projetos</a>
                    </div>
                </li>
                <li>
                    <div className='link'>
                        <a href="/#sobre"> Sobre</a>
                    </div>
                </li>
                <li>
                    <div className='link'>
                        <a href="/#certificados"> Certificados</a>
                    </div>
                </li>
                <li>
                    <div className='link'>
                        <a href="/#ferramentas">Stacks</a>
                    </div>
                </li>
                <li>
                    <div className='link'>
                        <a href="/#contato">Contato</a>
                    </div>
                </li>
                <li className="li-social">
                   
                   
                </li>

                <img src={linkedin} className="in"></img>
                <img src={git} className="git"></img>
            </ul>

        </div>
    );
}
 
export default NavLinks;
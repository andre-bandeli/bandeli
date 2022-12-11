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
            $(".Navbar").css('height', '12vh');
            $("#ul").css('margin-top', '0px');
            $(".git").css('margin-top', '57px');
            $(".in").css('margin-top', '57px');
            
        }
       
    });

    return (  
        <div className='navbar-selector'>
            <h1 className='h1-desk'>Software Developer.</h1>
            <h1 className='h1-mob'>Software Developer.</h1>
            <ul id='ul'>

                <li className='li-selector'>
                    <div className='link'>
                        <a href="#header" alt="botão home"> Home</a>
                    </div>
                    
                </li>
                <li>
                    <div className='link'>
                        <a href="#portfolio" alt="botão projetos"> Projetos</a>
                    </div>
                </li>
                <li>
                    <div className='link'>
                        <a href="#sobre"  alt="botão sobre"> Sobre</a>
                    </div>
                </li>
                <li>
                    <div className='link'>
                        <a href="#certificados"  alt="botão certificados"> Certificados</a>
                    </div>
                </li>
                <li>
                    <div className='link'>
                        <a href="#ferramentas"  alt="botão ferramentas">Stacks</a>
                    </div>
                </li>
                <li>
                    <div className='link'>
                        <a href="#contato"  alt="botão contato">Contato</a>
                    </div>
                </li>
                <li className="li-social">
                   
                   
                </li>
            </ul>
            <a href="https://www.linkedin.com/in/andrébandeli/" target="__blank" alt="link para a página do linkedin">
                <img src={linkedin} className="in" alt='ícone linkedin'></img>
            </a>
            <a href="https://github.com/andre-bandeli" target="__blank" alt="link para a página do github">
                <img src={git} className="git" alt='ícone gihub'></img>
                </a>

        </div>
    );
}
 
export default NavLinks;
import React from 'react'
import './header.scss'

import git from './icones/git-ft.png'
import linkedin from './icones/in-ft.png'

import Typing from 'react-typing-animation';


export default function Header() {
  
  return (
    <div className='header' id='header'>
    
        <div className="container">
           <span className='spn-name'> <h2>André Bandeli</h2></span>
           <Typing>
            <Typing speed={99}/>
            <h3>
                Desenvolvedor Web Jr 
                <br></br> Técnico Mecatrônico formado pelo Colégio Técnico de Campinas (Cotuca-Unicamp) 
              </h3>
            </Typing>
            
            <div className="redes">
           
                <a href="https://github.com/andre-bandeli" target="__blank">
                <img src={git} alt="icone do github" /></a>
             
                <a href="https://www.linkedin.com/in/andrébandeli/" target="__blank">
                <img src={linkedin} alt="icone do linkedin" /></a>

      
            </div>

              <div className="btn">
                <a href="/#portfolio"> 
                  <button className='btn-projects'>ver projetos</button>
                </a>
              
              </div>

        </div>
        
    </div>
  )
}

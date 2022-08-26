import React from 'react'
import './header.scss'

import Typing from 'react-typing-animation';

export default function Header() {
  
  return (
    <div className='header'>
        <div className="container">
           <h2>André <span className='spn-name'>Bandeli</span></h2>
           <Typing>
              <span>Desenvolvedor Web Jr (Python Java React Bootstrap)</span>
              <span> | Técnico Mecatrônico formado pelo Colégio Técnico de Campinas (Cotuca-Unicamp)</span>
              <span> | Graduando em Engenharia pela Unicamp</span>
            </Typing>
            <div className="redes">
              <div className="git">
                <img src="assets/github.png" alt="" />
                <h5>github</h5>
              </div>
              <div className="in">
                <img src="assets/in.png" alt="" />
                <h5>linkedin</h5>
              </div>
              <div className="whats">
                <img src="assets/whatsapp.png" alt="" />
                <h5>whatsapp</h5>
              </div>
            
             
            </div>
        </div>
    </div>
  )
}

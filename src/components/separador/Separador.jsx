import React from 'react'
import './separador.scss'
import chevron from './chevron.svg'

export default function Separador() {
  return (
    <div className='separador'>

        <div className="container">
            <a href="#produtos" alt="botão produtos">
            <img src={chevron} alt="imagem botão seta para baixa" />
            </a>
            
        </div>

    </div>
  )
}

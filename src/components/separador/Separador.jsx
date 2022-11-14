import React from 'react'
import './separador.scss'
import chevron from './chevron.png'

export default function Separador() {
  return (
    <div className='separador'>

        <div className="container">
            <a href="#produtos">
            <img src={chevron} alt="" />
            </a>
            
        </div>

    </div>
  )
}

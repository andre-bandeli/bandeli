import React from 'react'
import './cards.scss'

export default function Cards() {
  return (
    <div className='cards'>

        <div className="container">
            <div className="box">
                <h3>Sobre</h3>
                <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ducimus, explicabo corrupti quidem vel saepe 
                    libero atque tenetur nulla nam unde ex officiis et itaque [...]</h4>
                    <button className='btn-primary'>ver mais</button>
            </div>
            <div className="box">
                <h3>Experiência</h3>
                <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ducimus, explicabo corrupti quidem vel saepe 
                    libero atque tenetur nulla nam unde ex officiis et itaque [...]</h4>
                    <button className='btn-primary'>ver mais</button>
            </div>
            <div className="box">
                <h3>Últimas postagem</h3>
                <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ducimus, explicabo corrupti quidem vel saepe 
                    libero atque tenetur nulla nam unde ex officiis et itaque [...]</h4>
                    <button className='btn-primary'>ver mais</button>
            </div>
        </div>

    </div>
  )
}

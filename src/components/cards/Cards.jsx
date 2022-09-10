import React from 'react'
import './cards.scss'

export default function Cards() {
  return (
    <div className='cards'>

        <div className="container">
            <div className="box">
                <h3>Sobre</h3>
                <h4> <a href=""> Sou Formado em Mecatrônica (2017) pelo Colégio Técnico de Campinas (Cotuca/Unicamp) onde realizei também meu Ensino Médio (2016) e onde me habilitei, também, 
                como Assistênte de Projetos e Processos Industriais Mecânicos (2017). Atualmente realizo a Graduação pela Universidade Estadual de Campinas (Unicamp)  [...]</a></h4>
                    <button className='btn-primary'>ver mais</button>
            </div>
            <div className="box">
                <h3>Experiência</h3>
                <h4> <a href="">Atualmente, desenvolvo junto ao time de Comunicõo e Desenvolvimento da Diretoria Geral de RH da Unicamp, através do programa de Permanência Estudantil. Atuei também no aplicativo
                AGHUse, uma aplicação Web, desenvolvida em Java EE para Gestão Hospitalar dos Hospitais Universitários Federativos.[...]</a></h4>
                    <button className='btn-primary'>ver mais</button>
            </div>
            <div className="box">
                <h3>Transição de Carreira</h3>
                <h4> <a href=""> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet ducimus, explicabo corrupti quidem vel saepe 
                    libero atque tenetur nulla nam unde ex officiis et itaque [...] </a></h4>
                    <button className='btn-primary'>ver mais</button>
            </div>
        </div>

    </div>
  )
}

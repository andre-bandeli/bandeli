import React from 'react'
import { useEffect, useState } from "react";
import './certificados.scss'
import ReactElasticCarousel from 'react-elastic-carousel'

import {
  certificados,
} from '../../data-certificados.js';


export default function Certificados() {

  const [selected] = useState("certificados");
  const [data, setData] = useState([]);

  const breakPoints = [
    {width: 1, itemsToShow: 1 },
    {width: 375, itemsToShow: 1},
    {width: 550, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 1024, itemsToShow: 2},
    {width: 1200, itemsToShow: 4},
  ]

  useEffect(() => {
    switch (selected) {
    default:
        setData(certificados);
    }
}, [selected]);


  return (
    <div id='certificados'>
        <h2>Cursos e Certificações</h2>
        <h3>Aqui estão reunidos alguns dos meus projetos. Para ver todos, acesse minha página no github</h3>

        <div className="container">

        <ReactElasticCarousel breakPoints={breakPoints}>

        {data.map((d) => (
          <div className='box'>

            <div className="name">
              <h2>Curso</h2> 
            </div>

            <div className="text">
                <h3>{d.title}</h3>
            </div>

            <div className="local">
              <h2>Instituição</h2> 
            </div>

            <div className="text">
                <h3>{d.legenda}</h3>
            </div>

          </div>
        ))}
          
          </ReactElasticCarousel>

        </div>
    </div>
  )
}

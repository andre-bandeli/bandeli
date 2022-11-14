import React from 'react'
import './produtos.scss'
import api from './icones/api.png'
import img_html from './icones/html.png'
import tag_seo from './icones/tag-seo.png'

export default function Produtos() {

  return (
    <div className='produtos' id='produtos'>
         <h2>Produtos e Serviços</h2>
        <h3>Realização de websites institucionais, components e sistemas backend, revisão e melhorias em pontuação SEO são algumas das minhas
            principais atuações. </h3>
        <div className="container">
            <div className="box">

              <img src={api} alt="" />
              <h2>Construção de api REST e componentes de software web</h2>

            </div>
            <div className="box">

              <img src={img_html} alt="" />
              <h2>Landing pages. sites institucionais e sistemas fullstack</h2>
                
            </div>
            <div className="box">

              <img src={tag_seo} alt="" />
              <h2>Análise de rating SEO, análise estrutural, acessiilidade e negócios</h2>
            </div>
        </div>

    </div>
  )
}

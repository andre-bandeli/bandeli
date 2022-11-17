import React from 'react'
import './produtos.scss'
import api from './icones/api.svg'
import img_html from './icones/html.svg'
import tag_seo from './icones/tag-seo.svg'

export default function Produtos() {

  return (
    <div id='produtos'>
         <h2>Atividades</h2>
        <h3>Criação de sites institucionais, components e sistemas web, revisão e melhorias em pontuação SEO são algumas das atividades que venho estudando e produzindo</h3>
        <div className="container">
            <div className="box">

              <img src={api} alt="ícone ilustrativo api REST" />
              <h2>Construção de api REST e componentes de software web</h2>

            </div>
            <div className="box">

              <img src={img_html} alt="ícone ilustrativo página" />
              <h2>Landing pages. sites institucionais e sistemas fullstack</h2>
                
            </div>
            <div className="box">

              <img src={tag_seo} alt="ícone ilustrativo SEO" />
              <h2>Análise de SEO, análise de desempenho, acessiilidade e  regra de negócios</h2>
            </div>
        </div>

    </div>
  )
}

import React from 'react'
import './sobre.scss'

export default function Sobre() {
  return (
    <div id='sobre'>

        <div className="container">
            <div className="box">
                <h3>Sobre</h3>
                <h4> Natural de Conchal, São Paulo, me mudei aos 16 anos (em 2014) para Campinas/SP. Me formei como Técnico em Mecatrônico e Assistente de Projetos e Processos Industriais Mecânicos pelo Colégio Técnico de Campinas (Cotuca - Unicamp), onde realizei 
                    também meu ensino médio.</h4>
                <h4>Trabalhando desde os 13 anos, iniciei em 2012 como mecânico de motos. Em 2014 atuei no setor recreativo durante 3 anos; Em 2017, iniciei como técnico de manutenção industrial durante 4 anos e meio e, atualmente, 
                    com desenvolvimento de software.</h4>

                <h3>Experiência com Desenvolvimento Web</h3>
                <h4>Atualmente desenvolvo junto ao time de Comunicão da Diretoria Geral de RH da Unicamp, através do programa de Permanência Estudantil, com a utilização de Wordpress
                    , Bootstrap, MySQL, Docker entre outras stacks. O time de Comunicação da DGRH atua com todos os processos de Comunicação Institucional (criação de sites, designer UI/UX, notas/notícias)</h4> 
                <h4>Atuei também no aplicativo AGHUse, uma aplicação Web, desenvolvida em Java EE para Gestão Hospitalar dos Hospitais Universitários Federativos, realizando
                    tasks para o módulo de exames. Nessa squad, tive o contato com PostgreSQL, JUnit, Mocks.
                </h4>

            </div>
            <div className="btn">
                <a href="assets/cv.pdf" download>
                <button className='btn-secundary'>
                baixar currículo</button>
                </a>
            </div>
           
        </div>

    </div>
  )
}

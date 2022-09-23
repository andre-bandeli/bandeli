import React from 'react'
import './posts.scss'
import ReactElasticCarousel from 'react-elastic-carousel'



export default function Posts() {

  const breakPoints = [
    {width: 1, itemsToShow: 1 },
    {width: 375, itemsToShow: 1},
    {width: 550, itemsToShow: 1},
    {width: 768, itemsToShow: 2},
    {width: 1024, itemsToShow: 2},
    {width: 1200, itemsToShow: 4},
  ]


  return (
    <div className='posts'>
        <h2>Cursos e Certificações</h2>

        <div className="container">

        <ReactElasticCarousel breakPoints={breakPoints}>

          <div className='box'>

            <div className="name">
             
              <h1>Curso</h1> 
            </div>

            <div className="text">
                <h2>Java 2022 COMPLETO: Do Zero ao Profissional + Projetos!</h2>
            </div>

            <div className="local">
              <h1>Instituição</h1> 
            </div>

            <div className="text">
                <h3>UDEMY | 77h </h3>
            </div>

          </div>

          <div className='box'>

            <div className="name">
             
              <h1>Curso</h1> 
            </div>

            <div className="text">
                <h2>Microservices com Spring Cloud, Spring Boot e Docker</h2>
            </div>

            <div className="local">
              <h1>Instituição</h1> 
            </div>

            <div className="text">
                <h3>UDEMY | 14h </h3>
            </div>

          </div>


          <div className='box'>

            <div className="name">
             
              <h1>Curso</h1> 
            </div>

            <div className="text">
                <h2>Microservices inspirado no Spotify com Spring Cloud e Kafka</h2>
            </div>

            <div className="local">
              <h1>Instituição</h1> 
            </div>

            <div className="text">
                <h3>UDEMY | 2,5h </h3>
            </div>

          </div>


          <div className='box'>

            <div className="name">
             
              <h1>Curso</h1> 
            </div>

            <div className="text">
                <h2>Docker para Desenvolvedores (com Docker Swarm e Kubernetes)</h2>
            </div>

            <div className="local">
              <h1>Instituição</h1> 
            </div>

            <div className="text">
                <h3>UDEMY | 12h </h3>
            </div>

          </div>


          <div className='box'>

            <div className="name">
             
              <h1>Curso</h1> 
            </div>

            <div className="text">
                <h2>GFT Quality Assurance Java</h2>
            </div>

            <div className="local">
              <h1>Instituição</h1> 
            </div>

            <div className="text">
                <h3>DIO | 64h </h3>
            </div>

          </div>


          <div className='box'>

            <div className="name">
             
              <h1>Curso</h1> 
            </div>

            <div className="text">
                <h2>Desenvolvimento avançado de aplicações corporativas com Django + Projetos</h2>
            </div>

            <div className="local">
              <h1>Instituição</h1> 
            </div>

            <div className="text">
                <h3>UDEMY | 14h </h3>
            </div>

          </div>

          <div className='box'>

            <div className="name">
              <h1>Curso</h1> 
            </div>

            <div className="text">
                <h2>Java e Orientação a Objetos</h2>
            </div>

            <div className="local">
              <h1>Instituição</h1> 
            </div>

            <div className="text">
                <h3>UDEMY | 18h </h3>
            </div>

          </div>


          <div className='box'>

            <div className="name">
             
              <h1>Curso</h1> 
            </div>

            <div className="text">
                <h2>Profissional adaptável: inteligência emocional, finanças pessoais e liderança</h2>
            </div>

            <div className="local">
              <h1>Instituição</h1> 
            </div>

            <div className="text">
                <h3>PUCRS | 3h </h3>
            </div>

          </div>

          <div className='box'>

            <div className="name">
             
              <h1>Curso</h1> 
            </div>

            <div className="text">
                <h2>AWS S3 Basics</h2>
            </div>

            <div className="local">
              <h1>Instituição</h1> 
            </div>

            <div className="text">
                <h3>COURSERA | 3h </h3>
            </div>

          </div>
          <div className='box'>

            <div className="name">
             
              <h1>Curso</h1> 
            </div>

            <div className="text">
                <h2>Java 2022 COMPLETO: Do Zero ao Profissional + Projetos!</h2>
            </div>

            <div className="local">
              <h1>Instituição</h1> 
            </div>

            <div className="text">
                <h3>UDEMY | 77h </h3>
            </div>

          </div>

         

         
          
          
         

         

        

        
          
          </ReactElasticCarousel>

        </div>
    </div>
  )
}

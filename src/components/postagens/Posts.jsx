import React from 'react'
import './posts.scss'

export default function Posts() {
  return (
    <div className='posts'>
        <h2>Cursos Realizados</h2>

        <div className="container">

          <div className="col-sm-6">
            <div className="imagem">

            </div>
            <div className="titulo">
              <a href="">
              <h1>Java 2021 completo: do zero ao proﬁssional + projetos</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis voluptatem ratione laborum facilis aliquam voluptas cum minima eius inventore at [...]</h2>
                </a>
            </div>

          </div>
          <div className="col-sm-4">

            <div className="post">
              <a href="">
              <h1>Desenvolvimento avançado de aplicações corporativas com Django + Projetos (2021)</h1>
              </a>
            </div>
            <div className="post">
              <h1>Docker para Desenvolvedores (com Docker Swarm e Kubernetes)</h1>
            </div>
            <div className="post">
              <h1>Java e Orientação a Objetos (2021)</h1>
            </div>
            <div className="post">
              <h1>Microservices com Spring Cloud, Spring Boot e Docker (2021)</h1>
            </div>

          
          </div>
        </div>
    </div>
  )
}

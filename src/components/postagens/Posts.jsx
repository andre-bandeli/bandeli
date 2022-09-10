import React from 'react'
import './posts.scss'

export default function Posts() {
  return (
    <div className='posts'>
        <h2>Últimos Posts</h2>

        <div className="container">

          <div className="col-sm-6">
            <div className="imagem">

            </div>
            <div className="titulo">
              <a href="">
              <h1>Principais comandos no git</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quis voluptatem ratione laborum facilis aliquam voluptas cum minima eius inventore at [...]</h2>
                </a>
            </div>

          </div>
          <div className="col-sm-4">

            <div className="post">
              <a href="">
              <h1>Trabalhando com testes unitários em Java</h1>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit, odio praesentium [...]</h2>
              </a>
            </div>
            <div className="post">
              <h1>Trabalhando com testes unitários em Java</h1>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit, odio praesentium [...]</h2>
            </div>
            <div className="post">
              <h1>Trabalhando com testes unitários em Java</h1>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit, odio praesentium [...]</h2>
            </div>

          </div>
        </div>
    </div>
  )
}

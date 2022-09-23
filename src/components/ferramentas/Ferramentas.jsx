import React from 'react'
import './ferramentas.scss'

export default function Ferramentas() {
  return (
    <div className='ferramentas'>

        <h2>Stacks de Atuação</h2>

        <div className="container">
            <div className="box">
                <img src="assets/java.png" alt="" />
                <h2>Java</h2>
            </div>

            <div className="box">
                <img src="assets/python.png" alt="" />
                <h2>Python</h2>
            </div>

            <div className="box">
                <img src="assets/wordpress.png" alt="" />
                <h2>Wordpress</h2>
            </div>

            <div className="box">
                <img src="assets/docker.png" alt="" />
                <h2>Docker</h2>
            </div>

            <div className="box">
                <img src="assets/spring.png" alt="" />
                <h2>SpringBoot</h2>
            </div>

            <div className="box">
                <img src="assets/mysql.png" alt="" />
                <h2>MySQL</h2>
            </div>

            <div className="box">
                <img src="assets/kafka.png" alt="" />
                <h2>Kafka</h2>
            </div>

            <div className="box">
                <img src="assets/react.png" alt="" />
                <h2>React JS</h2>
            </div>

            <div className="box">
                <img src="assets/bootstrap.png" alt="" />
                <h2>Bootstrap</h2>
            </div>

        </div>
    </div>
  )
}

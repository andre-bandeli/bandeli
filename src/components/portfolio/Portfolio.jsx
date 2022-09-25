import React from 'react'
import './portfolio.scss'
import { Container, Row, Col } from 'react-grid';

export default function Portfolio() {
  return (
    <div id='portfolio'>
        <h2>Projetos</h2>
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus veritatis porro corrupti impedit eum, consequuntur animi neque delectus harum soluta. Deserunt possimus aperiam architecto mollitia ducimus sint iure fuga quas?</h3>

        <div className="container">

            <div className="box">
            <div className="box-abs">
                <h2>OdontoClean</h2>
                <h3>React JS + SCSS + HTML </h3>
                <a href="https://andre-bandeli.github.io/UI-Design-Landing-Page-Odonto-Clean/" target="__blank">ver online </a>
                <a href="https://github.com/andre-bandeli/UI-Design-Landing-Page-Odonto-Clean" target="__blank"> ver no github</a>
                    </div>
                <img src="assets/odonto-clean.png" alt="" />
            </div>
            <div className="box">
            <div className="box-abs">
                <h2>Gestor da Manutenção</h2>
                <h3>Java + SpringBoot + JUnit </h3>
                <a href="https://github.com/andre-bandeli/maintenance-manager-REST-spring-boot" target="__blank"> ver no github</a>
                    </div>
                <img src="assets/projeto-1.png" alt="" />
            </div>
            <div className="box">
            <div className="box-abs">
                <h2>Netflix Clone</h2>
                <h3>Python + Django + Heroku + JavaScript + HTML + CSS  </h3>
                <a href="https://netflix-template-heroku.herokuapp.com/" target="__blank">ver online </a>
                <a href="https://github.com/andre-bandeli/netflix-template" target="__blank"> ver no github</a>
                    </div>
                <img src="assets/projeto-2.png" alt="" />
            </div>

            <div className="box">
            <div className="box-abs">
                    
                    </div>
                    <img src="assets/back.png" alt="" />
            </div>

        
            <div className="box">
            <div className="box-abs">
                <h2>REST API</h2>
                <h3>Python + Django + Heroku + JavaScript + HTML + CSS  </h3>
                <a href="https://django-ouath.herokuapp.com/" target="__blank">ver online </a>
                <a href="https://github.com/andre-bandeli/api-rest-django" target="__blank"> ver no github</a>
                    </div>
                <img src="assets/webrest.png" alt="" />
            </div>
            <div className="box">
            <div className="box-abs">
                    
                    </div>
                    <img src="assets/back.png" alt="" />
            </div>
            <div className="box">
            <div className="box-abs">
                <h2>SpringSecurity</h2>
                <h3>Python + Django + Heroku + JavaScript + HTML + CSS  </h3>
                <a href="">ver online </a>
                <a href="https://github.com/andre-bandeli/Spring-Security-Login-and-Logout" target="__blank"> ver no github</a>
                    </div>
                <img src="assets/p2.png" alt="" />
            </div>
            <div className="box">
            <div className="box-abs">
                <h2>SmartGym</h2>
                <h3>Python + Django + Heroku + JavaScript + HTML + CSS  </h3>
                <a href="">ver online </a>
                <a href=""> ver no github</a>
                    </div>
                <img src="assets/gym.png" alt="" />
            </div>
            <div className="box">
            <div className="box-abs">

                <h2>Django Ecommerce</h2>
                <h3>Python + Django + Heroku + JavaScript + HTML + CSS  </h3>
                <a href=" https://ecommerce-django-bootstrap.herokuapp.com/" target="__blank">ver online </a>
                <a href="https://github.com/andre-bandeli/Django-Ecommerce" target="__blank"> ver no github</a>
                    </div>
                <img src="assets/shop.png" alt="" />
            </div>
            <div className="box">
                <div className="box-abs">
                    <h2>Guia Virtual</h2>
                    <h3>Python + Django + Bootstrap </h3>
                    <a href="https://guia-virtual.herokuapp.com/" target="__blank">ver online </a>
                <a href="https://github.com/andre-bandeli/guia-virtual-de-atendimento-a-mulheres-vitmas-de-violencia" target="__blank"> ver no github</a>

                </div>
                <img src="assets/p1.png" alt="" />
            </div>
        
            <div className="box">
            <div className="box-abs">
                <h2>Microsservice Java Kafka</h2>
                <a href="https://github.com/andre-bandeli/microsservice-java-kafka-player-music" target="__blank"> ver no github</a>
                    </div>
                    <img src="assets/back.png" alt="" />
            </div>
            
            <div className="box">
            <div className="box-abs">
                <h2>Microsservice Java Kafka</h2>
                <a href="https://github.com/andre-bandeli/microsservice-java-kafka-player-music" target="__blank"> ver no github</a>
                    </div>
                    <img src="assets/back.png" alt="" />
            </div>

            
    
        
        </div>
    </div>
  )
}

import React from 'react'
import './portfolio.scss'
import { useEffect, useState } from "react";
import PortfolioList from "./PortfolioList";

import {
    todos,
    reactjs,
    java,
    python,
} from '../../data';

export default function Portfolio() {

    const [selected, setSelected] = useState("todos");
    const [data, setData] = useState([]);
    const list = [
        {
        id: "todos",
        title: "Todos",
        },
        {
        id: "react",
        title: "React",
        },
        {
        id: "java",
        title: "Java",
        },
        {
        id: "python",
        title: "Python",
        },
    ];

    useEffect(() => {
        switch (selected) {
        case "todos":
            setData(todos);
            break;
        case "react":
            setData(reactjs);
            break;
        case "java":
            setData(java);
            break;
        case "python":
            setData(python);
            break;
        default:
            setData(todos);
        }
    }, [selected]);

  return (
    <div id='portfolio'>
        <h2>Projetos</h2>
        <h3>Aqui estão reunidos alguns dos meus projetos. Para ver todos, acesse minha página no github</h3>

        <ul>
            {list.map((item) => (
            <PortfolioList
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
            />
            ))}
        </ul>

        <div className="container">
            {data.map((d) => (
                <div className="box">
                        <h2>{d.title}</h2>
                        <h3>{d.legenda}</h3>
                        <a href={d.git} target="__blank" className='link_a'>github</a>
                        <a href={d.view} target="__blank" className='link'>online</a>
                        <img src={d.img} alt={d.img_alt} />
                        <h4>{d.texto}</h4>
                </div>
            ))}
        </div>
    </div>
  );
}

            



            
            {/* <div className="box">
            <div className="box-text">
                    <h2>Java</h2>
                </div>
            <div className="box-abs">
                <h2>Gestor da Manutenção</h2>
                <h3>Java + SpringBoot + JUnit </h3>
                <a href="https://github.com/andre-bandeli/maintenance-manager-REST-spring-boot" target="__blank"> ver no github</a>
                    </div>
                <img src="assets/projeto-1.png" alt="" />
            </div>
            <div className="box">
            <div className="box-text">
                    <h2>Django</h2>
                </div>
            <div className="box-abs">
                <h2>Netflix Clone</h2>
                <h3>Python + Django + Heroku + JavaScript + HTML + CSS  </h3>
                <a href="https://netflix-app-django.herokuapp.com/user" target="__blank">ver online </a>
                <a href="https://github.com/andre-bandeli/netflix-template" target="__blank"> ver no github</a>
                    </div>
                <img src="assets/projeto-2.png" alt="" />
            </div>

            <div className="box">

            <div className="box-text">
                    <h2>Java</h2>
                </div>
            <div className="box-abs-backend">
                <h2>Player Music</h2>
                <h3>Java + Spring Boot + Kafka + Microserviços + Docker  </h3>
                <a href="https://github.com/andre-bandeli/microsservice-java-kafka-player-music" target="__blank"> ver no github</a>
                    </div>
                    <img src="assets/back.png" alt="" />
            </div>

        
            <div className="box">
            <div className="box-text">
                    <h2>Django</h2>
                </div>
            <div className="box-abs">
                <h2>REST API</h2>
                <h3>Python + Django + Heroku + JavaScript + HTML + CSS  </h3>
                <a href="https://django-ouath.herokuapp.com/" target="__blank">ver online </a>
                <a href="https://github.com/andre-bandeli/api-rest-django" target="__blank"> ver no github</a>
                    </div>
                <img src="assets/webrest.png" alt="" />
            </div>
            <div className="box">
            <div className="box-text">
                    <h2>Java</h2>
                </div>
            <div className="box-abs-backend">
                <h2>CRUD Java</h2>
                <h3>Java + Spring Boot + JUnit + Docker + MySQL  </h3>
                <a href="https://github.com/andre-bandeli/SpringBoot-Crud-Javac" target="__blank"> ver no github</a>
                    </div>
                    <img src="assets/back.png" alt="" />
            </div>
            <div className="box">
            <div className="box-text">
                    <h2>Java</h2>
                </div>
            <div className="box-abs">
                <h2>SpringSecurity</h2>
                <h3>Python + Django + Heroku + JavaScript + HTML + CSS  </h3>
                <a href="">ver online </a>
                <a href="https://github.com/andre-bandeli/Spring-Security-Login-and-Logout" target="__blank"> ver no github</a>
                    </div>
                <img src="assets/p2.png" alt="" />
            </div>

            <div className="box">
                <div className="box-text">
                    <h2>React JS</h2>
                </div>
            <div className="box-abs">
                <h2>OdontoClean</h2>
                <h3>React JS + SCSS + HTML </h3>
                <a href="https://andre-bandeli.github.io/UI-Design-Landing-Page-Odonto-Clean/" target="__blank">ver online </a>
                <a href="https://github.com/andre-bandeli/UI-Design-Landing-Page-Odonto-Clean" target="__blank"> ver no github</a>
                    </div>
                <img src="assets/odonto.png" alt="" />
            </div>
            <div className="box">
            <div className="box-text">
                    <h2>Django</h2>
                </div>
            <div className="box-abs">

                <h2>Django Ecommerce</h2>
                <h3>Python + Django + Heroku + JavaScript + HTML + CSS  </h3>
                <a href=" https://ecommerce-django-bootstrap.herokuapp.com/" target="__blank">ver online </a>
                <a href="https://github.com/andre-bandeli/Django-Ecommerce" target="__blank"> ver no github</a>
                    </div>
                <img src="assets/shop.png" alt="" />
            </div>
            <div className="box">
            <div className="box-text">
                    <h2>Django</h2>
                </div>
                <div className="box-abs">
                    <h2>Guia Virtual</h2>
                    <h3>Python + Django + Bootstrap </h3>
                    <a href="https://guia-virtual.herokuapp.com/" target="__blank">ver online </a>
                <a href="https://github.com/andre-bandeli/guia-virtual-de-atendimento-a-mulheres-vitmas-de-violencia" target="__blank"> ver no github</a>

                </div>
                <img src="assets/p1.png" alt="" />
            </div>
        
            <div className="box">
            <div className="box-text">
                    <h2>Java</h2>
                </div>
                <div className="box-abs-backend">
                <h2>CRUD Java</h2>
                <h3>Java + Spring Boot + JUnit + Docker + MySQL  </h3>
                <a href="https://github.com/andre-bandeli/SpringBoot-Crud-Javac" target="__blank"> ver no github</a>
                    </div>
                    <img src="assets/back.png" alt="" />
            </div>

            <div className="box">
            <div className="box-text">
                    <h2>React JS</h2>
                </div>
            <div className="box-abs">
                <h2>SmartGym</h2>
                <h3>Python + Django + Heroku + JavaScript + HTML + CSS  </h3>
                <a href="">ver online </a>
                <a href=""> ver no github</a>
                    </div>
                <img src="assets/gym.png" alt="" />
            </div> */}
            
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
        <h3>Aqui estão reunidos alguns de meus principais projetos. Para ver todos, acesse meu github.</h3>

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
                        <a href={d.git} target="__blank" className='link_a' alt="botão github">github</a>
                        <a href={d.view} target="__blank" className='link' alt="botão página online">online</a>
                        <img src={d.img} alt={d.img_alt} />
                        <h4>{d.texto}</h4>
                </div>
            ))}
        </div>
    </div>
  );
}

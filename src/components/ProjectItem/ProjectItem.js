import React, { useState } from "react";
import './ProjectItem.css'

function ProjectItem({
    name,
    image,
    url,
    repository,
    tech
}){

    const [hover, setHover] = useState(false)

    const isHover = ( hoverValue )=>{
        setHover(hoverValue)
    }

    return(
        <figure
            className="ProjectItem" 
            onMouseEnter={()=> isHover(true)}
            onMouseLeave={()=> isHover(false)}
        >
            <img className="ImageProject" src={image} alt={name}/>

            <figcaption className={`data-project ${hover && 'hover__item'}`}>
                <h4 className="data-project__name">{name}</h4>
                <a className="data-project__url button" href={url} target="_blank" rel="noopener noreferrer"><samp>i</samp> ver proyecto</a>
                <a className="data-project__githun" href={repository} target="_blank" rel="noopener noreferrer">Github</a>
                <div className="data-technologies">
                    {tech.map(item =>{
                        return(<p key={item.name}>{item.name}</p>)
                    })}
                </div>
            </figcaption>
        </figure>
    )
}

export { ProjectItem }


// <a href="#id-del-proyecto">
// <img src={image} alt="nombre-del-proyecto">

// <figcaption>Descripcion del proyecto</figcaption>
// <div class="tecnologias">
//     <i>icon de html(por ejemplo)</i>
// </div>
// <a href={url}>Ver proyecto</a>
// </a>



import React, { useState } from "react";
import { Button } from "../Button/Button";
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

                {/* <a className="data-project__url button" href={url} target="_blank" rel="noopener noreferrer"></a> */}
                <Button
                    type='secondary button__data-project'
                    text={<samp>i</samp>, <samp>ver proyecto</samp>}
                    url={url}
                />

                <a className="data-project__githun" href={repository} target="_blank" rel="noopener noreferrer">Github</a>
                <div className="data-technologies">
                    {tech.map(item =>{
                        return(<i key={item.name} className={item.icon}></i>)
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



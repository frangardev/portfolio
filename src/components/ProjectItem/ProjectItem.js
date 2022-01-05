import React from "react";
import './ProjectItem.css'

function ProjectItem({
    name,
    image,
    url,
    repository,
    tech
}){

    const hover = ( props )=>{
        if(props.isTrusted){
            console.log('hola', props.isTrusted);
        }else if(!props.isTrusted){
            console.log('Adios');
        }
        console.log(props);
    }
    console.log(tech);

    return(
        <figure
            className="ProjectItem" 
            onMouseOutCapture={hover}
        >
            <img className="ImageProject" src={image} alt={name}/>
            <figcaption className="data-project">
                <h4 className="data-project__name">{name}</h4>
                <a className="data-project__url button" href={url}><samp>i</samp> Ver proyecto</a>
                <a className="data-project__githun" href={repository}>Github</a>
                <div className="data-technologies">
                    {tech.map(item =>{
                        return(<p>{item.name}</p>)
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



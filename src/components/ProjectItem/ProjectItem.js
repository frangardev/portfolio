import React from "react";
import './ProjectItem.css'

function ProjectItem({
    name,
    image,
    url,
    repository,
    description,
    tech
}){
    return(
        <figure className="ProjectItem">
            <img className="ImageProject" src={image} alt={name}/>
            <figcaption>{name}</figcaption>
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



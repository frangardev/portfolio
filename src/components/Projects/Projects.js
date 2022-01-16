import React from "react";
import './Projects.css'

function Projects(props){
    return(
        <section id="projects">
            <h2 className="Sub-title">Mis Proyectos</h2>
            <div className="Projects__container">
                {props.children}
            </div>
        </section>
    )
}

export {Projects}
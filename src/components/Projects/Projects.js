import React from "react";
import './Projects.css'

function Projects(props){
    return(
        <section >
            <h2>Proyectos</h2>
            <div className="Projects__container">
                {props.children}
            </div>
        </section>
    )
}

export {Projects}
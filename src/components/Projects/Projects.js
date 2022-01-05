import React from "react";
import './Projects.css'

function Projects(props){
    return(
        <section className="Projects__container">
            {props.children}
        </section>
    )
}

export {Projects}
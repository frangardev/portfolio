import React from "react";
import './AboutMe.css'

const photo = 'https://media-exp1.licdn.com/dms/image/D5603AQHOEPcEBzwsHQ/profile-displayphoto-shrink_800_800/0/1640922039126?e=1646870400&v=beta&t=QF8r1gl_XOi5q5EY4cBrefJJRcF8p1JKucn-GhZP_GU'

function AboutMe(){
    return(
        <section className="AboutMe" id="AboutMe">
            <figure className="Photo__container">
                <img className="Photo" src={photo} alt="fotografía de Francisco Alejandro García Munguía"/>
            </figure>
            <h2 className="Name__title">Francisco Alejandro García Munguía</h2>
            <h3 className="work__title">Frontend Developer</h3>
            <p className="text about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis velit rerum amet eius, tempore aperiam ipsam minima ut eligendi recusandae soluta quas. Odit praesentium dicta minima error repudiandae aspernatur.</p>
            <a className="link" href="#">ver mas ></a>
        </section>
    )
}

export { AboutMe }
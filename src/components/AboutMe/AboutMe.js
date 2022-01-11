import React from "react";
import { Link } from 'react-router-dom'
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
            <p className="text about">Soy desarrollador front-end con muchas ganas de crecer y aportar con todos mis conocimientos en desarrollo web. Me apasiona la tecnología y aprender.  Me considero una persona creativa y muy proactiva.</p>
            {/* <a className="link" href="#">ver mas ></a> */}
            <Link className="link" to="/about">ver mas</Link>
        </section>
    )
}

export { AboutMe }
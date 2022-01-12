import React from "react";
import { Link } from 'react-router-dom'
import './AboutMe.css'

const photo = 'https://i.ibb.co/pfrTZHw/Francisco-Alejandro-Garc-a-Mungu-a-frangardev.jpg'

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
            <Link className="link" to="/about">ver mas <i class="fas fa-chevron-right"></i> </Link>
        </section>
    )
}

export { AboutMe }
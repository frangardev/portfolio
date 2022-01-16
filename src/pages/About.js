import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import './About.css'

function About (){
    return(
        <article className="About__container">
            <img className="about__image" src="https://i.ibb.co/sKZtN0t/francisco-garc-a-amor-a-la-programaci-n.jpg" alt="Fotografía de Francisco García" />

            <div className="title-about__content">

                <Navbar/>

                <span>Hola, soy</span>
                <h1 className="about__title-page">Francisco Alejandro García Munguía</h1>
                <span>Desarrollador Front-End</span>
            </div>

            <p className="text about__text">
                Soy programador, mas específicamente programador Front-end. Desde hace ya más de 5 años desde que escribí mi primer “hola mundo” y 2 años desde que hice mi primera página web. Desde hace ya casi un año, decidí especializarme en el mundo del desarrollo web. ✨
                <br/> 
                <br/>
                Me encanta la programación y el diseño. Uno de mis hobbys favoritos es aprender cosas nuevas, talvez por eso amo tanto esta carrera, ya que siempre hay algo nuevo que aprender.
                <br/>
                <br/>
                Durante mi corta carrera como desarrollador Front-end. He creado y diseñado interfases web. Utilizando tecnologías como HTML, CSS, JavaScript y React. Siempre intentando que mis bebes, mis proyectos, sean 100% responsivos. 
                <br/>
                <br/>
                Me considero una persona proactiva y como buen programador siempre intento encontrar la manera más eficiente de hacer las cosas.
            </p>
            


        </article>
    )
}

export { About }
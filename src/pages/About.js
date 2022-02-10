import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import './About.css'

import { SkeletonProject } from '../Components/SkeletonProject/SkeletonProject'

function About (){
    const[loadPhoto, setLoadPhoto] = React.useState(true)
    
    const tecnologias = [
        {
            name: 'HTML',
            img: ''
        },
        {
            name: 'CSS',
            img: ''
        },
        {
            name: 'JavaScript',
            img: ''
        },
        {
            name: 'React',
            img: ''
        },
        {
            name: 'Git',
            img: ''
        },
        {
            name: 'GitHub',
            img: ''
        },
        {
            name: 'Webpack',
            img: ''
        },
        {
            name: 'Figma',
            img: ''
        },
        {
            name: 'Illustrator',
            img: ''
        },
        {
            name: 'Photoshop',
            img: ''
        },
    ]

    return(
        <article className="About__container">
            <img 
                className={`about__image ${!loadPhoto && 'about__image-load'}`} 
                src="https://i.ibb.co/8NvFYrr/francisco-garc-a-amor-a-la-programaci-n.jpg" 
                alt="Fotografía de Francisco García" 
                onLoad={()=>setLoadPhoto(false)}
            />

            {loadPhoto && (<SkeletonProject type='about-photo'/>)}

            <div className="title-about__content">
                <Navbar/>
                <span>Hola, soy</span>
                <h2 className="about__title-page">Francisco Alejandro García Munguía</h2>
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
            
            <section className="skills">
                <h3>skills</h3>
                <div>
                    <figure>
                        <img src="" alt="" loading="lazy"/>
                        <figcaption></figcaption>
                    </figure>
                </div>
            </section>

        </article>
    )
}

export { About }
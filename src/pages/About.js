import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import './About.css'

import { SkeletonProject } from '../Components/SkeletonProject/SkeletonProject'

function About() {
    const [loadPhoto, setLoadPhoto] = React.useState(true)

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

    return (
        <article className="About__container">
            <img
                className={`about__image ${!loadPhoto && 'about__image-load'}`}
                src="https://i.ibb.co/8NvFYrr/francisco-garc-a-amor-a-la-programaci-n.jpg"
                alt="Fotografía de Francisco García"
                onLoad={() => setLoadPhoto(false)}
            />

            {loadPhoto && (<SkeletonProject type='about-photo' />)}

            <div className="title-about__content">
                <Navbar />
                <span>Hola, soy</span>
                <h2 className="about__title-page">Francisco Alejandro García Munguía</h2>
                <span>Desarrollador y Diseñador</span>
            </div>

            <p className="text about__text">
                Soy programador, Front-end y diseñador UI/UX. Han pasado ya más de 6 años desde que escribí mi primer “hola mundo” y 3 años desde que hice mi primera página web. ✨
                <br />
                <br />
                Me encanta la programación y el diseño. Uno de mis hobbys favoritos es aprender cosas nuevas, talvez por eso amo tanto esta carrera, ya que siempre hay algo nuevo que aprender.
                <br />
                <br />
                Durante mi carrera. He creado y diseñado interfases web. Utilizando tecnologías como HTML, CSS, SASS, Chakra, Tailwindcss, JavaScript, React, Next.js, Gatsby y algunas cositas en wordpress. Siempre intentando que mis bebes, mis proyectos, sean 100% responsivos. Otras tecnologías que he utilizado son Git y Github, Webpack, Babel y NPM. Adicionalmente cuento con conocimientos en Photoshop, Illustrator y Figma.
                <br />
                <br />
                Me considero una persona proactiva y como buen programador siempre intento encontrar la manera más eficiente de hacer las cosas.
            </p>
        </article>
    )
}

export { About }
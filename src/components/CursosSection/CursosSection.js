import React from 'react'
import './CursosSection.css'

function CursosSection() {
    return (
        <div className='cursos-section__container'>
            <div className='container-cursos'>
                <h4 className='subtitle__skills'>Cursos destacados</h4>
                <p className='cursos-section__description'>Algunos de los cursos más interesantes que he tomado</p>
                <ul className='cursos__ul'>
                    <li>Curso Profesional de React.js y Redux</li>
                    <li>Curso de Introducción a React.js</li>
                    <li>Curso de Manipulación del DOM</li>
                    <li>Curso Básico de Programación
                        Orientada a Objetos con JavaScript
                    </li>
                    <li>
                        Curso de Asincronismo con
                        JavaScript
                    </li>
                    <li>Curso de Responsive Design:
                        Maquetación Mobile First
                    </li>
                    <li>Curso Profesional de Git y GitHub
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CursosSection
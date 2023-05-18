import React from 'react'
import './SkillsSection.css'
import CursosSection from '../CursosSection/CursosSection'

function SkillsSection() {
    return (
        <div className='skills__container'>
            <div className='container__herramientas'>
                <h3 className='skills__title'>Mis herramientas</h3>
                {/* Skills */}
                <div className='flex-container'>
                    <div className='div__skill'>
                        <h4 className='subtitle__skills'>Frenworks y librerias</h4>
                        <ul className='skill__ul'>
                            <li className='skill__avanzado'>React</li>
                            <li className='skill__avanzado'>React Native</li>
                            <li className='skill__intermedio'>Next.js</li>
                            <li className='skill__avanzado'>Gatsby</li>
                            <li className='skill__avanzado'>Chackra ui</li>
                            <li className='skill__avanzado'>SASS</li>
                            <li className='skill__basico'>Tailwind CSS</li>
                            <li className='skill__intermedio'>Node</li>
                        </ul>
                    </div>
                    <div className='div__skill'>
                        <h4 className='subtitle__skills'>Lenguajes de programación</h4>
                        <ul className='skill__ul'>
                            <li className='skill__avanzado'>JavaScript</li>
                            <li className='skill__avanzado'>Python</li>
                            <li className='skill__basico'>PHP</li>
                            <li className='skill__intermedio'>TypeScript</li>
                        </ul>
                    </div>
                </div>
                <div className='flex-container'>
                    <div className='div__skill'>
                        <h4 className='subtitle__skills'>Herramientas de diseño</h4>
                        <ul className='skill__ul'>
                            <li className='skill__avanzado'>Photoshopt</li>
                            <li className='skill__intermedio'>Illustrator</li>
                            <li className='skill__avanzado'>Figma</li>
                        </ul>
                    </div>
                    <div className='div__skill'>
                        <h4 className='subtitle__skills'>Otros</h4>
                        <ul className='skill__ul'>
                            <li className='skill__avanzado'>HTML</li>
                            <li className='skill__avanzado'>CSS</li>
                            {/* <li className='skill__intermedio'>MySQL</li> */}
                            <li className='skill__avanzado'>WordPress</li>
                            <li className='skill__intermedio'>Git y GitHub</li>
                        </ul>
                    </div>
                </div>
                {/* Niveles */}
                <div className='level-skills__container'>
                    <div className='level-skill'>
                        <div className='square__level square__level--avanzado'></div>
                        <span>Avanzado</span>
                    </div>
                    <div className='level-skill'>
                        <div className='square__level square__level--intermedio'></div>
                        <span>Intermedio</span>
                    </div>
                    <div className='level-skill'>
                        <div className='square__level square__level--basico'></div>
                        <span>Básico</span>
                    </div>
                </div>
            </div>
            <div className='container__cursos'>
                <CursosSection />
            </div>
        </div>
    )
}

export default SkillsSection
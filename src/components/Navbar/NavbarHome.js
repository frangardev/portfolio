import React from "react";
import { Link } from 'react-scroll'
import { animateScroll as scroll } from "react-scroll"; 

import './Navbar.css'

function NavbarHome (){
    return(
        <ul>
            <li>
                <Link 
                  to="home"
                  smooth={true}
                  duration={600}>
                    Inicio
                </Link>
            </li>
            <li>
                <Link 
                    to="AboutMe"
                    smooth={true}
                    duration={800}
                    >
                    Sobre mi
                </Link>
            </li>
            <li>
                <Link
                    to='projects'
                    smooth={true}
                    duration={1000}
                    >
                        Proyectos      
                </Link>
            </li>
            <li>
            <Link
                    to='contact'
                    smooth={true}
                    duration={1700}
                    >
                        Contacto      
                </Link>
            </li>
        </ul>
    )
}

export { NavbarHome }
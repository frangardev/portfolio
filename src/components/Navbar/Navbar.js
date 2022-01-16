import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar (){
    return(
        <ul>
            <li>
                <NavLink to='/#home'>
                    Inicio
                </NavLink>
            </li>
            <li>
                {/* <NavLink to='/#AboutMe'>
                    Sobre mi
                </NavLink> */}
                <a href="#AboutMe">Sobre mi</a>
            </li>
            <li>
                <NavLink to='/#projects'>
                    Proyectos
                </NavLink>
            </li>
            <li>
                <NavLink to='/#contact'>
                    Contacto
                </NavLink>
            </li>
        </ul>
    )
}

export { Navbar }
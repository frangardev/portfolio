import React from "react";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll"; 

import './Navbar.css'

function Navbar (){
    return(
        <ul>
            <li>
            <NavLink to='/'
                    onClick={() =>{
                        // scroll.scrollMore(2500)
                    }}
                >
                    Inicio
                </NavLink>
            </li>
            <li>
            <NavLink to='/'
                    onClick={() =>{
                        scroll.scrollMore(600)
                    }}
                >
                    Sobre Mi
                </NavLink>
            </li>
            <li>
            <NavLink to='/'
                    onClick={() =>{
                        scroll.scrollMore(1150)
                    }}
                >
                    Proyectos
                </NavLink>
            </li>
            <li>
                <NavLink to='/'
                    onClick={() =>{
                        scroll.scrollMore(2500)
                    }}
                >
                    Contacto
                </NavLink>
            </li>
        </ul>
    )
}

export { Navbar }
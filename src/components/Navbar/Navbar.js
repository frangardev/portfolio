import React from "react";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll"; 

import './Navbar.css'

function Navbar (){

    const [openMenu, setOpenMenu] = React.useState(false)

    return(
        <nav className={`Menu__container ${openMenu && 'translate'}`}>
            <div 
                className="Menu-icon"
                onClick={()=>{
                    setOpenMenu(!openMenu)
                }}
            ></div>

            <ul className='Menu'>
                <li>
                <NavLink to='/'>
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
                            scroll.scrollMore(2800)
                        }}
                    >
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }
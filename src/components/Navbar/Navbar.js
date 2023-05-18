import React from "react";
import { NavLink } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import './Navbar.css'

function Navbar() {

    const [openMenu, setOpenMenu] = React.useState(false)

    return (
        <nav className={`Menu__container ${openMenu && 'translate'}`}>
            <div
                className="Menu-icon"
                onClick={() => {
                    setOpenMenu(!openMenu)
                }}
            ></div>

            <ul className='Menu menu--about'>
                <li>
                    <NavLink to='/'
                        onClick={() => setOpenMenu(!openMenu)}>
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        onClick={() => {
                            scroll.scrollMore(600)
                            setOpenMenu(!openMenu)
                        }}
                    >
                        Sobre Mi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        onClick={() => {
                            scroll.scrollMore(1150)
                            setOpenMenu(!openMenu)
                        }}
                    >
                        Proyectos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        onClick={() => {
                            scroll.scrollMore(2800)
                            setOpenMenu(!openMenu)
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
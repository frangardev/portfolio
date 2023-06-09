import React from "react";
import { Link } from 'react-scroll'

import './Navbar.css'

function NavbarHome({ modal }) {
    const [openMenu, setOpenMenu] = React.useState(false)

    return (
        <nav className={`Menu__container nav ${openMenu && 'translate'}`}>
            <div
                className="Menu-icon"
                onClick={() => {
                    if (!modal) {
                        setOpenMenu(!openMenu)
                    }
                }}
            ></div>

            <ul className="Menu">
                <li>
                    <Link
                        activeClass="active"
                        to="home"
                        smooth={true}
                        duration={600}
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setOpenMenu(!openMenu)}
                        activeClass="active"
                        to="AboutMe"
                        smooth={true}
                        duration={800}
                    >
                        Sobre mi
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setOpenMenu(!openMenu)}
                        activeClass="active"
                        to='projects'
                        smooth={true}
                        duration={1000}
                    >
                        Proyectos
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={() => setOpenMenu(!openMenu)}
                        activeClass="active"
                        to='contact'
                        smooth={true}
                        duration={1700}
                    >
                        Contacto
                    </Link>
                </li>
                <li>
                    <a activeClass="active" href="https://drive.google.com/file/d/1Pcw5LvJk_FTaBG_v7qv-wAp_1YHN5FQM/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
                </li>
            </ul>
        </nav>
    )
}

export { NavbarHome }
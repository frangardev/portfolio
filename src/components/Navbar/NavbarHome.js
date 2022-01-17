import React from "react";
import { Link } from 'react-scroll'

import './Navbar.css'

function NavbarHome (){
    const [openMenu, setOpenMenu] = React.useState(false)

    return(
        <nav className={`Menu__container nav ${openMenu && 'translate'}`}>
            <div 
                className="Menu-icon"
                onClick={()=>{
                    setOpenMenu(!openMenu)
                }}
            ></div>

            <ul className="Menu">
                <li>
                    <Link 
                    onClick={()=> setOpenMenu(!openMenu) }     
                    to="home"
                    smooth={true}
                    duration={600}>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link 
                        onClick={()=> setOpenMenu(!openMenu) }     
                        to="AboutMe"
                        smooth={true}
                        duration={800}
                        >
                        Sobre mi
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={()=> setOpenMenu(!openMenu) }     
                        to='projects'
                        smooth={true}
                        duration={1000}
                        >
                            Proyectos      
                    </Link>
                </li>
                <li>
                <Link
                        onClick={()=> setOpenMenu(!openMenu) } 
                        to='contact'
                        smooth={true}
                        duration={1700}
                        >
                            Contacto      
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export { NavbarHome }
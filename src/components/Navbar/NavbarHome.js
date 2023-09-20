import React from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

function NavbarHome({ modal, setIsNotViewNav }) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const navRef = React.useRef(null);
  // Actualiza la información sobre si está en observer el header para hacer el cambio de los estilos en el navbar
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsNotViewNav(!entry.isIntersecting);
  };
  // Opciones  del IntersectionObserver
  const options = {
    root: null,
    rootMargin: "400px",
    threshold: 1,
  };

  // Crea y elimina el IntersectionObserver
  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (navRef.current) observer.observe(navRef.current);

    return () => {
      if (navRef.current) observer.unobserve(navRef.current);
    };
  }, [navRef]);

  return (
    <nav
      className={`Menu__container nav ${openMenu && "translate"}`}
      ref={navRef}
    >
      <div
        className="Menu-icon"
        onClick={() => {
          if (!modal) {
            setOpenMenu(!openMenu);
          }
        }}
      ></div>

      <ul className="Menu">
        <li>
          <Link
            // activeClass="active"
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
            // activeClass="active"
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
            // activeClass="active"
            to="projects"
            smooth={true}
            duration={1000}
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setOpenMenu(!openMenu)}
            // activeClass="active"
            to="contact"
            smooth={true}
            duration={1700}
          >
            Contacto
          </Link>
        </li>
        <li>
          <a
            // activeClass="active"
            href="https://drive.google.com/file/d/1Pcw5LvJk_FTaBG_v7qv-wAp_1YHN5FQM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

export { NavbarHome };

import React from "react";
import Logo from "../../assets/Logo/Logo";
import "./Footer.css";
import { Link } from "react-scroll";
import GitHub from "../../assets/GitHub/GitHub";
import Linkedin from "../../assets/Linkedin/Linkedin";
import Twitter from "../../assets/Twitter/Twitter";
import Instagram from "../../assets/Instagram/Instagram";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__flex--container">
        <div className="footer__logo">
          <Logo isNotCompleteLogo={true} />
          <p>Frangardev</p>
        </div>
        <div className="footer__sections">
          <h4>Secciones</h4>
          <ul className="footer__nav">
            <li>
              <Link to="home" smooth={true} duration={1600}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="AboutMe" smooth={true} duration={1200}>
                Sobre mi
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={1000}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={200}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <ul className="footer__icons--container">
        <li>
          <a
            href="https://www.linkedin.com/in/frangardev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/frangardev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/frangardev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/frangardev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </li>
      </ul>

      <p className="footer__text">
        Copyright © 2023 frangardev Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;

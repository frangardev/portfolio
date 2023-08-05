import React from "react";
import "./Contact.css";

import { Button } from "../Button/Button";
import Linkedin from "../../assets/Linkedin/Linkedin";
import GitHub from "../../assets/GitHub/GitHub";
import Twitter from "../../assets/Twitter/Twitter";

function Contact() {
  return (
    <section className="Contact" id="contact">
      <div className="Contact__container--text">
        <h2 className="Sub-title sub-title--contact">Trabajemos Juntos</h2>
        {/* <p className="text text--contact">Empecemos desde ahora mismo a trabajar y cumplir todas nuestras metas juntos &lt;3.</p> */}
        <Button
          type="primary wide"
          text={
            <span className="contact__button">
              <img
                src="https://i.ibb.co/qyww5Fz/icon-mail.png"
                alt="icon-mail"
                border="0"
              />
              <span className="contact__buton__text">Contactar</span>
            </span>
          }
          url="mailto:frangardev@outlook.com"
        />
      </div>

      <ul className="Social">
        <li>
          <a
            href="https://www.linkedin.com/in/frangardev/"
            target="_blank"
            rel="noopener noreferrer"
            className="Social__icon"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/frangardev"
            target="_blank"
            rel="noopener noreferrer"
            className="Social__icon"
          >
            <GitHub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/frangardev"
            target="_blank"
            rel="noopener noreferrer"
            className="Social__icon"
          >
            <Twitter />
          </a>
        </li>
        {/* <li>
                    <a href="https://instagram.com/frangardev" target="_blank" rel="noopener noreferrer" >
                        <img className="Social__icon" src="https://i.ibb.co/Dwrz7cB/logo-instagram-color.png" alt="logo-instagram-color" border="0" />
                    </a>
                </li> */}
      </ul>
    </section>
  );
}

export { Contact };

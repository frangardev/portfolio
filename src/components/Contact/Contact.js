import React from "react";
import './Contact.css'

import { Button } from '../Button/Button'

function Contact(){
    return(
        <section className="Contact" id="contact">
            <div className="Contact__container--text">
                <h2 className="Sub-title sub-title--contact">Comencemos Ya </h2>
                {/* <p className="text text--contact">Empecemos desde ahora mismo a trabajar y cumplir todas nuestras metas juntos &lt;3.</p> */}
                <Button
                    type = "primary wide"
                    text= {
                        <span className="contact__button">
                            <img src="https://i.ibb.co/qyww5Fz/icon-mail.png" alt="icon-mail" border="0"/>
                            <span className="contact__buton__text">Contactar</span>
                        </span>
                    }
                    url='mailto:frangardev@outlook.com'
                />
            </div>

            <ul className="Social">
                <li>
                    <a href="https://www.linkedin.com/in/frangardev/" target="_blank" rel="noopener noreferrer" >
                        <img className="Social__icon" loading="lazy" src="https://i.ibb.co/92bjHY0/logo-linkedin-color.png" alt="logo-linkedin-color" border="0"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/frangardev" target="_blank" rel="noopener noreferrer" >
                        <img className="Social__icon" loading="lazy" src="https://i.ibb.co/zV2Vb4C/logo-github.png" alt="logo-github" border="0"/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/frangardev" target="_blank" rel="noopener noreferrer" >
                        <img className="Social__icon" loading="lazy" src="https://i.ibb.co/Jk0xdWm/logo-twittwer-color.png" alt="logo-twittwer-color" border="0"/>
                    </a>
                </li>
                {/* <li>
                    <a href="https://instagram.com/frangardev">
                        <img className="Social__icon" src="https://i.ibb.co/Dwrz7cB/logo-instagram-color.png" alt="logo-instagram-color" border="0"/>
                    </a>
                </li> */}
            </ul>
        </section>
    )
}

export { Contact }
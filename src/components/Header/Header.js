import React from "react";
import './Header.css'

import { Button } from '../Button/Button'
import { NavbarHome } from '../Navbar/NavbarHome'

function Header(){
    return(
        <header className="header" id="home">

            <NavbarHome />

            <p className="username">@frangardev</p>

            <h1 className="title-header">¡Hola! Soy Fran <span className="title-header__span">Frontend Developer</span></h1>

    
            <figure className="drawing-header__container">
                <img className="drawing-header" src="https://i.ibb.co/D4LKV3M/frangardev-pixelart.png" alt="Dibjo de Fran"/>
                
                <div className="square square-1"></div>
                <div className="square square-2"></div>
                <div className="square square-3"></div>
                <div className="square square-4"></div>
                <div className="square square-5"></div>
                <div className="square square-6"></div>
                <div className="square square-7"></div>
                
            </figure>

            <Button
                type = "secondary btn__header-secondary"
                text= {
                    <span>CV</span>
                }
                url='https://drive.google.com/file/d/19ZdneEzQhAgJTfXCbHAUy8fcSMDlIuzF/view?usp=sharing'
            />

            <Button
                type = "primary btn__header-primary"
                text= {
                    <span className="contact__button">
                        <img src="https://i.ibb.co/qyww5Fz/icon-mail.png" alt="icon-mail" border="0"/>
                        <span className="contact__buton__text">Contactar</span>
                    </span>
                }
                url='mailto:frangardev@outlook.com'
            />
        
      </header>
    )
}

export { Header }
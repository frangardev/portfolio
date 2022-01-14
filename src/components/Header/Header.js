import React from "react";
import './Header.css'

function Header(){
    <header className="header" id="home">

        {/* <Navbar/> */}
        <p>--- <br/> --</p>

        <p>@frangardev</p>

        <h1 className="title-header">Francisco Alejandro García Munguia <span>Frontend Developr</span></h1>

  
        <figure className="drawing-header__container">
          <img className="drawing-header" src="https://frangardev.com/redes/assets/img/frangardev-pixelart.png" alt="Dibjo de Fran"/>
          
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
                    <span className="contact__button">
                    <img src="https://i.ibb.co/qyww5Fz/icon-mail.png" alt="icon-mail" border="0"/>
                    <span className="contact__buton__text">Contactar</span>
                </span>
            }
            url='mailto:frangardev@outlook.com'
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
}

export { Header }
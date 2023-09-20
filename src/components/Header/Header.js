import React from "react";
import './Header.css'

import { Button } from '../Button/Button'


function Header({ children, setIsLoading }) {
    const [loadImage, setLoadImage] = React.useState(false)
    const loadPage = () => {;
        setTimeout(() => {
            setLoadImage(true)
          }, "1000");
    }
    return (
        <header className="header" id="home">

            {children}


            <h1 className="title-header">¡Hola, Soy Fran! <span className="title-header__span">Programador y Diseñador UI/UX</span></h1>
            <p className="username">@frangardev</p>

            <img className="decoration" src="https://i.ibb.co/kJc6gCh/decoration-portfolio.png" alt="decoration"/>

            <figure className="drawing-header__container">
                <img className="drawing-header" src="https://i.ibb.co/WH8DLrF/image-header.gif" alt="Dibjo de Fran" onLoad={loadPage} />
                {loadImage && (
                    <React.Fragment>
                        <div className="square square-1"></div>
                        <div className="square square-2"></div>
                        <div className="square square-3"></div>
                        <div className="square square-4"></div>
                        <div className="square square-5"></div>
                        <div className="square square-6"></div>
                        <div className="square square-7"></div>
                    </React.Fragment>
                )}

            </figure>

            <div className="buttons-container">
                <Button
                    type="primary btn__header-primary"
                    text={
                        <span className="contact__button">
                            <img className="icon-button-contact__header" src="https://i.ibb.co/qyww5Fz/icon-mail.png" alt="icon-mail" border="0" />
                            <span className="contact__buton__text">Contactar</span>
                        </span>
                    }
                    url='mailto:frangardev@outlook.com'
                />
            </div>

        </header>
    )
}

export { Header }

import React from "react";
import './Header.css'

import { Button } from '../Button/Button'


function Header({ children }) {
    const [loadImage, setLoadImage] = React.useState(false)
    return (
        <header className="header" id="home">

            {children}

            <p className="username">@frangardev</p>

            <h1 className="title-header">¡Hola! Soy Fran <span className="title-header__span">Programador y diseñador UX</span></h1>


            <figure className="drawing-header__container">
                <img className="drawing-header" src="https://i.ibb.co/WH8DLrF/image-header.gif" alt="Dibjo de Fran" onLoad={() => setLoadImage(true)} />
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

            {/* <Button
                type="secondary btn__header-secondary"
                text={
                    <span>CV</span>
                }
                url='https://drive.google.com/file/d/18ZbruNFTW6912EJMTJL4Kf1BiwhEeKck/view?usp=sharing'
            /> */}
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

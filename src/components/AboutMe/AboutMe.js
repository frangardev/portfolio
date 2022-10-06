import React from "react";
import { Link } from 'react-router-dom'
import './AboutMe.css'

import { SkeletonProject } from '../SkeletonProject/SkeletonProject'

function AboutMe() {

    const [loadProfile, setLoadProfile] = React.useState(true)

    return (
        <section className="AboutMe" id="AboutMe">
            <figure className="Photo__container">
                <img
                    className={`Photo ${!loadProfile && 'Photo-loaded'}`}
                    src="https://i.ibb.co/fv90Jtf/franciasco-alejandro-garcia-munguia-1.jpg"
                    alt="Fotografía de Francisco Alejandro García Munguía"
                    onLoad={() => setLoadProfile(false)}
                />
                {loadProfile && (<SkeletonProject type='photo-profile' />)}
            </figure>
            <h2 className="Name__title">Francisco Alejandro García Munguía</h2>
            {/* <h3 className="work__title">Frontend Developer</h3> */}
            <p className="text about">Soy desarrollador y diseñador UX con muchas ganas de crecer y aportar con todos mis conocimientos en desarrollo web y diseño UX. Me apasiona la tecnología y aprender. Me considero una persona creativa y muy proactiva</p>
            {/* <a className="link" href="#">ver mas ></a> */}
            <Link className="link" to="/about">ver mas <i class="fas fa-chevron-right"></i> </Link>
        </section>
    )
}

export { AboutMe }
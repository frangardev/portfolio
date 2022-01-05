import React from "react";
import './Contact.css'

import { Button } from '../Button/Button'

function Contact(){
    return(
        <section className="Contact">
            <h2>Contacto</h2>
            <p>Lorrem hfahso asoihfa hafhpasfas asdhfasiof asfhiaf asdihfpasf asdfhiasif</p>
            <Button
                type = "primary"
                text= 'Crescamos Juntos'
                url='mailto:frangardev@outlook.com'
            />
            <ul className="Social">
                <li>
                    <a href="#">Linkedin</a>
                </li>
                <li>
                    <a href="#">GitHub</a>
                </li>
                <li>
                    <a href="#">Thitter</a>
                </li>
                <li>
                    <a href="#">Instagram</a>
                </li>
            </ul>
        </section>
    )
}

export { Contact }
import React from "react";
import "./Contact.css";

import ContactForm from "../ContactForm/ContactForm";
import { Button } from "../Button/Button";
import ContactInfoImage from "../ContactInfoImage/ContactInfoImage";

function Contact() {
  return (
    <section className="Contact" id="contact">
      <h2 className="Sub-title">Trabajemos Juntos</h2>
      <div className="contact__flex-container">
        <div className="ContactForm--container">
          <ContactForm />
        </div>
        <div className="ContactInfoImage--container contactIsView">
          <ContactInfoImage />
          {/* <div className="ContactInfoImage__decoration ContactInfoImage__decoration--1"></div>
          <div className="ContactInfoImage__decoration ContactInfoImage__decoration--2"></div>
          <div className="ContactInfoImage__decoration ContactInfoImage__decoration--3"></div> */}
        </div>
      </div>
    </section>
  );
}

export { Contact };

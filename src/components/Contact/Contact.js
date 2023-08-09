import React from "react";
import "./Contact.css";

import ContactForm from "../ContactForm/ContactForm";
import { Button } from "../Button/Button";
import ContactInfoImage from "../ContactInfoImage/ContactInfoImage";

function Contact() {
  const contactRef = React.useRef(null);
  // Actualiza la información sobre si está en observer el header para hacer el cambio de los estilos en el navbar
  const callbackFunction = (entries) => {
    const [entry] = entries;
    // setIsViewHeader(entry.isIntersecting)
    console.log("----------");
    console.log(entry.isIntersecting);
  };
  // Opciones  del IntersectionObserver
  const options = {
    root: null,
    rootMargin: "10px",
    threshold: 1,
  };

  // Crea y elimina el IntersectionObserver
  React.useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, [contactRef]);

  return (
    <section className="Contact" id="contact" ref={contactRef}>
      <h2 className="Sub-title">Trabajemos Juntos</h2>
      <div className="contact__flex-container">
        <div className="ContactForm--container">
          <ContactForm />
        </div>
        <div className="ContactInfoImage--container contactIsView">
          <ContactInfoImage />
          <div className="ContactInfoImage__decoration ContactInfoImage__decoration--1"></div>
          <div className="ContactInfoImage__decoration ContactInfoImage__decoration--2"></div>
          <div className="ContactInfoImage__decoration ContactInfoImage__decoration--3"></div>
        </div>
      </div>
    </section>
  );
}

export { Contact };

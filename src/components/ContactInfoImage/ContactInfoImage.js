import React from "react";
import "./ContactInfoImage.css";

import GitHub from "../../assets/GitHub/GitHub";
import Linkedin from "../../assets/Linkedin/Linkedin";
import Twitter from "../../assets/Twitter/Twitter";
import Instagram from "../../assets/Instagram/Instagram";
import Phone from "../../assets/Phone/Phone";
import Email from "../../assets/Email/Email";

function ContactInfoImage() {
  return (
    <div className="contactInfoImage">
      <ul className="contactInfoImage__info-contact">
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/frangardev/"
            aria-label="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin color={"#1e1e1e"} bgColor={"none"} />{" "}
          </a>
          <span>/frangardev</span>
        </li>
        <li>
          {" "}
          <a
            href="tel:+52425-108-8907"
            aria-label="Teléfono"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone color={"#1e1e1e"} bgColor={"none"} />{" "}
          </a>
          <span>+52 4251088907</span>
        </li>
        <li>
          {" "}
          <a
            href="mailto:frangardev@outlook.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email
              color={"#1e1e1e"}
              // bgColorEmail={"#fff"}
              bgColorEmail={"transparent"}
              bgColor={"none"}
            />{" "}
          </a>
          <span>frangardev@outlook.com</span>
        </li>
      </ul>

      <ul className="contactInfoImage__redes">
        <li>
          <a
            href="https://github.com/frangardev"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/frangardev"
            aria-label="Twitter o X"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/frangardev"
            aria-label="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </li>
      </ul>

      <img
        src="https://i.ibb.co/wLy1sbH/yo-contact.jpg"
        alt="contact drawing"
        className="contactInfoImage__image"
      />
    </div>
  );
}

export default ContactInfoImage;

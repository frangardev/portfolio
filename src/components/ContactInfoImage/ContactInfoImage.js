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
          <Linkedin color={"#1e1e1e"} bgColor={"none"} />{" "}
          <span>/frangardev</span>
        </li>
        <li>
          {" "}
          <Phone color={"#1e1e1e"} bgColor={"none"} />{" "}
          <span>+52 4251088907</span>
        </li>
        <li>
          {" "}
          <Email
            color={"#1e1e1e"}
            // bgColorEmail={"#fff"}
            bgColorEmail={"transparent"}
            bgColor={"none"}
          />{" "}
          <span>frangardev@outlook.com</span>
        </li>
      </ul>

      <ul className="contactInfoImage__redes">
        <li>
          <a
            href="https://github.com/frangardev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/frangardev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/frangardev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </li>
      </ul>

      <img
        src="https://i.ibb.co/WH8DLrF/image-header.gif"
        alt="contact drawing"
        className="contactInfoImage__image"
      />
    </div>
  );
}

export default ContactInfoImage;

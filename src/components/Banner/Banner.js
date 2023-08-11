import React from "react";
import "./Banner.css";
import { Icon } from "@iconify/react";
import { technologies } from "../../Data/Data";

function Banner() {
  const skills = Object.values(technologies)
    .concat(Object.values(technologies))
    .concat(Object.values(technologies));

  return (
    <ul className="banner__container slider">
      {skills.map((item) => (
        <li className="sliderItem" key={item.name}>
          <Icon icon={item.icon} className="logo" />
          <p className="text">{item.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default Banner;

import React from "react";
import "./UpButton.css";
import { Link } from "react-scroll";
import Arrow from "../../assets/Arrow/Arrow";

function UpButton() {
  return (
    <Link className="UpButton" to="home" smooth={true} duration={600}>
      <Arrow color={"#1e1e1e"} bgColor={"#fff"} />
    </Link>
  );
}

export default UpButton;

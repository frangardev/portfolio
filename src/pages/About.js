import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import "./About.css";

import { SkeletonProject } from "../Components/SkeletonProject/SkeletonProject";
import SkillsSection from "../Components/SkillsSection/SkillsSection";
import { MiniContact } from "../Components/Contact/MiniContact";

function About() {
  const [loadPhoto, setLoadPhoto] = React.useState(true);

  return (
    <>
      <section className="About__container">
        <img
          className={`about__image ${!loadPhoto && "about__image-load"}`}
          src="https://i.ibb.co/8NvFYrr/francisco-garc-a-amor-a-la-programaci-n.jpg"
          alt="Fotografía de Francisco García"
          onLoad={() => setLoadPhoto(false)}
        />

        {loadPhoto && <SkeletonProject type="about-photo" />}

        <div className="title-about__content">
          <Navbar />
          <span>Hola, soy</span>
          <h2 className="about__title-page">
            Francisco Alejandro García Munguía
          </h2>
          <span>Desarrollador y Diseñador</span>
        </div>

        <p className="text about__text">
          Soy desarrollador frontend especializado en React. Apasionado por la
          programación y el diseño ui/ux. ✨
          <br />
          <br />
          Tengo alrededor de 2 años de experiencia desarrollando y diseñando
          sitios web, experiencia que me ha permitido desarrollar mis
          habilidades en programación, diseño, trabajo en equipo, liderazgo y
          planificación de proyectos.
          <br />
          <br />
          Soy una persona creativa, proactiva y como buen programador, siempre
          intento encontrar la manera más eficiente de hacer las cosas.
        </p>
      </section>

      <SkillsSection />

      <MiniContact />
    </>
  );
}

export { About };

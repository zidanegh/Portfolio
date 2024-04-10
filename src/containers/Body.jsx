import React from "react";
import Caroussel from "../components/Caroussel";
import APropos from "../components/APropos";
import Competence from "./Competence";
import ToutLesProjects from "./ToutLesProjects";
import Contact from "../components/Contact";

export default function Body() {
  return (
    <>
      <main>
        <APropos />
        <Competence />
        <div id="projet">
          <h1>Projet</h1>
          <Caroussel />
          <ToutLesProjects />
        </div>
        <div id="contact">
          <h1>contactez moi</h1>
          <Contact />
        </div>
      </main>
    </>
  );
}

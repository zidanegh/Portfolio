import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import data from "../assets/code-projet.json";

export default function Caroussel() {
  const grosProjet = data.bigprojects;
  return (
    <div className="grosProjet">
      <h2>Présentation gros projet</h2>
      <Carousel autoPlay infiniteLoop showStatus={false}>
        {grosProjet.map((projet) => (
          <div key={projet.id}>
            <img src={projet.image} alt={projet.alt} />
            <div className="overlay">
              <h3 className="overlay_title">{projet.name}</h3>
              <p className="overlay_text">{projet.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

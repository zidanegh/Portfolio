import React from "react";
import Logo from "./Logo";

export default function Filteur() {
  return (
    <>
      <div className="filtre">
        <h2>Tout les projects</h2>
        <div className="filtreur">
          <Logo Click={true} />
        </div>
      </div>
    </>
  );
}

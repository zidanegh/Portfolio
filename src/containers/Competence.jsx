import React from "react";
import Logo from "../components/Logo";

export default function Competence() {
  return (
    <>
      <div id="competence">
        <div className="competence-titre">
          <h1>Compétence</h1>
        </div>
        <div className="contentWrapper">
          <div className="div">
            <div className="at-item-top"></div>
            <div className="competence-logo">
              <Logo />
            </div>
            <div className="at-item"></div>
          </div>
        </div>
      </div>
    </>
  );
}

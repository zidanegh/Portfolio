import React from "react";

export default function Header() {
  return (
    <>
      <header className="header">
        <h1>Portfolio</h1>
        <nav className="nav-Bar">
          <ul>
            <li>
              <a href="#apropos">À propos</a>
            </li>
            <li>
              <a href="#competence">Compétence</a>
            </li>
            <li>
              <a href="#projet">Projet</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

import React from "react";

export default function APropos() {
  return (
    <>
      <section id="apropos">
        <article className="presentation-article">
          <div className="presentation-article-text">
            <div>
              <h1>présentation</h1>
            </div>
            <div>
              <p>
                je suis Zidane un jeune développeur de 22ans j'ai fais un
                diplome d'intégrateur web chez openclassrooms Grâce à cette
                expérience avec openclassrooms j'ai aquéri plusieurs compétence
                dans différent language j'approfondirais dans la partie projet
                Je suis autodidacte, j'aime apprendre de nouveaux concept et
                faire des créations de tout type dans tout les domaines
              </p>
            </div>
          </div>
          <img
            className="presentation-article-img"
            src="./public/coding.jpg"
            alt="image ligne de code"
          />
        </article>
      </section>
    </>
  );
}

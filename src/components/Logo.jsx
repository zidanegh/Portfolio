import React, { useEffect, useState } from "react";
import data from "../assets/code-projet.json";
import { useDispatch, useSelector } from "react-redux";
import { chosenLogoSlice } from "../store/store";

export default function Logo({ Click }) {
  const logos = data.logos;
  const dispatch = useDispatch();
  const reduxLogo = logos.find((logo) => logo.logoName === "Redux");
  const GlobeLogo = logos.find(
    (logo) => logo.logoGlobe === "fa-solid fa-globe"
  );
  const chosenLogo = useSelector((state) => state.chosenLogo);
  const [stringChosenLogo, setStringChosenLogo] = useState(
    chosenLogo.chosenLogo
  );

  useEffect(() => {
    setStringChosenLogo(chosenLogo.chosenLogo);
  }, [chosenLogo]);

  const handleClickLogo = (logo) => () => {
    if (Click) {
      dispatch(chosenLogoSlice.actions.changeChosenLogo(logo));
      console.log(stringChosenLogo);
    }
  };

  return (
    <>
      {Click ? (
        <i
          className={`${"fa-solid fa-globe"} ${
            Click ? (stringChosenLogo === "ALL" ? "ALL" : "") : ""
          }`}
          onClick={Click ? handleClickLogo("ALL") : null}
        ></i>
      ) : (
        ""
      )}
      {logos.map((logo) => (
        <i
          className={`${logo.LogoChemin} ${
            Click
              ? stringChosenLogo === logo.logoName
                ? `${logo.logoName}`
                : ""
              : ""
          }`}
          onClick={Click ? handleClickLogo(logo.logoName) : null}
          key={logo.id}
        ></i>
      ))}
      <img
        src="./src/assets/logo/logoRedux.png"
        alt="logo redux"
        className={`logoRedux ${
          stringChosenLogo === "Redux" ? "" : "greyscale"
        }`}
        onClick={handleClickLogo("Redux")}
      />
    </>
  );
}

import React from "react";
import "../css/mercury.css";

import * as MercuryInfo from "./info/mercuryInfo.js";

// IMAGES
import mercuryImage from "../images/Mercury.jpg";
import mercuryStructure from "../images/MercuryStructure.svg";

// COMPONENTS
import CompStructSize from "../components/CompStructSize.jsx";
import GeologicalActivity from "../components/GeologicalActivity.jsx";
import Differentiation from "../components/Differentation.jsx";
import BottomNavBtn from "../components/BottomNavBtn.jsx";
import ReturnHomeBtn from "../components/ReturnHomeBtn.jsx";
import PlanetHeader from "../components/PlanetHeader.jsx";

function Mercury() {
  var planetColor = "var(--mercury)";

  return (
    <div className="mercury">
      <ReturnHomeBtn />

      <PlanetHeader
        planetName={"Mercury"}
        typeOfPlanet={"Terrestrial"}
        image={mercuryImage}
        stats={Object.values(MercuryInfo.stats)}
      />

      <CompStructSize
        composition={Object.values(MercuryInfo.comp)}
        size={Object.values(MercuryInfo.size)}
        surface={Object.values(MercuryInfo.surface)}
        structure={Object.values(MercuryInfo.structure)}
        structureImg={mercuryStructure}
        planetSize={"Small"}
        color={"mercury"}
        planetType={"Terrestrial"}
      />

      <Differentiation color={planetColor} />

      <GeologicalActivity
        geological={Object.values(MercuryInfo.geological)}
        color={planetColor}
      />

      <BottomNavBtn currPlanet={"Mercury"} />
    </div>
  );
}

export default Mercury;

import React from "react";
import "../css/earth.css";
import * as EarthInfo from "./info/earthInfo.js";
import PlanetHeader from "../components/PlanetHeader.jsx";

import earthImg from "../images/Earth.jpg";
import earthStructure from "../images/EarthStructure.svg";
import moonImg from "../images/Moon.webp";

import CompStructSize from "../components/CompStructSize.jsx";
import GeologicalActivity from "../components/GeologicalActivity.jsx";
import Differentiation from "../components/Differentation.jsx";
import BottomNavBtn from "../components/BottomNavBtn.jsx";
import TableComponents from "../components/TableComponent.jsx";
import ReturnHomeBtn from "../components/ReturnHomeBtn.jsx";

function Earth() {
  var planetColor = "var(--earth)";

  return (
    <div className="earth">
      <ReturnHomeBtn />

      <PlanetHeader
        planetName={"Earth"}
        typeOfPlanet={"Terrestrial"}
        image={earthImg}
        stats={Object.values(EarthInfo.stats)}
      />

      <CompStructSize
        // composition={Object.values(EarthInfo.comp)}
        size={Object.values(EarthInfo.size)}
        structure={Object.values(EarthInfo.size)}
        surface={Object.values(EarthInfo.surface)}
        structureImg={earthStructure}
        planetSize={"Large"}
        color={"earth"}
        planetType={"Terrestrial"}
      />

      <Differentiation color={planetColor} />

      <TableComponents
        title={EarthInfo.atmosphere.title}
        content={EarthInfo.atmosphere.content}
        color={"earth"}
      />

      <GeologicalActivity
        geological={Object.values(EarthInfo.geological)}
        // summaryText={""}
        color={planetColor}
      />

      <section id="life" className="glass-box">
        <div className="icon-head">
          <i className="fa-solid fa-seedling"></i>
          <h2>Life</h2>
        </div>

        <p>
          Earth is the only planet habitable by life, which in turn affects the
          planet. For example, planets are responsible for replenishing the
          oxygen in the atmosphere. We humans also affect the atmosphere by
          releasing gases such as ozone and excess carbon dioxide, resulting in
          non-equilibrium chemistry or reactions occurring in the atmosphere.
        </p>
      </section>

      <section>
        <h2>The Moon</h2>
        <div className="moon">
          <TableComponents
            title={EarthInfo.moonStats.title}
            content={EarthInfo.moonStats.content}
          />
          <img src={moonImg} alt={""} />
        </div>
      </section>

      <BottomNavBtn currPlanet={"Earth"} />
    </div>
  );
}

export default Earth;

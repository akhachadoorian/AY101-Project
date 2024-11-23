import React from "react";
import GlassboxStats from "../components/GlassboxStats.jsx";
import defaultPhoto from "../images/MilklyWay.jpg";

function PlanetHeader({
  planetName,
  typeOfPlanet,
  image = defaultPhoto,
  stats,
}) {
  const style = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="planet">
      <div className="planet-header">
        <h1>{planetName}</h1>
      </div>

      <div className="img-holder" style={style}>
        <div className="stats">
          <div className="appear-wrapper">
            <div className="glass-box appear" id="type">
              <h3>{typeOfPlanet} Planet</h3>
            </div>
          </div>
          {stats.map((component, index) => (
            <div className="appear-wrapper" key={index}>
              <GlassboxStats
                title={component.title}
                paragraphs={component.stat}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlanetHeader;

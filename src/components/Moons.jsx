import React from "react";
import TableComponent from "./TableComponent";

function Moons({ color }) {
  const moons = [
    {
      label: "Jupiter",
      info: "96",
    },
    {
      label: "Saturn",
      info: "146",
    },
    {
      label: "Uranus",
      info: "28",
    },
    {
      label: "Neptune",
      info: "16",
    },
  ];

  return (
    <div className="moons">
      <h2>Moons</h2>
      <div className="moons-inner">
        <div className="glass-box">
          <p>
            The planets in the outer solar system have a significant number of
            moons due to the large number of materials available, specifically
            ice. The more material available, the more objects that can be made.
          </p>
        </div>
        <TableComponent
          title={"Outer Solar System Moons"}
          content={moons}
          color={color}
        />
      </div>
    </div>
  );
}

export default Moons;

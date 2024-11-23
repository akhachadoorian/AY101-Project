import React from "react";

import mercuryImage from "../images/Mercury.jpg";
import venusImg from "../images/Venus.jpg";
import earthImg from "../images/Earth.jpg";
import marsPhoto from "../images/mars.jpg";
import jupiterImg from "../images/Jupiter.jpg";
import saturnImg from "../images/Saturn.jpg";
import uranusImg from "../images/Uranus.jpg";
import neptuneImg from "../images/Neptune.jpg";

import { Link } from "react-router-dom";

function BottomNavBtn({ currPlanet }) {
  const planets = {
    Mercury: {
      left: "Neptune",
      right: "Venus",
      img: mercuryImage,
      link: "/mercury",
      color: "var(--mercury)",
      title: "Mercury",
      type: "Terrestrial",
      summary:
        "Mercury's gray and cratered appearance makes it look similar to the Moon. Its small size caused its internals to cool quickly, preventing any geological activity.",
    },
    Venus: {
      left: "Mercury",
      right: "Earth",
      img: venusImg,
      link: "/venus",
      color: "var(--venus)",
      title: "Venus",
      type: "Terrestrial",
      summary:
        "The significant greenhouse effect on Venus has resulted in a super high surface temperature, a thick CO<sub>2</sub> atmosphere, and sulfuric rain.",
    },
    Earth: {
      left: "Venus",
      right: "Mars",
      img: earthImg,
      link: "/earth",
      color: "var(--earth)",
      title: "Earth",
      type: "Terrestrial",
      summary:
        "Earth's stark difference from other planets is that it is covered in liquid water, due to its geological activity and atmosphere, and its ability to sustain life.",
    },
    Mars: {
      left: "Earth",
      right: "Jupiter",
      img: marsPhoto,
      link: "/mars",
      color: "var(--mars)",
      title: "Mars",
      type: "Terrestrial",
      summary:
        "Mars appears bright red due to its iron oxide content. As its internal structure solidified, Mars lost its atmosphere and magnetic field, and its volcanoes became inactive.",
    },
    Jupiter: {
      left: "Mars",
      right: "Saturn",
      img: jupiterImg,
      link: "/jupiter",
      color: "var(--jupiter)",
      title: "Jupiter",
      type: "Jovian",
      summary:
        "Jupiter is the largest planet, four times Earth's size, and its famous red spot is the Jovian version of a hurricane.",
    },
    Saturn: {
      left: "Jupiter",
      right: "Uranus",
      img: saturnImg,
      link: "/saturn",
      color: "var(--saturn)",
      title: "Saturn",
      type: "Jovian",
      summary:
        "Saturn, known for its stunning rings, has the largest number of moons and a hex-shaped storm at its north pole.",
    },
    Uranus: {
      left: "Saturn",
      right: "Neptune",
      img: uranusImg,
      link: "/uranus",
      color: "var(--uranus)",
      title: "Uranus",
      type: "Neptunian",
      summary:
        "Uranus oddly orbits on its side, Uranus has a unique orbit as it rotates on its side, and its rings and moons also follow this unusual alignment.with its rings and moons following suit.",
    },
    Neptune: {
      left: "Uranus",
      right: "Mercury",
      img: neptuneImg,
      link: "/neptune",
      color: "var(--neptune)",
      title: "Neptune",
      type: "Neptunian",
      summary:
        "Neptune's atmosphere is transparent, allowing it to appear less hazy than Uranus, and its blue color results from a similar process that causes the blue of Earth's atmosphere.",
    },
  };

  var leftPlanetName = planets[currPlanet].left;
  var leftPlanet = planets[leftPlanetName];

  var rightPlanetName = planets[currPlanet].right;
  var rightPlanet = planets[rightPlanetName];

  return (
    <div className="bottom-nav-btn">
      {/* left planet */}
      <div className="left-planet">
        <Link to={leftPlanet.link} className="bottom-link">
          <div
            style={{ backgroundColor: leftPlanet.color }}
            className="circle-btn"
          >
            <i className="fa-solid fa-arrow-left-long"></i>
          </div>
          <span>{leftPlanetName}</span>
        </Link>
      </div>
      {/* right planet */}
      <div className="right-planet">
        <Link to={rightPlanet.link} className="bottom-link">
          <span>{rightPlanetName}</span>
          <div
            style={{ backgroundColor: rightPlanet.color }}
            className="circle-btn"
          >
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BottomNavBtn;

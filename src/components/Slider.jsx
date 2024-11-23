import React from "react";

import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mercuryImage from "../images/Mercury.jpg";
import venusImg from "../images/Venus.jpg";
import earthImg from "../images/Earth.jpg";
import marsPhoto from "../images/mars.jpg";
import jupiterImg from "../images/Jupiter.jpg";
import saturnImg from "../images/Saturn.jpg";
import uranusImg from "../images/Uranus.jpg";
import neptuneImg from "../images/Neptune.jpg";

import mercuryIcon from "../images/MercuryIcon.svg";
import venusIcon from "../images/VenusIcon.svg";
import earthIcon from "../images/EarthIcon.svg";
import marsIcon from "../images/MarsIcon.svg";
import jupiterIcon from "../images/JupiterIcon.svg";
import saturnIcon from "../images/SaturnIcon.svg";
import uranusIcon from "../images/UranusIcon.svg";
import neptuneIcon from "../images/NeptuneIcon.svg";

function SliderWithLinks() {
  const slides = [
    {
      img: mercuryIcon,
      link: "/mercury",
      color: "var(--mercury)",
      title: "Mercury",
      type: "Terrestrial",
      summary:
        "Mercury's gray and cratered appearance makes it look similar to the Moon. Its small size caused its internals to cool quickly, preventing any geological activity.",
    },
    {
      img: venusIcon,
      link: "/venus",
      color: "var(--venus)",
      title: "Venus",
      type: "Terrestrial",
      summary:
        "The significant greenhouse effect on Venus has resulted in a super high surface temperature, a thick CO<sub>2</sub> atmosphere, and sulfuric rain.",
    },
    {
      img: earthIcon,
      link: "/earth",
      color: "var(--earth)",
      title: "Earth",
      type: "Terrestrial",
      summary:
        "Earth's stark difference from other planets is that it is covered in liquid water, due to its geological activity and atmosphere, and its ability to sustain life.",
    },
    {
      img: marsIcon,
      link: "/mars",
      color: "var(--mars)",
      title: "Mars",
      type: "Terrestrial",
      summary:
        "Mars appears bright red due to its iron oxide content. As its internal structure solidified, Mars lost its atmosphere and magnetic field, and its volcanoes became inactive.",
    },
    {
      img: jupiterIcon,
      link: "/jupiter",
      color: "var(--jupiter)",
      title: "Jupiter",
      type: "Jovian",
      summary:
        "Jupiter is the largest planet, four times Earth's size, and its famous red spot is the Jovian version of a hurricane.",
    },
    {
      img: saturnIcon,
      link: "/saturn",
      color: "var(--saturn)",
      title: "Saturn",
      type: "Jovian",
      summary:
        "Saturn, known for its stunning rings, has the largest number of moons and a hex-shaped storm at its north pole.",
    },
    {
      img: uranusIcon,
      link: "/uranus",
      color: "var(--uranus)",
      title: "Uranus",
      type: "Neptunian",
      summary:
        "Uranus oddly orbits on its side, Uranus has a unique orbit as it rotates on its side, and its rings and moons also follow this unusual alignment.with its rings and moons following suit.",
    },
    {
      img: neptuneIcon,
      link: "/neptune",
      color: "var(--neptune)",
      title: "Neptune",
      type: "Neptunian",
      summary:
        "Neptune's atmosphere is transparent, allowing it to appear less hazy than Uranus, and its blue color results from a similar process that causes the blue of Earth's atmosphere.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 100,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div>
      <h2>Planets</h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slider">
            <div className="glass-box">
              <div
                className="img-holder-slider"
                style={{ backgroundImage: `url(${slide.img})` }}
              ></div>
              <div className="info">
                <div className="title-type">
                  <h3>{slide.title}</h3>
                  <h6 style={{ color: slide.color }}>{slide.type}</h6>
                </div>
                <p dangerouslySetInnerHTML={{ __html: slide.summary }}></p>
                <Link
                  to={slide.link}
                  className="slider-link"
                  style={{ backgroundColor: slide.color, borderColor: "#fff" }}
                >
                  Learn more
                  <i className="fa-solid fa-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderWithLinks;

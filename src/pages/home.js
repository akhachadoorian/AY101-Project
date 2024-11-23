import React, { useState, useEffect } from 'react';

import * as HomepageInfo from "./info/homepageInfo.js";

// IMAGES
import planets from "../images/Planets.svg";
import mobilePlanets from "../images/Planets-V.svg"
import frostLineGraphic from "../images/Frostline.png";
import frostTreeGraphic from "../images/FrostTree2.png";

// COMPONENTS
import PlanetComponent from "../components/PlanetComponent.jsx";
import GlassboxWIcon from "../components/GlassboxWIcon.jsx";
import TextWithImage from "../components/TextWithImage.jsx";
import ImportantInfo from "../components/ImportantInfo.jsx";
import CircleIconWHeader from "../components/CircleIconWHeader.jsx";
import GlassboxStats from "../components/GlassboxStats.jsx";
import SliderWithLinks from "../components/Slider.jsx";

function Home() {
  const [imageSrc, setImageSrc] = useState(planets);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 768) {
        setImageSrc(mobilePlanets);
      } else {
        setImageSrc(planets);
      }
    };

    updateImage(); // Set the image on initial load
    window.addEventListener('resize', updateImage);

    return () => window.removeEventListener('resize', updateImage);
  }, []);
  return (
    <div className="index">
      <div className="galaxy-header">
        <div className="galaxy">
          <h1>Solar System</h1>
          <div className="stats">
            <GlassboxStats
              title={"Contains"}
              paragraphs={HomepageInfo.milkyWayStats}
            />
          </div>
        </div>
      </div>

      <div id="planets-array">
        <img src={imageSrc} />
      </div>

      <div className="planets-slider">
        <SliderWithLinks />
      </div>

      <div className="formation-solar-system">
        <h2>Start to the Formation of the Solar System</h2>
        <div className="formation">
          {Object.values(HomepageInfo.formationParts).map(
            (component, index) => (
              <GlassboxWIcon
                key={index}
                title={component.title}
                icon={component.icon}
                paragraph={component.paragraph}
              />
            )
          )}
        </div>
      </div>

      <div className="planet-components">
        <h2>Components for Planet Building</h2>
        <div className="planet-comp" id="planet-comp">
          {Object.values(HomepageInfo.planetComponents)
            .slice(0, 4) // Limit to the first 2 items
            .map((component, index) => (
              <PlanetComponent
                key={index}
                title={component.title}
                paragraph={component.paragraph}
                relativeAbundance={component.relativeAbundance}
                icon={component.icon}
                examples={component.examples}
              />
            ))}
        </div>
      </div>

      <div className="protoplanet-formation">
        <h2>Protoplanetary Core Formation</h2>
        <TextWithImage
          paragraphs={Object.values(HomepageInfo.coreFormation)}
          image={frostLineGraphic}
          alt={"front line graphic"}
        />

        <div className="img-holder-frost">
          <img src={frostTreeGraphic} alt="frost li" />
        </div>

        <div className="frost">
          <div className="inside-frost">
            <h3>Inside the frost line</h3>
            <div className="inside">
              <div className="mult-important-info">
                <ImportantInfo
                  title={"Composition"}
                  info={HomepageInfo.frostLine.inside.composition}
                />
                <ImportantInfo
                  title={"Size"}
                  info={HomepageInfo.frostLine.inside.size}
                />
              </div>
              <p style={{ flex: "0 1 65%" }}>
                {HomepageInfo.frostLine.inside.paragraph}
              </p>
            </div>
          </div>

          <div className="outside-frost">
            <h3>Outside the frost line</h3>
            <div className="outside">
              <div className="mult-important-info">
                <ImportantInfo
                  title={"Composition"}
                  info={HomepageInfo.frostLine.outside.composition}
                />
                <ImportantInfo
                  title={"Size"}
                  info={HomepageInfo.frostLine.outside.size}
                />
              </div>
              <p style={{ flex: "0 1 65%" }}>
                {HomepageInfo.frostLine.outside.paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overview">
        <h2>Summary of the Solar System Formation</h2>
        {Object.values(HomepageInfo.overviewSteps).map((component, index) => (
          <CircleIconWHeader
            key={index}
            title={component.title}
            icon={component.number}
            color={"rgba(122, 137, 172, 0.3)"}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

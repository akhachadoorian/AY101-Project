import React from "react";
import * as HomepageInfo from "./info/homepageInfo.js";
import PlanetComponent from "../components/PlanetComponent.jsx";
import GlassboxWIcon from "../components/GlassboxWIcon.jsx";
import TextWithImage from "../components/TextWithImage.jsx";
import ImportantInfo from "../components/ImportantInfo.jsx";

import frostLineGraphic from "../images/Frostline.png";
import frostTreeGraphic from "../images/FrostTree2.png";
import CircleIconWHeader from "../components/CircleIconWHeader.jsx";
import GlassboxStats from "../components/GlassboxStats.jsx";
import SliderWithLinks from "../components/Slider.jsx";

function Home() {
    var t = ["the Sun, eight planets, five dwarf planets, nearly 300 known moons, and a host of smaller objects"]
  return (
    <div className="index">
      <div className="galaxy-header">
        <div className="galaxy">
          <h1>Solar System</h1>
          <div className="stats">
            {/* {Object.values(HomepageInfo.milkyWayStats).map((component, index) => (
                <GlassboxStats 
                    key={index}
                    title={component.paragraph}
                />
            ))} */}
            <GlassboxStats 
                title={"Contains"}
                paragraphs={HomepageInfo.milkyWayStats}
            />
          </div>
        </div>
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

        {/* <div className="planet-comp">
          {Object.values(HomepageInfo.planetComponents)
            .slice(2, 4) // Limit to the first 2 items
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
          </div> */}
      </div>

      <div className="protoplanet-formation">
        <h2>Protoplanetary Core Formation</h2>
        <TextWithImage
          paragraphs={Object.values(HomepageInfo.coreFormation)}
          image={frostLineGraphic}
          alt={"front line graphic"}
        />
        <div className="img-holder">
          <img src={frostTreeGraphic} alt="frost li" />
        </div>
        <div className="frost">
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

        <div className="frost-table">
          {/* <div className='f-table'>
                <div></div>
            </div> */}

          {/* <table className="frost-table">
                <thead>
                    <tr className='top'>
                        <td></td>
                        <td>Inside Frost Line</td>
                        <td colSpan={2}>Outside Frost Line</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Terrestrial Planets</td>
                        <td>Neptunian Planets</td>
                        <td>Jovian Planets</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='type'>Composition</td>
                        <td>Rock & Metal</td>
                        <td>Hydrogen compounds around a rock and metal core.</td>
                        <td>Hydrogen and helium cournd a hydrogen compound, rock, and metal core.</td>
                    </tr>
                    <tr>
                        <td className='type'>Core Size</td>
                        <td>&lt; 2 Earth Masses</td>
                        <td>&gt; 2 Earth Masses</td>
                        <td>&gt; 2 Earth Masses</td>
                    </tr>
                    <tr>
                        <td className='type'>Envelope Size</td>
                        <td>-</td>
                        <td>&lt; 100 Earth Masses</td>
                        <td>&gt; 100 Earth Masses</td>
                    </tr>
                </tbody>
            </table> */}
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

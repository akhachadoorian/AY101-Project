import React from 'react';
import "../css/mars.css"
import * as MarsInfo from "./info/marsInfo.js";
// <!-- https://science.nasa.gov/mars/facts/ -->
// <!-- https://www.publicdomainpictures.net/en/free-download.php?image=mars&id=86459 -->

import PlanetHeader from '../components/PlanetHeader.jsx';

import marsStructure from "../images/MarsStructure.svg";
import marsImg from "../images/mars.jpg"
import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';
import BottomNavBtn from '../components/BottomNavBtn.jsx';

function Mars() {
    return (
        <div className="mars">
            <PlanetHeader 
                planetName={"Mars"}
                typeOfPlanet={"Terrestrial"}
                image={marsImg}
                stats={Object.values(MarsInfo.stats)}
            />

            <CompStructSize 
                structureImg={marsStructure}
                composition={Object.values(MarsInfo.comp)}
                size={Object.values(MarsInfo.size)}
                planetSize={"Medium"}
                color={"var(--mars"}
            />

            <GeologicalActivity 
                geological={Object.values(MarsInfo.geological)}
                summaryText={"In summary, the planet previously had volcanoes, plate tectonics, and a magnetic field. The cooling of the internals of the planet resulted in the lose of these items."}
                color={"var(--mars)"}
            />

            <BottomNavBtn currPlanet={"Mars"} />

        </div>
    )

}

export default Mars
import React from 'react';
import "../css/earth.css"
import * as EarthInfo from './info/earthInfo.js'
import PlanetHeader from '../components/PlanetHeader.jsx';
import earthImg from '../images/Earth.jpg'
import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';

function Earth() {
    var planetColor = "var(--earth)";

    return (
        <div className='earth'>
            <PlanetHeader 
                planetName={"Earth"}
                typeOfPlanet={"Terrestrial"}
                image={earthImg}
                stats={Object.values(EarthInfo.stats)}
            />

            <CompStructSize 
                composition={Object.values(EarthInfo.comp)}
                size={Object.values(EarthInfo.size)}
                planetSize={"Large"}
                color={planetColor}
            />

            <GeologicalActivity 
                geological={Object.values(EarthInfo.geological)}
                // summaryText={""}
                color={planetColor}
            />
        </div>
    )
}

export default Earth
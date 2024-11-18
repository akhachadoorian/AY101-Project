import React from 'react';
import "../css/saturn.css"
import * as SaturnInfo from './info/saturnInfo.js'
import PlanetHeader from '../components/PlanetHeader.jsx';
import saturnImg from '../images/Saturn.jpg'
import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';

function Saturn() {
    var planetColor = "var(--saturn)";

    return (
        <div className='saturn'>
            <PlanetHeader 
                planetName={"Saturn"}
                typeOfPlanet={"Jovian"}
                image={saturnImg}
                stats={Object.values(SaturnInfo.stats)}
            />

            <CompStructSize 
                composition={Object.values(SaturnInfo.comp)}
                size={Object.values(SaturnInfo.size)}
                planetSize={"Humongous"}
                color={planetColor}
            />

            <GeologicalActivity 
                geological={Object.values(SaturnInfo.geological)}
                // summaryText={""}
                color={planetColor}
            />
        </div>
    )
}

export default Saturn
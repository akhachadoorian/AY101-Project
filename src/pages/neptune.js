import React from 'react';
import "../css/neptune.css"
import * as NeptuneInfo from './info/neptuneInfo.js';
import PlanetHeader from '../components/PlanetHeader.jsx';
import neptuneImg from '../images/Neptune.jpg'
import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';

function Neptune() {
    var planetColor = "var(--neptune)";

    return (
        <div className='neptune'>
            <PlanetHeader 
                planetName={"Neptune"}
                typeOfPlanet={"Neptunian"}
                image={neptuneImg}
                stats={Object.values(NeptuneInfo.stats)}
            />

            <CompStructSize 
                composition={Object.values(NeptuneInfo.comp)}
                size={Object.values(NeptuneInfo.size)}
                planetSize={"Huge"}
                color={planetColor}
            />

            <GeologicalActivity 
                geological={Object.values(NeptuneInfo.geological)}
                // summaryText={""}
                color={planetColor}
            />
        </div>
    )
}

export default Neptune
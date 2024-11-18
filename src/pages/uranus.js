import React from 'react';
import "../css/uranus.css"
import * as UranusInfo from './info/uranusInfo.js'
import PlanetHeader from '../components/PlanetHeader.jsx';
import uranusImg from '../images/Uranus.jpg'
import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';

function Uranus() {
    var planetColor = "var(--saturn)";

    return (
        <div className='uranus'>
            <PlanetHeader 
                planetName={"Uranus"}
                typeOfPlanet={"Neptunian"}
                image={uranusImg}
                stats={Object.values(UranusInfo.stats)}
            />

            <CompStructSize 
                composition={Object.values(UranusInfo.comp)}
                size={Object.values(UranusInfo.size)}
                planetSize={"Huge"}
                color={planetColor}
            />

            <GeologicalActivity 
                geological={Object.values(UranusInfo.geological)}
                // summaryText={""}
                color={planetColor}
            />
        </div>
    )
}

export default Uranus
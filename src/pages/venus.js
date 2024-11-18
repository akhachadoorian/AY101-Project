import React from 'react';
import "../css/venus.css"
import * as VenusInfo from './info/venusInfo.js'
import PlanetHeader from '../components/PlanetHeader.jsx';
import venusImg from '../images/Venus.jpg'
import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';

function Venus() {
    var planetColor = "var(--venus)";

    return (
        <div className='venus'>
            <PlanetHeader 
                planetName={"Venus"}
                typeOfPlanet={"Terrestrial"}
                image={venusImg}
                stats={Object.values(VenusInfo.stats)}
            />

            <CompStructSize 
                composition={Object.values(VenusInfo.comp)}
                size={Object.values(VenusInfo.size)}
                planetSize={"Large"}
                color={planetColor}
            />

            <GeologicalActivity 
                geological={Object.values(VenusInfo.geological)}
                // summaryText={""}
                color={planetColor}
            />
        </div>
    )
}

export default Venus
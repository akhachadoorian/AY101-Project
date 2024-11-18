import React from 'react';
import "../css/mercury.css"
import * as MercuryInfo from './info/mercuryInfo.js'
import PlanetHeader from '../components/PlanetHeader.jsx';

import mercuryImage from '../images/Mercury.jpg';
import mercuryStructure from '../images/MercuryStructure.svg'

import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';

function Mercury() {
    var planetColor = "var(--mercury)";

    return (
        <div className='mercury'>
            <PlanetHeader 
                planetName={"Mercury"}
                typeOfPlanet={"Terrestrial"}
                image={mercuryImage}
                stats={Object.values(MercuryInfo.stats)}
            />

            <CompStructSize 
                composition={Object.values(MercuryInfo.comp)}
                size={Object.values(MercuryInfo.size)}
                structureImg={mercuryStructure}
                planetSize={"Small"}
                color={planetColor}
            />

            <GeologicalActivity 
                geological={Object.values(MercuryInfo.geological)}
                // summaryText={""}
                color={planetColor}
            />
        </div>


    )


}

export default Mercury
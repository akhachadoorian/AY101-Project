import React from 'react';
import "../css/venus.css"
import * as VenusInfo from './info/venusInfo.js'
import PlanetHeader from '../components/PlanetHeader.jsx';

import venusImg from '../images/Venus.jpg'
import venusStructure from '../images/VenusStructure.svg'

import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';
import Differentiation from '../components/Differentation.jsx';
import BottomNavBtn from '../components/BottomNavBtn.jsx';

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
                // composition={Object.values(VenusInfo.comp)}
                size={Object.values(VenusInfo.size)}
                // surface={Object.values(VenusInfo.surface)}
                // structure={Object.values(VenusInfo.structure)}
                structureImg={venusStructure}
                planetSize={"Large"}
                color={'venus'}
                planetType={"Terrestrial"}
            />

            <Differentiation 
                color={planetColor}
            />

            <GeologicalActivity 
                geological={Object.values(VenusInfo.geological)}
                // summaryText={""}
                color={planetColor}
            />

            <BottomNavBtn 
                currPlanet={"Venus"}
            />
        </div>
    )
}

export default Venus
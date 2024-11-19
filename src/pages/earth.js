import React from 'react';
import "../css/earth.css"
import * as EarthInfo from './info/earthInfo.js'
import PlanetHeader from '../components/PlanetHeader.jsx';

import earthImg from '../images/Earth.jpg'
import earthStructure from '../images/EarthStructure.svg'

import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';
import Differentiation from '../components/Differentation.jsx';
import BottomNavBtn from '../components/BottomNavBtn.jsx';

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
                // composition={Object.values(EarthInfo.comp)}
                size={Object.values(EarthInfo.size)}
                // structure={Object.values(EarthInfo.size)}
                // surface={Object.values(EarthInfo.size)}
                structureImg={earthStructure}
                planetSize={"Large"}
                color={'earth'}
                planetType={"Terrestrial"}
            />

            <Differentiation 
                color={planetColor}
            />

            <GeologicalActivity 
                geological={Object.values(EarthInfo.geological)}
                // summaryText={""}
                color={planetColor}
            />

            <BottomNavBtn 
                currPlanet={"Earth"}
            />
        </div>
    )
}

export default Earth
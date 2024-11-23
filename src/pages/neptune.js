import React from 'react';
import "../css/neptune.css"
import * as NeptuneInfo from './info/neptuneInfo.js';
import PlanetHeader from '../components/PlanetHeader.jsx';
import neptuneImg from '../images/Neptune.jpg'
import neptuneStruct from '../images/NeptuneStructure.svg'
import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';
import BottomNavBtn from '../components/BottomNavBtn.jsx';
import Moons from '../components/Moons.jsx';

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
                surface={Object.values(NeptuneInfo.surface)}
                structure={Object.values(NeptuneInfo.structure)}
                size={Object.values(NeptuneInfo.size)}
                planetType={'neptunian'}
                planetSize={"Huge"}
                structureImg={neptuneStruct}
                color={'neptune'}
            />

            <GeologicalActivity 
                geological={Object.values(NeptuneInfo.geological)}
                // summaryText={""}
                color={planetColor}
            />

            <Moons 
                color={"neptune"}
            />

            <BottomNavBtn 
                currPlanet={"Neptune"}
            />
        </div>
    )
}

export default Neptune
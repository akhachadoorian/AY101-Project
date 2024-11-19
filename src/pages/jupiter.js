import React from 'react';
import "../css/jupiter.css"
import * as JupiterInfo from './info/jupiterInfo.js'
import PlanetHeader from '../components/PlanetHeader.jsx';
import jupiterImg from '../images/Jupiter.jpg'
import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';
import BottomNavBtn from '../components/BottomNavBtn.jsx';

function Jupiter() {
    var planetColor = "var(--jupiter)";

    return (
        <div className='jupiter'>
            <PlanetHeader 
                planetName={"Jupiter"}
                typeOfPlanet={"Jovian"}
                image={jupiterImg}
                stats={Object.values(JupiterInfo.stats)}
            />

            <CompStructSize 
                composition={Object.values(JupiterInfo.comp)}
                size={Object.values(JupiterInfo.size)}
                planetSize={"Humongous"}
                color={planetColor}
            />

            <GeologicalActivity 
                geological={Object.values(JupiterInfo.geological)}
                // summaryText={""}
                color={planetColor}
            />

            <BottomNavBtn 
                currPlanet={"Jupiter"}
            />
        </div>
    )
}

export default Jupiter
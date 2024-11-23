import React from 'react';
import "../css/uranus.css"
import * as UranusInfo from './info/uranusInfo.js'
import PlanetHeader from '../components/PlanetHeader.jsx';
import uranusImg from '../images/Uranus.jpg'
import uranusStruct from '../images/UranusStructure.svg'
import aroundSun from '../images/UranusAroundSun.svg'
import uranusGraph from '../images/UranusGraph.svg'
import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';
import BottomNavBtn from '../components/BottomNavBtn.jsx';
import Moons from '../components/Moons.jsx';

function Uranus() {
    var planetColor = "var(--uranus)";

    return (
        <div className='uranus'>
            <PlanetHeader 
                planetName={"Uranus"}
                typeOfPlanet={"Neptunian"}
                image={uranusImg}
                stats={Object.values(UranusInfo.stats)}
            />

            <CompStructSize 
                // composition={Object.values(UranusInfo.comp)}
                size={Object.values(UranusInfo.size)}
                // structure={Object.values(UranusInfo.structure)}
                surface={Object.values(UranusInfo.surface)}
                structureImg={uranusStruct}
                planetType={'neptunian'}
                planetSize={"Huge"}
                color={'uranus'}
            />

            <GeologicalActivity 
                geological={Object.values(UranusInfo.geological)}
                // summaryText={""}
                color={planetColor}
            />

            <section>
                <h2>Planet Rotation</h2>
                <p dangerouslySetInnerHTML={{ __html: UranusInfo.rotation.p1 }}></p>
                
                <div className='flex-box sunlight'>
                    <img src={aroundSun} alt='Graphic showing which poles get sun for Uranus' class='around' />
                    <div className='glass-box'>
                        <p dangerouslySetInnerHTML={{ __html: UranusInfo.rotation.p2 }}></p>
                    </div>
                </div>
            </section>

            <Moons 
                color={"uranus"}
            />

            <BottomNavBtn 
                currPlanet={"Uranus"}
            />
        </div>
    )
}

export default Uranus
import React from 'react';
import "../css/saturn.css"
import * as SaturnInfo from './info/saturnInfo.js'
import PlanetHeader from '../components/PlanetHeader.jsx';
import saturnImg from '../images/Saturn.jpg'
import enceladusImg from '../images/Enceladus.jpg'
import saturnStruct from '../images/SaturnStructure.svg'
import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';
import BottomNavBtn from '../components/BottomNavBtn.jsx';
import Moons from '../components/Moons.jsx';
import TidalHeading from '../components/TidalHeading.jsx';

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
                // composition={Object.values(SaturnInfo.comp)}
                size={Object.values(SaturnInfo.size)}
                structure={Object.values(SaturnInfo.structure)}
                surface={Object.values(SaturnInfo.surface)}
                structureImg={saturnStruct}
                planetSize={"Humongous"}
                color={'saturn'}
                planetType={"jovian"}
            />

            <GeologicalActivity 
                geological={Object.values(SaturnInfo.geological)}
                // summaryText={""}
                color={planetColor}
            />

            <Moons
                color={"saturn"}
            />

            <section className='flex-box' id='enceladus'>
                <div className='io-content'>
                    <h2>{SaturnInfo.moons.enceladus.name}</h2>
                    <p>{SaturnInfo.moons.enceladus.p}</p>
                    <div className='icon-head'>
                        <i className="fa-solid fa-volcano"></i>
                        <i className="fa-solid fa-house-crack"></i>
                        <h4>Geological Activity</h4>
                    </div>
                    <p>{SaturnInfo.moons.enceladus.geo}</p>
                    <TidalHeading 
                        color={"var(--saturnMedium)"}
                    />
                </div>
                    <img src={enceladusImg} alt='Moon of Saturn called Enceladus' />
            </section>

            

            <BottomNavBtn 
                currPlanet={"Saturn"}
            />
        </div>
    )
}

export default Saturn
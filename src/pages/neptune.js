import React from 'react';
import "../css/neptune.css"
import * as NeptuneInfo from './info/neptuneInfo.js';
import PlanetHeader from '../components/PlanetHeader.jsx';
import neptuneImg from '../images/Neptune.jpg'
import titonImg from '../images/Titon.jpg'
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

            <section id='winds' className='glass-box'>
                <div className='icon-head'>
                    <i className="fa-solid fa-wind"></i>
                    <h2>Neptune's Winds</h2>
                </div>
                
                <p><strong>Neptune has the fastest wind within the planets in the solar system.</strong> Its winds can reach 1,200 miles per hour compared to Earth's winds, which can reach only 250 miles per hour (<em>Neptune Facts</em>). At its equator, Neptune's winds can reach supersonic speeds (Frank et al.). </p>
            </section>

            <Moons 
                color={"neptune"}
            />

            <section className='flex-box' id='triton'>
                <div className='io-content'>
                    <h2>{NeptuneInfo.moons.triton.name}</h2>
                    <p dangerouslySetInnerHTML={{ __html: NeptuneInfo.moons.triton.p }}></p>
                    {/* <div className='icon-head'>
                        <i className="fa-solid fa-volcano"></i>
                        <i className="fa-solid fa-house-crack"></i>
                        <h4>Geological Activity</h4>
                    </div>
                    <p>{NeptuneInfo.moons.triton.geo}</p> */}
                </div>
                    <img src={titonImg} alt='Moon of  called ' />
            </section>

            <BottomNavBtn 
                currPlanet={"Neptune"}
            />
        </div>
    )
}

export default Neptune
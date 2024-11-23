import React from 'react';
import "../css/jupiter.css"
import * as JupiterInfo from './info/jupiterInfo.js'
import PlanetHeader from '../components/PlanetHeader.jsx';

import jupiterImg from '../images/Jupiter.jpg'
import jupiterStuct from '../images/JupiterStructure.svg'
import ioImg from '../images/IO.jpg'
import europaImg from '../images/Europa.jpg'
import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';
import BottomNavBtn from '../components/BottomNavBtn.jsx';
import Moons from '../components/Moons.jsx';
import TidalHeading from '../components/TidalHeading.jsx';

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
                // composition={Object.values(JupiterInfo.comp)}
                structure={Object.values(JupiterInfo.structure)}
                surface={Object.values(JupiterInfo.surface)}
                size={Object.values(JupiterInfo.size)}
                planetSize={"Humongous"}
                color={'jupiter'}
                structureImg={jupiterStuct}
                planetType={"Jovian"}
            />

            <GeologicalActivity 
                geological={Object.values(JupiterInfo.geological)}
                // summaryText={""}
                color={planetColor}
            />

            <Moons 
                color={"jupiter"}
            />

            <section className='flex-box' id='io'>
                <div className='io-content'>
                    <h2>{JupiterInfo.moons.io.name}</h2>
                    <p>{JupiterInfo.moons.io.p}</p>
                    <div className='icon-head'>
                        <i className="fa-solid fa-volcano"></i>
                        <i className="fa-solid fa-house-crack"></i>
                        <h4>Geological Activity</h4>
                    </div>
                    <p>{JupiterInfo.moons.io.geo}</p>
                    <TidalHeading 
                        color={"var(--jupiterDark"}
                    />
                </div>
                    <img src={ioImg} alt='Moon of Jupiter called IO' />
            </section>

            <section className='flex-box' id='europa'>
                <img src={europaImg} alt='Moon of Jupiter called Europa' />
                <div className='io-content'>
                    <h2>{JupiterInfo.moons.europa.name}</h2>
                    <p>{JupiterInfo.moons.europa.p}</p>
                    <div className='icon-head'>
                        <i className="fa-solid fa-volcano"></i>
                        <i className="fa-solid fa-house-crack"></i>
                        <h4>Geological Activity</h4>
                    </div>
                    <p>{JupiterInfo.moons.europa.geo}</p>
                    <TidalHeading 
                        color={"var(--jupiterDark"}
                    />
                </div>
                    
            </section>

            <BottomNavBtn 
                currPlanet={"Jupiter"}
            />
        </div>
    )
}

export default Jupiter
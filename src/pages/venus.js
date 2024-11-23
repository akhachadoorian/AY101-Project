import React from 'react';
import "../css/venus.css"
import * as VenusInfo from './info/venusInfo.js'

// IMAGES
import venusImg from '../images/Venus.jpg'
import venusStructure from '../images/VenusStructure.svg'
import greenhouseGraphic from '../images/Greenhouse Gases.svg'

// COMPONENTS
import CompStructSize from '../components/CompStructSize.jsx';
import GeologicalActivity from '../components/GeologicalActivity.jsx';
import Differentiation from '../components/Differentation.jsx';
import BottomNavBtn from '../components/BottomNavBtn.jsx';
import ReturnHomeBtn from '../components/ReturnHomeBtn.jsx';
import PlanetHeader from '../components/PlanetHeader.jsx';


function Venus() {
    var planetColor = "var(--venus)";

    return (
        <div className='venus'>
            <ReturnHomeBtn />

            <PlanetHeader 
                planetName={"Venus"}
                typeOfPlanet={"Terrestrial"}
                image={venusImg}
                stats={Object.values(VenusInfo.stats)}
            />

            <CompStructSize 
                size={Object.values(VenusInfo.size)}
                surface={Object.values(VenusInfo.surface)}
                structure={Object.values(VenusInfo.structure)}
                structureImg={venusStructure}
                planetSize={"Large"}
                color={'venus'}
                planetType={"Terrestrial"}
            />

            <Differentiation 
                color={planetColor}
            />

            <section>
                <h2>Greenhouse Effect & Venus </h2>
                <div className='greenhouse'>
                    <div className='greenhouse-inner'>
                        <p>When planets are heated by solar radiation emitted by the sun, they attempt to cool themselves off by emitting infrared light. The emission of such light causes the planet to appear as if it is glowing. In some cases, the infrared light is unable to escape the atmosphere, causing the heat to be trapped within the planet; this is called the greenhouse effect. The absorption of the infrared radiation causes the planet's temperature to increase.</p>

                        <p>If the planet's atmosphere contains more greenhouse gases than other gases, its surface temperature will rise.</p>

                        <p>Venus is <strong>significantly</strong> affected by this greenhouse effect. The planet's surface temperature causes any liquid water on the surface to boil, therefore becoming water vapor. This additional water vapor in the planet's atmosphere causes an even larger greenhouse effect, causing the surface temperature to increase even more.</p>
                    </div>
                    <div className='glass-box'>
                        <h4> What is A Greenhouse Gas?</h4>
                        <p>A gas that allows infrared radiation to pass through but does not allow visible light to escape.</p>
                        <p><strong>Examples:</strong>Water Vapor, Carbon Dioxide (CO<sub>2</sub>), and Methane</p>
                    </div>
                </div>
                <img src={greenhouseGraphic} alt={"Greenhouse effect graphic"}/>
                
            </section>

            <GeologicalActivity 
                geological={Object.values(VenusInfo.geological)}
                color={planetColor}
            />

            <BottomNavBtn 
                currPlanet={"Venus"}
            />
        </div>
    )
}

export default Venus
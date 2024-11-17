import React from 'react';
import "../mars.css"
import GlassboxStats from "../components/GlassboxStats.jsx";

import * as MarsInfo from "./info/marsInfo.js";
import TextWithImage from '../components/TextWithImage.jsx';
import GlassboxWIcon from '../components/GlassboxWIcon.jsx';

import marsStructure from "../images/MarsStructure.svg";

function Mars() {
    return (
        <div className="mars">
            <div className="planet-header">
                <h1>Mars</h1>
            </div>

            <div className="img-holder mars">
                <div className='stats'>
                    <div className="appear-wrapper">
                        <div className="glass-box appear" id="type">
                            <h3>Terrestrial Planet</h3>
                        </div>
                    </div>
                    {Object.values(MarsInfo.stats).map((component, index) => (
                        <div className="appear-wrapper" key={index}>
                            <GlassboxStats 
                                title={component.title}
                                paragraphs={component.stat}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="comp">
                <h2>Composition, Structure, & Size</h2>
                {/* <TextWithImage 
                    mediaSide='left'
                    title='Composition'
                    paragraphs={Object.values(MarsInfo.comp)}
                /> */}
                <div className="text-w-image comp">
                    <img src={marsStructure} alt={"Graphic of Mar's internal structure"} />
                    {/* <div className="filler"></div> */}
                    <div className="text">
                        <div className='sub-text'>
                            <h3>Composition</h3>
                            {Object.values(MarsInfo.comp).map((p, index) => (
                                <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
                            ))}
                        </div>
                        <div className='sub-text'>
                            <h3>Size: <strong>Medium</strong></h3>
                                {Object.values(MarsInfo.size).map((p, index) => (
                                    <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
                                ))}
                        </div>
                    </div>
                    
                </div>
                {/* <div className="composition mars">
                    <div className="filler"></div>
                    <div className="glass-box">
                        <h3>Composition</h3>
                        <p></p>
                    </div>
                </div> */}
            </div>

            <div className="geo">
                <h2>Geological Activity</h2>
                <div className="geological">
                    {Object.values(MarsInfo.geological).map((component, index) => (
                        <GlassboxWIcon 
                            key={index}
                            title={component.title}
                            icon={component.icon}
                            paragraph={component.paragraphs}
                            color="var(--mars)"
                        />    
                    ))}


                    {/* <div className="glass-box">
                        <div className="horizontal">
                            <i className="ph ph-triangle"></i>
                            <h4>Volcanoes</h4>
                        </div>
                        <p>Mars only has a few active volcanoes due to the planet's  internals being significantly cooled compared to when it was first created.</p>
                        <p>Before such transformation, the planet had the largest active volcano in our solar system.</p>
                    </div>
                    <div className="glass-box">
                        <div className="horizontal">
                            <i className="ph ph-arrows-in-line-vertical"></i>
                            <h4>Plate Tectonics</h4>
                        </div>
                        <p>Since there are only a few craters on the surface, the planet must have previously  had plate tectonics to smooth the surface.</p>
                        <div>
                            <h6>Amount of Craters:</h6>
                            <p>Mercury  Mars  Earth == Venus</p>
                            <p>As you move left to right, the number of craters decreases and the radius of the planet increases.</p>
                        </div>
                    </div>
                    <div className="glass-box">
                        <div className="horizontal">
                            <i className="ph ph-magnet"></i>
                            <h4>Magnetic Field</h4>

                        </div>
                    </div> */}
                </div>
                <div className="summary-text">
                    <p>In summary, the planet previously had volcanoes, plate tectonics, and a magnetic field. The cooling of the internals of the planet resulted in the lose of these items.</p>
                </div>
            </div>

            {/* <div>
                <h2>Water</h2>
            </div> */}
{/* 
            <div>
                <h2>Other Interesting Information</h2>
            </div> */}

            {/* <div className="nav">
                <a href="">
                    <i className="ph ph-arrow-left"></i>
                    <span>Earth</span>
                </a>
            </div> */}
        </div>
    )

}

export default Mars
import React from 'react';

function Mars() {
    return (
        <div class="mars">
            <div class="planet-header">
                <h1>Mars</h1>
            </div>

            <div class="img-holder mars">
                <div class="appear-wrapper">
                    <div class="glass-box appear" id="type">
                        <h3>Terrestrial Planet</h3>
                    </div>
                </div>
                <div class="appear-wrapper">
                    <div class="glass-box appear" id="radius">
                        <h3>Radius</h3>
                        <p>2,106 miles</p>
                        <p>3,390 kilometers</p>
                    </div>
                </div>
                <div class="appear-wrapper">
                    <div class="glass-box appear" id="distance-from-sun">
                        <h3>Distance from Sun</h3>
                        <p>142 million miles</p>
                        <p>228 million kilometers</p>
                        <p>1.5 astronomical</p>
                    </div>
                </div>
            </div>

            <div class="comp">
                <h2>Composition and Structure</h2>
                <div class="composition mars">
                    <div class="filler"></div>
                    <div class="glass-box">
                        <h3>Composition</h3>
                        <p>The planet has a red color due to iron oxides (rust).</p>
                    </div>
                </div>
            </div>

            <div class="geo">
                <h2>Geological Activity</h2>
                <div class="geological">
                    <div class="glass-box">
                        <div class="horizontal">
                            <i class="ph ph-triangle"></i>
                            <h4>Volcanoes</h4>
                        </div>
                        <p>Mars only has a few active volcanoes due to the planet's  internals being significantly cooled compared to when it was first created.</p>
                        <p>Before such transformation, the planet had the largest active volcano in our solar system.</p>
                    </div>
                    <div class="glass-box">
                        <div class="horizontal">
                            <i class="ph ph-arrows-in-line-vertical"></i>
                            <h4>Plate Tectonics</h4>
                        </div>
                        <p>Since there are only a few craters on the surface, the planet must have previously  had plate tectonics to smooth the surface.</p>
                        <div>
                            <h6>Amount of Craters:</h6>
                            <p>Mercury  Mars  Earth == Venus</p>
                            <p>As you move left to right, the number of craters decreases and the radius of the planet increases.</p>
                        </div>
                    </div>
                    <div class="glass-box">
                        <div class="horizontal">
                            <i class="ph ph-magnet"></i>
                            <h4>Magnetic Field</h4>

                        </div>
                    </div>
                </div>
                <div class="summary-text">
                    <p>In summary, the planet previously had volcanoes, plate tectonics, and a magnetic field. The cooling of the internals of the planet resulted in the lose of these items.</p>
                </div>
            </div>

            <div>
                <h2>Water</h2>
            </div>

            <div>
                <h2>Other Interesting Information</h2>
            </div>

            <div class="nav">
                <a href="">
                    <i class="ph ph-arrow-left"></i>
                    <span>Earth</span>
                </a>
            </div>
        </div>
    )

}

export default Mars
import React, { useState, useRef } from 'react';

function TidalHeading({ color }) {
    const [isOpen, setIsOpen] = useState(false); 
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const style = {
        backgroundColor: color
    };

    return (
        <div className='tidal-heating'>
            <div className='th-inner' style={style}>
                <div className="th-header" onClick={toggleAccordion} style={{ cursor: 'pointer', marginBottom: isOpen ? "40px" : '0px' }}>
                    <h5 style={{color: "#fff"}}>
                        Learn more about Tidal Heating
                    </h5>
                    <i className={`fa-solid fa-chevron-up chevron ${isOpen ? 'rotated' : ''}`}></i>
                </div>
                <div
                    className="th-content"
                    style={{
                        maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                    }}
                    ref={contentRef}
                >
                    <p>
                    The very elliptical orbits of these outer solar system moons increase the strength of tidal forces the moon faces when near its planet. These tidal forces cause the moon to constantly reshape due to squishing, heating the inside of the moon. For example, when a moon is closer to Jupiter or Saturn, the tidal forces on the moon are more powerful, grinding the interior rocks together until they become molten.
                    </p>
                </div>
                
            </div>
        </div>
    )

}

export default TidalHeading
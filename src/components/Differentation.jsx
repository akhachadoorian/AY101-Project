import React, { useState, useRef } from 'react';

function Differentiation({ color }) {
    const [isOpen, setIsOpen] = useState(false); 
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const style = {
        backgroundColor: color
    };

    return (
        <div className='differentiation'>
            <div className='diff-inner' style={style}>
                <div className="diff-header" onClick={toggleAccordion} style={{ cursor: 'pointer', marginBottom: isOpen ? "40px" : '0px' }}>
                    <h3 style={{color: "#fff"}}>
                        Learn more about differentiation
                    </h3>
                    <i className={`fa-solid fa-chevron-up chevron ${isOpen ? 'rotated' : ''}`}></i>
                </div>
                <div
                    className="diff-content"
                    style={{
                        maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease'
                    }}
                    ref={contentRef}
                >
                    <p>
                        Differentiation is a geological process that occurs when heavy materials, such as rock and metal, migrate toward a planet's core. This sinking of denser substances is possible only if the planet is molten during its early formation. Interestingly, smaller planets cool at a faster rate compared to larger ones. This is due to their higher amount of surface area, resulting in a more rapid heat loss. Consequently, smaller planets may solidify quicker, affecting their internal structure and planetary characteristics.
                    </p>
                </div>
                
            </div>
        </div>
    )

}

export default Differentiation
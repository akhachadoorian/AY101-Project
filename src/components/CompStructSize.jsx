import React from 'react';
import defaultStructure from "../images/MarsStructure.svg";

function CompStructSize({ structureImg = defaultStructure, composition, structure, size, planetSize, color }) {
    const strongStyle = {
        color: color
    }

    return (
        <div className="comp">
            <h2>Composition, Structure, & Size</h2>
            <div className="text-w-image comp">
                <img src={structureImg} alt={"Graphic of planet's internal structure"} />
                <div className="text">
                    {composition && 
                        <div className='sub-text'>
                            <h3>Composition</h3>
                            {composition.map((p, index) => (
                                <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
                            ))}
                        </div>
                    }
                    { structure && 
                        <div className='sub-text'>
                            <h3>Structure</h3>
                                {structure.map((p, index) => (
                                    <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
                                ))}
                        </div>
                    }
                    { size && 
                        <div className='sub-text'>
                            <h3>Size: <strong style={strongStyle}>{planetSize}</strong></h3>
                                {size.map((p, index) => (
                                    <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
                                ))}
                        </div>
                    }
                </div>
                
            </div>

        </div>
    )

}

export default CompStructSize
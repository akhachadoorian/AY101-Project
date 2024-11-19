import React from 'react';
import defaultStructure from "../images/MarsStructure.svg";

function CompStructSize({ structureImg = defaultStructure, planetType, structure, composition, surface, size, planetSize, color }) {
    const mainColor = `var(--${color})`;
    const lightColor = `var(--${color}Light)`;
    const mediumColor = `var(--${color}Medium)`;
    const mediumColor2 = `var(--${color}Medium2)`;
    const darkColor = `var(--${color}Dark)`;
    

    return (
        <div className="comp">
            <h2>Composition, Structure, Surface, & Size</h2>
            <div className="text-w-image comp">
                <div className='structure'>
                    <img src={structureImg} alt={"Graphic of planet's internal structure"} style={{marginBottom: "40px"}}/>
                    {planetType == "Terrestrial" ?
                        <div className='glass-box' style={{maxWidth: "80%"}}>
                            <p><strong style={{color: lightColor}}>Metal core:</strong> Highest density</p>
                            <p><strong style={{color: mediumColor}}>Mantle:</strong> Medium density</p>
                            <p><strong style={{color: mainColor}}>Rocky Crust:</strong> Lower density</p>
                            <p><strong style={{color: darkColor}}>Rigid Lithosphere:</strong> Crust and part of the mantle</p>
                        </div>
                        :
                        planetType == "Jovian" ?
                            <div className='glass-box' style={{maxWidth: "80%"}}>
                                <p><strong style={{color: lightColor}}>Core of rock, metals, and hydrogen compounds</strong></p>
                                <p><strong style={{color: mediumColor}}>Mantle:</strong></p>
                                <p><strong style={{color: mainColor}}>Rocky Crust:</strong></p>
                                <p><strong style={{color: darkColor}}>Rigid Lithosphere:</strong></p>
                            </div>
                            :
                            <div className='glass-box' style={{maxWidth: "80%"}}>
                                <p><strong style={{color: lightColor}}>Metal core:</strong></p>
                                <p><strong style={{color: mediumColor}}>Mantle:</strong></p>
                                <p><strong style={{color: mainColor}}>Rocky Crust:</strong></p>
                                <p><strong style={{color: darkColor}}>Rigid Lithosphere:</strong></p>
                            </div>
                    }
                </div>
                
                <div className="text">
                    {structure && 
                        <div className='sub-text'>
                            <h3>Structure</h3>
                            {structure.map((p, index) => (
                                <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
                            ))}
                            {(composition || surface || size) && <div className='line'></div>}
                        </div>
                    }
                    {composition && 
                        <div className='sub-text'>
                            <h3>Composition</h3>
                            {composition.map((p, index) => (
                                <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
                            ))}
                            {(surface || size) && <div className='line'></div>}
                        </div>
                    }
                    { surface && 
                        <div className='sub-text'>
                            <h3>Surface</h3>
                                {surface.map((p, index) => (
                                    <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
                                ))}
                                {(size) && <div className='line'></div>}
                        </div>
                    }
                    { size && 
                        <div className='sub-text'>
                            <h3>Size: <strong>{planetSize}</strong></h3>
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
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
                                <p><strong style={{color: lightColor}}>Core of Rock, Metals, and Hydrogen Compounds</strong></p>
                                <p><strong style={{color: mainColor}}>Metallic Hydrogen</strong></p>
                                <p><strong style={{color: mediumColor}}>Liquid Hydrogen</strong></p>
                                <p><strong style={{color: mediumColor2}}>Gaseous Hydrogen</strong></p>
                                <p><strong style={{color: darkColor}}>Visible Clouds</strong></p>
                            </div>
                            :
                            <div className='glass-box' style={{maxWidth: "80%"}}>
                                <p><strong style={{color: lightColor}}>Core of  Rock & Metal</strong></p>
                                <p><strong style={{color: mainColor}}>Water & Methane & Ammonia</strong></p>
                                <p><strong style={{color: mediumColor}}>Gaseous Hydrogen</strong></p>
                                <p><strong style={{color: darkColor}}>Visible Clouds</strong></p>
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
                            <h3 style={{color: '#fff'}}>Size: <strong>{planetSize}</strong></h3>
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
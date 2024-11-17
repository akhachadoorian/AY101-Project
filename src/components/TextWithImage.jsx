import React from 'react';
import defaultPhoto from "../images/MilklyWay.jpg"

function TextWithImage ({ paragraphs, image = defaultPhoto, mediaSide = 'left', alt }) {
    if (mediaSide === "left") {
        return (
            <div className='text-w-image'>
            <div className="text">
            {paragraphs.map((p, index) => (
                <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
            ))}
            </div>
            <img src={image} alt={alt} />
            </div>
        );
    }
    
    return (
        <div className='text-w-image'>
            <img src={image} alt={alt} />
            <div className="text">
            {paragraphs.map((p, index) => (
                <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
            ))}
            </div>
        </div>
    );
}

export default TextWithImage;
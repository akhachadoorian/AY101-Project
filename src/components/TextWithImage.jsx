import React from "react";
import defaultPhoto from "../images/MilklyWay.jpg";

function TextWithImage({
  title,
  paragraphs,
  image = defaultPhoto,
  mediaSide = "right",
  alt,
}) {
  if (mediaSide === "right") {
    return (
      <div className="text-w-image">
        <div className="text">
          {title && <h3>{title}</h3>}
          {paragraphs.map((p, index) => (
            <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
          ))}
        </div>
        <img src={image} alt={alt} />
      </div>
    );
  }

  return (
    <div className="text-w-image">
      <img src={image} alt={alt} />
      <div className="text">
        {title && <h3>{title}</h3>}
        {paragraphs.map((p, index) => (
          <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
        ))}
      </div>
    </div>
  );
}

export default TextWithImage;

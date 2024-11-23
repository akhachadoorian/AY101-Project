import React from "react";

function ColorCard({ color, borderColor = "#fff", icon, title, paragraphs }) {
  var style = {
    backgroundColor: color,
    border: `2px solid ${borderColor}`,
  };

  return (
    <div className="color-card" style={style}>
      <div className="icon-w-head">
        <i className={`fa-solid fa-${icon}`}></i>
        <h4>{title}</h4>
      </div>
      <div className="text">
        {paragraphs.map((p, index) => (
          <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
        ))}
      </div>
    </div>
  );
}

export default ColorCard;

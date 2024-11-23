import React from "react";

function CircleIconWHeader({ color, borderColor = "#fff", icon, title }) {
  var style = {
    backgroundColor: color,
  };

  return (
    <div className="circle-icon-w-header">
      <div style={style} className="circle">
        <h3 className="number">{icon}</h3>
      </div>

      <h4>{title}</h4>
    </div>
  );
}

export default CircleIconWHeader;

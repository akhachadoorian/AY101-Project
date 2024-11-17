import React from "react";

function GlassboxWIcon({ title, icon, paragraph }) {
  var style = {
    color: "#7a89ac"
  }

  return (
    <div className="glass-box">
      <div className="icon-w-head">
        <i style={style} className={`fa-solid fa-${icon}`}></i>
        <h4 style={style}>{title}</h4>
      </div>
      <p>{paragraph}</p>
    </div>
  );
}

export default GlassboxWIcon;

import React from "react";

function GlassboxWIcon({ title, icon, paragraph, color }) {
  var style = {
    color: color ? color : "#7a89ac",
  };

  console.log(color);
  return (
    <div className="glass-box">
      <div className="icon-w-head">
        <i style={style} className={`fa-solid fa-${icon}`}></i>
        <h4 style={style}>{title}</h4>
      </div>
      <p dangerouslySetInnerHTML={{ __html: paragraph }} className="mainP"></p>
    </div>
  );
}

export default GlassboxWIcon;

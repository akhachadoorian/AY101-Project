import React from "react";

function ImportantInfo({ title, info }) {
  var style = {
    backgroundColor: "rgba(122, 137, 172, 0.3)",
    border: "2px solid rgba(122, 137, 172, 1)",
  };

  return (
    <div className="important-info" style={style}>
      <h6>{title}:</h6>
      <p>{info}</p>
    </div>
  );
}

export default ImportantInfo;

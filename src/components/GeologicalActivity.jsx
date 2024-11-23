import React from "react";
import GlassboxWIcon from "../components/GlassboxWIcon.jsx";

function GeologicalActivity({ geological, summaryText, color }) {
  return (
    <div className="geo">
      <h2>Geological Activity</h2>
      <div className="geological">
        {geological.map((component, index) => (
          <GlassboxWIcon
            key={index}
            title={component.title}
            icon={component.icon}
            paragraph={component.paragraphs}
            color={color}
          />
        ))}
      </div>
      {summaryText && (
        <div className="summary-text">
          <p>{summaryText}</p>
        </div>
      )}
    </div>
  );
}

export default GeologicalActivity;

import React from "react";

function GlassboxStats({ title, paragraphs }) {
  return (
    <div className="glass-box appear">
      {title && <h3 style={{ color: "#fff" }}>{title}</h3>}
      {paragraphs && (
        <div className="text">
          {paragraphs.map((p, index) => (
            <p dangerouslySetInnerHTML={{ __html: p }} key={index}></p>
          ))}
        </div>
      )}
    </div>
  );
}

export default GlassboxStats;

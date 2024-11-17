import React from 'react';

function PlanetComponent({ title, paragraph, relativeAbundance, icon, examples }) {
var style = {
  backgroundColor: "rgba(122, 137, 172, 0.3)",
  border: "2px solid #fff"
}

  return (
    <div className='planet-component' style={style}>
      <div className="icon-w-head">
        <i className={`fa-solid fa-${icon}`}></i>
        <h4>{title}</h4>
      </div>
      <p>{paragraph}</p>
      <p>
        <strong>Relative Abundance by mass: </strong>
        {relativeAbundance}
      </p>
      {examples && (
        <p>
          <strong>Examples:</strong>{' '}
          <span dangerouslySetInnerHTML={{ __html: examples }} />
        </p>
      )}
    </div>
  );
}

export default PlanetComponent;
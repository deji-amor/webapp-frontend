import React from 'react';

const DonutChartDetails = ({ details, legendColors }) => (
  <div>
    {details.map((detail, index) => (
      <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
        <div style={{ width: '20px', height: '20px', backgroundColor: legendColors[index], borderRadius: '50%', marginRight: '10px' }}></div>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "left" }}>
            <span style={{ color: detail.color }}>{detail.figure}</span>
            <div style={{ marginLeft: '5px' }}>{detail.label}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default DonutChartDetails;

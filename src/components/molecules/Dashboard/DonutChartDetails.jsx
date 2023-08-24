import React from "react";
import PropTypes from "prop-types";

const DonutChartDetails = ({ details, legendColors }) => (
  <div>
    {details.map((detail, index) => (
      <div key={index} style={{ display: "flex", alignItems: "start", marginBottom: "10px" }}>
        <div
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: legendColors[index],
            borderRadius: "50%",
            marginRight: "5px",
            marginTop: "7px",
          }}
        ></div>
        <div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "left" }}>
            <span
              style={{
                color: "var(--text-heading-dark, #27272E)",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "24.784px",
              }}
            >
              {detail.figure}
            </span>
            <div
              style={{
                color: "#828282",
                fontFamily: "Poppins",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              {detail.label}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

DonutChartDetails.propTypes = {
  details: PropTypes.arrayOf(
    PropTypes.shape({
      figure: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  legendColors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DonutChartDetails;

import React from "react";
import PropTypes from "prop-types";
import arrowImage from "../../../assets/daashboard/chevrondown.svg";

const Dropdown = ({ options, selectedOption, onSelect }) => (
  <select
    value={selectedOption}
    onChange={(e) => onSelect(e.target.value)}
    style={{
      display: "flex",
      borderRadius: "8px",
      padding: "0px 10px",
      height: "35px",
      alignItems: "center",
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "600",
      cursor: "pointer",
      letterSpacing: "1px",
      appearance: "none",
			background: `url(${arrowImage}) no-repeat #2B2E72`,
			backgroundPosition: "calc(100% - 5px) center",
			paddingRight: "40px",
			backgroundSize: "30px",
    }}
  >
    {options.map((option, index) => (
      <option
        key={index}
        value={option}
        style={{
          backgroundColor: "#FFFFFF",
          color: "#000000",
          fontSize: "18px",
          fontWeight: "600",
          border: "none",
          borderRadius: "8px",
        }}
      >
        {option}
      </option>
    ))}
  </select>
);

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Dropdown;

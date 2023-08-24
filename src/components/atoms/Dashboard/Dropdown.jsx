import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ options, selectedOption, onSelect }) => (
  <select
    value={selectedOption}
    onChange={(e) => onSelect(e.target.value)}
    style={{
      display: "flex",
      borderRadius: "8px",
      background: "#2B2E72",
      padding: "8px 10px",
      alignItems: "center",
      color: "#FFFFFF",
      fontFamily: "Poppins",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "33.798px",
      cursor: "pointer",
      letterSpacing: "1px",
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

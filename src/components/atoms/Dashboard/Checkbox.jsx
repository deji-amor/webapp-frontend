import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  const checkboxContainerStyle = {
    display: "flex",
    alignItems: "center",
    marginRight: "8px",
  };

  const checkboxStyle = {
    appearance: "none",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    border: checked ? "2px solid #fefefe" : "2px solid #2B2E72",
    outline: "none",
    cursor: "pointer",
    margin: "0",
    marginRight: "8px",
    padding: "2px",
    backgroundColor: checked ? "#2B2E72" : "transparent",
  };

  const labelStyle = {
    color: checked ? "#2B2E72" : "#706E6E",
    fontFamily: "Poppins",
    fontSize: "16px",
    lineHeight: "16px",
    fontWeight: "500",
  };

  return (
    <div style={checkboxContainerStyle}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={checkboxStyle}
      />
      <span style={labelStyle}>{label}</span>
    </div>
  );
};

export default Checkbox;

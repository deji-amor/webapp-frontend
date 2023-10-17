import React from 'react';

const ButtonWithIcon = ({ icon, text, onClick, icone, customStyles }) => {
  const buttonStyle = {
    border: '1px solid #2B2E72',
    borderRadius: "6px 0px 0px 6px",
    padding: "6px 12px",
    background: "var(--White, #FFF)",
    boxShadow: "0px 0px 0px 1px rgba(43, 46, 114, 0.48), 0px 1px 1px 0px rgba(0, 0, 0, 0.10)",
    gap: "8px",
    color: "#2B2E72",
    fontSize: "14px",
    fontWeight: "500",
    ...customStyles,
  };

  const iconStyle = {
    marginRight: '8px',
  };
  const iconeStyle = {
    marginLeft: '8px',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {icon && <span style={iconStyle}>{icon}</span>}
      {text}
      {icone && <span style={iconeStyle}>{icone}</span>}
    </button>
  );
};

export default ButtonWithIcon;

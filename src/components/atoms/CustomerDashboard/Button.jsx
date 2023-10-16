import React from "react";

const Button = ({ text, onClick }) => {
	const buttonStyle = {
		borderRadius: "8px",
		padding: "6px 12px",
		background: "#2B2E72",
		color: "#fff",
		fontSize: "14px",
		fontWeight: "600",
        letterSpacing: "0.5px",
	};

	return (
		<button style={buttonStyle} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;

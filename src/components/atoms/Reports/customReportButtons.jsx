import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
// import { Button } from "@mui/material";
// import { motion } from "framer-motion"


const ReportButtonWrapper = styled("div")(({ width }) => ({
	button: {
		width: width || "91px",
		height: "36px",
		borderRadius: "4px",
		padding: "8px, 12px, 8px, 12px",
		fontFamily: "Poppins",
        fontSize: "18px",
		fontWeight: "500",
		lineHeight: "20px",
		letterSpacing: "2%",
		textAlign: "center", 
        color: "rgba(70, 79, 96, 1)"       
	},

	"button.active": {
		fontWeight: "600",
        color: "rgba(43, 46, 114, 1)",
		border: "1px solid rgba(43, 46, 114, 1)",
		background: "white",
		letterSpacing: "0.02em",
		textAlign: "center",
        transition: "background 1s ease",
	},
}));

const CustomReportButtons = ({ text, width, active, handleActive }) => {
	return (
		<ReportButtonWrapper width={width}>
			<button className={active ? "active" : ""} onClick={() => handleActive(text)} type="button">{text}</button>
		</ReportButtonWrapper>
	);
};

CustomReportButtons.propTypes = {
	text: PropTypes.string,
	width: PropTypes.string,
    active: PropTypes.bool,
    handleActive: PropTypes.func
};

export default CustomReportButtons;

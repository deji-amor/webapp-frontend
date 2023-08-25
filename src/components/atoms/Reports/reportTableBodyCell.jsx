import React from "react";
import { styled } from "@mui/material";
import PropTypes from "prop-types";

const ReportTableBodyWrapper = styled("td")(({color}) => ({
    maxWidth: "200px",
	fontFamily: "Poppins",
	fontSize: "16px",
	fontWeight: "500",
	lineHeight: "36px",
	letterSpacing: "0em",
	textAlign: "left",
	color: color || "rgba(112, 110, 110, 1)",
}));

const ReportTableBodyCell = ({ children, color }) => {
	return <ReportTableBodyWrapper color={color}>{children}</ReportTableBodyWrapper>;
};

ReportTableBodyCell.propTypes = {
	children: PropTypes.node,
    color: PropTypes.string
};

export default ReportTableBodyCell;

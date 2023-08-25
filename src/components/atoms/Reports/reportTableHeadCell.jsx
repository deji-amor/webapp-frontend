import React from "react";
import { styled } from "@mui/material";
import PropTypes from "prop-types";

const ReportTableHeadCellWrapper = styled("th")(() => ({
	fontFamily: "Poppins",
	fontSize: "16px",
	fontWeight: "500",
	lineHeight: "36px",
	letterSpacing: "0em",
	textAlign: "left",
	color: "rgba(29, 29, 29, 1)",

}));

const ReportTableHeadCell = ({ children }) => {
	return <ReportTableHeadCellWrapper>{children}</ReportTableHeadCellWrapper>;
};

ReportTableHeadCell.propTypes = {
	children: PropTypes.node,
	// style: PropTypes.object
};

export default ReportTableHeadCell;

import React from "react";
import { styled } from "@mui/material";
import PropTypes from "prop-types";
import ReportTableHeadCell from "./reportTableHeadCell";

const ReportTableHeadRowWrapper = styled("tr")(() => ({
	width: "100%",
	height: "63px",
	borderBottom: "2px solid rgba(238, 238, 238, 1)",
	background: "rgba(255, 255, 255, 1)",

	th: {
		fontFamily: "Poppins",
		fontSize: "16px",
		fontWeight: "600",
		lineHeight: "36px",
		letterSpacing: "0em",
		textAlign: "left",
		color: "rgba(29, 29, 29, 1)",
	},

	".first": {
		paddingLeft: "30px"
	}
}));

const ReportTableTecHeadRow = () => {
	return (
		<ReportTableHeadRowWrapper>
			<ReportTableHeadCell>
				<span className="first">Company Name</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span>Representative Name</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span>Representative Email</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span>Status</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span>
                    Filter By:
                </span>
			</ReportTableHeadCell>
		</ReportTableHeadRowWrapper>
	);
};

ReportTableTecHeadRow.propTypes = {
	// text: PropTypes.string,
};

export default ReportTableTecHeadRow;

import React from "react";
import { styled } from "@mui/material";
import PropTypes from "prop-types";
import ReportTableHeadCell from "./reportTableHeadCell";

const ReportTableHeadRowWrapper = styled("tr")(() => ({
	width: "100%",
	height: "63px",
	borderBottom: "5px solid rgba(250, 250, 250, 1)",
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
		paddingLeft: "10px"
	}
}));

const ReportTableHeadRow = () => {
	return (
		<ReportTableHeadRowWrapper>
			<ReportTableHeadCell>
				<span className="first">Ticket Title</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span>Ticket Type</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span>Ticket Description</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span>Ticket Start Date</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span>Ticket End Date</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span>Status</span>
			</ReportTableHeadCell>
			<ReportTableHeadCell>
				<span>Locations</span>
			</ReportTableHeadCell>
		</ReportTableHeadRowWrapper>
	);
};

ReportTableHeadRow.propTypes = {
	// text: PropTypes.string,
};

export default ReportTableHeadRow;

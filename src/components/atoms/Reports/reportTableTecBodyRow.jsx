import React from "react";
import { styled } from "@mui/material";
import PropTypes from "prop-types";
import ReportTableBodyCell from "./reportTableBodyCell";
import { getDateFromDateTime } from "../../../helpers/date-manipulation";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const ReportTableBodyRowWrapper = styled("tr")(() => ({
	width: "100%",
	height: "63px",
	borderBottom: "1px solid rgba(238, 238, 238, 1)",

	span: {
		maxWidth: "250px",
		display: "flex",
		justifyContent: "start",
		alignItems: "center",
		gap: "10px",
	},

	p: {
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},

	".first": {
		paddingLeft: "30px",
	},

	".check": {
		height: "16px",
		color: "rgba(43, 46, 114, 1)",
		background: "white",
		border: "1px solid rgba(209, 207, 207, 1)",
	},

	".location": {
		color: "rgba(43, 46, 114, 1)",
	},

	".location p": {
		fontFamily: "Poppins",
		fontSize: "16px",
		fontWeight: "600",
		lineHeight: "36px",
		letterSpacing: "0em",
		textAlign: "left",
	},
}));

const ReportTableTecBodyRow = ({ ticket }) => {
	return (
		<ReportTableBodyRowWrapper>
			<ReportTableBodyCell>
				<span className="first">
					<p>{ticket.company_name}</p>
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span>
					<p>{ticket.first_name} {ticket.last_name}</p>
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span>
					<p>{ticket.email}</p>
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span>
					<p>{ticket.status}</p>
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span className="location">
					<p>Edit Customer Profile</p>
					<RemoveRedEyeOutlinedIcon />
				</span>
			</ReportTableBodyCell>
		</ReportTableBodyRowWrapper>
	);
};

ReportTableTecBodyRow.propTypes = {
	ticket: PropTypes.object,
};

export default ReportTableTecBodyRow;

import React from "react";
import { styled } from "@mui/material";
import PropTypes from "prop-types";
import ReportTableBodyCell from "./reportTableBodyCell";
import { getDateFromDateTime } from "../../../helpers/date-manipulation";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const ReportTableBodyRowWrapper = styled("tr")(() => ({
	width: "100%",
	height: "80px",
	borderBottom: "4px solid rgba(250, 250, 250, 1)",

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

	".edit": {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "flex",
		gap: "10px"
	},

	".active": {
		height: "28px",
		lineHeight: "30px",
		background: "rgba(18, 133, 26, 0.2)",
		padding: "0px 10px 0px 10px",
		borderRadius: "16px",
		color: "rgba(4, 133, 13, 1)"
	},
	".inactive": {
		height: "28px",
		lineHeight: "30px",
		background: "rgba(237, 117, 56, 0.2)",
		padding: "0px 10px 0px 10px",
		borderRadius: "16px",
		color: "rgba(237, 90, 17, 1)"
	},
	".suspend": {
		height: "28px",
		textAlign: "center",
		lineHeight: "30px",
		background: "rgba(204, 150, 29, 0.2)",
		padding: "0px 10px 0px 10px",
		borderRadius: "16px",
		color: "rgba(204, 150, 29, 1)"
	}
}));

const ReportTableCustomerBodyRow = ({ ticket }) => {
	return (
		<ReportTableBodyRowWrapper>
			<ReportTableBodyCell>
				<span className="first">
					<p>{ticket.company_name}</p>
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span>
					<p>
						{ticket.first_name} {ticket.last_name}
					</p>
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span>
					<p>{ticket.email}</p>
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span>
					<p className={ticket.status === "active" ? "active" : ticket.status === "inactive" ? "inactive" : "suspend" }>{ticket.status}</p>
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span className="location">
					<p className="edit">
						<BorderColorOutlinedIcon />
						Edit Customer Profile
					</p>
					<MoreVertOutlinedIcon />
				</span>
			</ReportTableBodyCell>
		</ReportTableBodyRowWrapper>
	);
};

ReportTableCustomerBodyRow.propTypes = {
	ticket: PropTypes.object,
};

export default ReportTableCustomerBodyRow;

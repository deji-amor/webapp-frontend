import React, { useState } from "react";
import { styled } from "@mui/material";
import PropTypes from "prop-types";
import ReportTableBodyCell from "./reportTableBodyCell";
import { getDateFromDateTime } from "../../../helpers/date-manipulation";
import {
	filterSelectedTickets,
	removeSelectedTickets,
} from "../../../state-manager/reducers/reports/tickets/ticketreport";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch, useSelector } from "react-redux";

const ReportTableBodyRowWrapper = styled("tr")(({ checked }) => ({
	width: "100%",
	height: "60px",
	borderBottom: "3px solid rgba(250, 250, 250, 1)",
	background: (checked && "rgba(241, 242, 253, 1)") || "",

	":hover": {
		background: "rgba(245, 245, 245, 1)",
		color: "white",
	},

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
		paddingLeft: "10px",
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

const ReportTableBodyRow = ({ ticket }) => {
	const [checked, setChecked] = useState(false);
	const dispatch = useDispatch();
	const { selectedTickets, selectedProjectTickets } = useSelector((state) => state.ticketReports);

	const handleClick = () => {
		setChecked((prev) => !prev);
		if (!checked) {
			dispatch(filterSelectedTickets(ticket));
		} else {
			dispatch(removeSelectedTickets(ticket));
		}
	};

	// console.log(selectedProjectTickets);
	return (
		<ReportTableBodyRowWrapper checked={checked}>
			<ReportTableBodyCell>
				<span className="first" title={ticket?.ticket_form}>
					<input className="check" onClick={handleClick} type="checkbox" />{" "}
					<p>{ticket?.ticket_form}</p>
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span>
					<p>{ticket?.ticket_type}</p>
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span>
					<p>{ticket?.scope_of_work_description}</p>
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span>
					<p>{getDateFromDateTime(ticket?.start_date_time)}</p>
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span>
					<p>{getDateFromDateTime(ticket?.end_date_time)}</p>
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span>
					<p>{ticket?.status}</p>
					{ticket?.status.toLowerCase() === "done" ? (
						<CheckCircleIcon style={{ color: "green" }} />
					) : (
						""
					)}
				</span>
			</ReportTableBodyCell>
			<ReportTableBodyCell>
				<span className="location">
					<p>4 Locations</p>
					<RemoveRedEyeOutlinedIcon />
				</span>
			</ReportTableBodyCell>
		</ReportTableBodyRowWrapper>
	);
};

ReportTableBodyRow.propTypes = {
	ticket: PropTypes.object,
};

export default ReportTableBodyRow;

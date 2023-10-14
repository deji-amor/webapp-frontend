import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import ExportImage from "../../../assets/password/export.png";
import { useSelector, useDispatch } from "react-redux";
import {
	SET_EXPORT_DROPDOWN_ONE,
	SET_EXPORT_PDF_DROPDOWN,
	SET_EXPORT_CSV_DROPDOWN,
	SET_REPORT_BOARD_STATE_TO_DEFAULT,
} from "../../../state-manager/reducers/reports/report";
import { ticketHeaders, customerHeaders } from "./headers";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ExportFilesWrapper = styled("div")(() => ({
	position: "relative",
	top: "-15px",

	".exportBut": {
		width: "184px",
		borderRadius: "8px",
		padding: "8px 15px 8px 15px",
		color: "white",
		background: "rgba(43, 46, 114, 1)",
		fontFamily: "Poppins",
		fontSize: "14px",
		fontWeight: "600",
		lineHeight: "20px",
		letterSpacing: "0.15000000596046448px",
		textAlign: "left",
		display: "flex",
		justifyContent: "space-between",
		gap: "4px",
		position: "absolute",
		right: "33px",
		top: "0px",
	},

	".export-icon": {
		width: "19px",
		height: "19px",
	},

	".exp": {
		display: "flex",
		position: "absolute",
		right: "33px",
		top: "38px",
		gap: "5px",
	},

	".instant-recurring, .pdf-csv": {
		minWidth: "170px",
		// height: "84px",
		padding: "12px 4px 12px 4px",
		borderRadius: "8px",
		boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.20)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "start",
		// gap: "2px",
	},

	".instant-recurring button, .pdf-csv button": {
		width: "100%",
		padding: "5px 8px 5px 8px",
		fontFamily: "Poppins",
		fontSize: "14px",
		fontWeight: "500",
		letterSpacing: "0.02em",
		textAlign: "left",
		borderRadius: "8px",
		display: "flex",
		gap: "60px",
		alignItems: "center",
	},

	".pdf-csv button": {
		justifyContent: "space-around",
	},

	".instant-recurring button:hover, .pdf-csv button:hover": {
		background: "rgba(76, 111, 255, 0.08)",
	},

	".pdf-csv": {
		height: "42px",
	},

	".instant-recurring button, .pdf-csv button .arrow": {
		fontSize: "15px",
	},
}));

const ExportFiles = ({ text }) => {
	const [toggle, setToggle] = useState(false);
	const [csvDrop, setCSVDrop] = useState(false);

	const {
		filteredTickets,
		filteredTicketsByDate,
		filteredTicketsByStatus,
		selectedTickets,
	} = useSelector((state) => state.ticketReports);

	const selectedService = selectedTickets ? selectedTickets : [];

	const filteredTicketServiceReports =
		(filteredTicketsByStatus.length != 0 && filteredTicketsByDate.length != 0) ||
		(filteredTicketsByStatus.length != 0 && filteredTicketsByDate.length === 0)
			? filteredTicketsByStatus
			: filteredTicketsByDate.length != 0
			? filteredTicketsByDate
			: filteredTickets;

	const serviceCounter =
		selectedTickets.length || filteredTicketsByStatus.length || filteredTicketsByDate.length;

	useEffect(() => {
		const listener = (e) => {
			if (!e.target.closest("#ticket-drop") || e.target.closest("#ticket-drop")) {
				setToggle(false);
				setCSVDrop(false);
			}
		};

		document.body.addEventListener("click", listener);
		return () => document.body.removeEventListener("click", listener);
	}, []);

	return (
		<ExportFilesWrapper id="ticket-drop">
			<button
				onClick={(e) => {
					e.stopPropagation();
					setToggle((prev) => !prev);
				}}
				className="exportBut"
				type="button"
			>
				<span>{text}</span>
				{serviceCounter != 0 && (
					<p
						style={{
							borderRadius: "50%",
							background: "white",
							color: "rgba(43, 46, 114, 1)",
							padding: "5px 5px 5px 5px",
							width: "23px",
							height: "23px",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{serviceCounter}
					</p>
				)}
				<img className="export-icon" src={ExportImage} alt="export files" />
			</button>
			<div className="exp">
				{toggle && csvDrop && (
					<div className="instant-recurring">
						<button
							onClick={(e) => {
								e.stopPropagation();
								setToggle(false);
								setCSVDrop(false);
							}}
							className="instant"
							type="button"
						>
							<CSVLink
								data={selectedService.length != 0 ? selectedService : filteredTicketServiceReports}
								headers={ticketHeaders}
								filename="admin_filtered_service_tickets.csv"
								target="_blank"
							>
								Instant Export
							</CSVLink>
						</button>
						<button
							onClick={(e) => {
								e.stopPropagation();
								setToggle(false);
								setCSVDrop(false);
							}}
							className="recurring"
							type="button"
						>
							Recurring Export
						</button>
					</div>
				)}
				{toggle && (
					<div className="pdf-csv">
						<button
							onClick={(e) => {
								e.stopPropagation();
								setCSVDrop((prev) => !prev);
							}}
							className="but"
							type="button"
						>
							<span>CSV</span>
							<ArrowForwardIosIcon className="arrow" />
						</button>
					</div>
				)}
			</div>
		</ExportFilesWrapper>
	);
};

ExportFiles.propTypes = {
	text: PropTypes.string,
};

export default ExportFiles;

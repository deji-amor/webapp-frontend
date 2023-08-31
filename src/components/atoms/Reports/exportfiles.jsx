import React from "react";
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
		width: "164px",
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
		justifyContent: "space-around",
		gap: "60px",
		alignItems: "center",
	},

	".instant-recurring button:hover, .pdf-csv button:hover": {
		background: "rgba(76, 111, 255, 0.08)",
	},

	".pdf-csv": {
		height: "42px"
	},

	".instant-recurring button, .pdf-csv button .arrow": {
		fontSize: "15px",
	},
}));

const ExportFiles = ({ text }) => {
	const dispatch = useDispatch();
	const { exportDropdown1, exportPDFDropdown, exportCSVDropdown, exportDocType, customerReport } =
		useSelector((state) => state.reports);

	const {
		reportTabIndex,
		filteredTickets,
		filteredTicketsByDate,
		filteredTicketsByStatus,
		selectedTickets,
		selectedProjectTickets,
		filteredProjectTickets,
		filteredProjectTicketsByDate,
		filteredProjectTicketsByStatus,
	} = useSelector((state) => state.ticketReports);

	const { filteredCustomers, filteredCustomersByDate, filteredCustomersByStatus } = useSelector(
		(state) => state.customerReports
	);

	const selectedService = selectedTickets ? selectedTickets : [];

	const selectedProject = selectedProjectTickets ? selectedProjectTickets : [];

	console.log(selectedTickets);
	console.log(selectedProjectTickets);

	const filteredTicketServiceReports =
		(filteredTicketsByStatus.length != 0 && filteredTicketsByDate.length != 0) ||
		(filteredTicketsByStatus.length != 0 && filteredTicketsByDate.length === 0)
			? filteredTicketsByStatus
			: filteredTicketsByDate.length != 0
			? filteredTicketsByDate
			: filteredTickets;

	const filteredTicketProjectReport =
		(filteredProjectTicketsByStatus.length != 0 && filteredProjectTicketsByDate.length != 0) ||
		(filteredProjectTicketsByStatus.length != 0 && filteredProjectTicketsByDate.length === 0)
			? filteredProjectTicketsByStatus
			: filteredProjectTicketsByDate.length != 0
			? filteredProjectTicketsByDate
			: filteredProjectTickets;

	return (
		<ExportFilesWrapper>
			<button
				onClick={() => dispatch(SET_EXPORT_DROPDOWN_ONE())}
				className="exportBut"
				type="button"
			>
				<span>{text}</span>
				<img className="export-icon" src={ExportImage} alt="export files" />
			</button>
			<div className="exp">
				{exportDropdown1 && (exportPDFDropdown || exportCSVDropdown) && (
					<div className="instant-recurring">
						<button
							onClick={() => dispatch(SET_REPORT_BOARD_STATE_TO_DEFAULT())}
							className="instant"
							type="button"
						>
							{/* {" "} */}
							{(reportTabIndex === 0 && (
								<CSVLink
									data={
										selectedService.length != 0 ? selectedService : filteredTicketServiceReports
									}
									headers={ticketHeaders}
									filename="admin_filtered_service_tickets.csv"
									target="_blank"
								>
									Instant {exportDocType} Export
								</CSVLink>
							)) || (
								<CSVLink
									data={selectedProject.length != 0 ? selectedProject : filteredTicketProjectReport}
									headers={ticketHeaders}
									filename="admin_filtered_project_tickets.csv"
									target="_blank"
								>
									Instant {exportDocType} Export
								</CSVLink>
							)}
						</button>
						<button
							onClick={() => dispatch(SET_REPORT_BOARD_STATE_TO_DEFAULT())}
							className="recurring"
							type="button"
						>
							Recurring {exportDocType} Export
						</button>
					</div>
				)}
				{exportDropdown1 && (
					<div className="pdf-csv">
						{/* <button
							onClick={() => dispatch(SET_EXPORT_PDF_DROPDOWN("PDF"))}
							className="but"
							type="button"
						>
							<span>PDF</span>
							<ArrowForwardIosIcon className="arrow" />
						</button> */}
						<button
							onClick={() => dispatch(SET_EXPORT_CSV_DROPDOWN("CSV"))}
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

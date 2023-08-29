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
		height: "84px",
		padding: "12px 4px 12px 4px",
		borderRadius: "8px",
		boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.20)",
		display: "flex",
		flexDirection: "column",
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

	".pdf-csv": {},

	".instant-recurring button, .pdf-csv button .arrow": {
		fontSize: "15px",
	},
}));

const ExportFiles = ({ text }) => {
	const dispatch = useDispatch();
	const {
		exportDropdown1,
		exportPDFDropdown,
		exportCSVDropdown,
		exportDocType,
		reportTapIndex,
		customerReport,
	} = useSelector((state) => state.reports);

	const { filteredTickets, filteredTicketsByDate, filteredTicketsByStatus } = useSelector(
		(state) => state.ticketReports
	);

	const { filteredCustomers, filteredCustomersByDate, filteredCustomersByStatus } = useSelector(
		(state) => state.customerReports
	);

	// console.log(filteredCustomers)

	const ticketHeaders = [
		{ label: "Ticket Title", key: "ticket_form" },
		{ label: "Ticket type", key: "ticket_type" },
		{ label: "Status", key: "status" },
		{ label: "Date created", key: "created_at" },
		{ label: "Point of contact name", key: "point_of_contact_name" },
		{ label: "Point of contact number", key: "point_of_contact_phone_number" },
		{ label: "Material Procurements", key: "materials_description" },
		{ label: "Hardware type quantity", key: "hardware_component_type_quantity" },
		{ label: "Hardware component name", key: "hardware_name" },
		{ label: "Software application name", key: "software_customization_name" },
		{ label: "Number of work station", key: "number_of_work_station" },
		{ label: "Number of work system", key: "number_of_work_station" },
		{ label: "Scope of work", key: "scope_of_work_description" },
		{ label: "Number of technician", key: "number_of_technicians" },
		{ label: "Start date", key: "start_date_time" },
		{ label: "End date", key: "end_date_time" },
	];

	const CustomerHeaders = [
		{ label: "Company name", key: "company_name" },
		{ label: "First name", key: "first_name" },
		{ label: "Last name", key: "last_name" },
		{ label: "Company representative email", key: "email" },
		{ label: "Company finance email", key: "company_finance_email" },
		{ label: "Company email", key: "company_name" },
		{ label: "Status", key: "status" },
		{ label: "Date Created", key: "datetime" }
	];

	const filteredTicketServiceReports =
		filteredTicketsByStatus.length != 0 && filteredTicketsByDate.length === 0
			? filteredTicketsByStatus
			: filteredTicketsByDate.length != 0
			? filteredTicketsByDate
			: filteredTickets;

	const filteredTicketProjectReport = [];

	const filteredCustomerReport =
		filteredCustomersByStatus.length != 0 && filteredCustomersByDate.length === 0
			? filteredCustomersByStatus
			: filteredCustomersByDate.length != 0
			? filteredCustomersByDate
			: filteredCustomers;

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
				{exportDropdown1 &&
					(exportPDFDropdown || exportCSVDropdown) &&
					((customerReport && (
						<div className="instant-recurring">
							<button
								onClick={() => dispatch(SET_REPORT_BOARD_STATE_TO_DEFAULT())}
								className="instant"
								type="button"
							>
								<CSVLink
									data={filteredCustomerReport}
									headers={CustomerHeaders}
									filename="admin_filtered_customers.csv"
									target="_blank"
								>
									Instant {exportDocType} Export
								</CSVLink>
							</button>
							<button
								onClick={() => dispatch(SET_REPORT_BOARD_STATE_TO_DEFAULT())}
								className="recurring"
								type="button"
							>
								Recurring {exportDocType} Export
							</button>
						</div>
					)) ||
						(reportTapIndex === 0 && (
							<div className="instant-recurring">
								<button
									onClick={() => dispatch(SET_REPORT_BOARD_STATE_TO_DEFAULT())}
									className="instant"
									type="button"
								>
									<CSVLink
										data={filteredTicketServiceReports}
										headers={ticketHeaders}
										filename="admin_filtered_service_tickets.csv"
										target="_blank"
									>
										Instant {exportDocType} Export
									</CSVLink>
								</button>
								<button
									onClick={() => dispatch(SET_REPORT_BOARD_STATE_TO_DEFAULT())}
									className="recurring"
									type="button"
								>
									Recurring {exportDocType} Export
								</button>
							</div>
						)) || (
							<div className="instant-recurring">
								<button
									onClick={() => dispatch(SET_REPORT_BOARD_STATE_TO_DEFAULT())}
									className="instant"
									type="button"
								>
									<CSVLink
										data={filteredTicketProjectReport}
										headers={ticketHeaders}
										filename="admin_filtered_project_tickets.csv"
										target="_blank"
									>
										Instant {exportDocType} Export
									</CSVLink>
								</button>
								<button
									onClick={() => dispatch(SET_REPORT_BOARD_STATE_TO_DEFAULT())}
									className="recurring"
									type="button"
								>
									Recurring {exportDocType} Export
								</button>
							</div>
						))}
				{exportDropdown1 && (
					<div className="pdf-csv">
						<button
							onClick={() => dispatch(SET_EXPORT_PDF_DROPDOWN("PDF"))}
							className="but"
							type="button"
						>
							<span>PDF</span>
							<ArrowForwardIosIcon className="arrow" />
						</button>
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

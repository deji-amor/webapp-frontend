import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import { CustomTab } from "../../organisms/users/CustomerSuperAdmin/UserTabs";
import { useDispatch, useSelector } from "react-redux";
import ReportTabs from "../../atoms/Reports/tabs";
import ReportSort from "../../atoms/Reports/sort";
import FilterBy from "../../atoms/Reports/filter";
import ProjectFilterBy from "../../atoms/Reports/projectfilter";
import ProjectExportFiles from "../../atoms/Reports/projectExport";
import ExportFiles from "../../atoms/Reports/exportfiles";
import DateFilter from "../../atoms/Reports/datefilter";
import ProjectDateFilter from "../../atoms/Reports/projectdateFilter";
import {
	SET_REPORT_TAB_INDEX,
	removeMultipleFilterStatus,
	setMultipleDropdownFilterStatus,
} from "../../../state-manager/reducers/reports/tickets/ticketreport";
import ClearIcon from "@mui/icons-material/Clear";

const ReportFilterBoardWrapper = styled("div")(() => ({
	width: "1,133px",
	height: "290px",
	position: "relative",
	background: "rgba(255, 255, 255, 1)",
	padding: "0px 0px 24px 0px",
	borderRadius: "12px",
	gap: "22px",

	".tab-sort": {
		position: "relative",
	},

	".sort": {
		position: "absolute",
		top: "50%",
		transform: "translateY(-50%)",
		right: "10px",
	},

	".filters": {
		position: "relative",
		width: "100%",
	},

	".date": {
		position: "relative",
	},

	".status": {
		display: "flex",
		gap: "20px",
		alignItems: "center",
		color: "rgba(43, 46, 114, 1)",
		position: "relative",
		marginTop: "60px",
		marginLeft: "20px",
	},

	".status span": {
		height: "30px",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		background: "#D3DCE7",
		borderRadius: "8px",
		padding: "5px",
		cursor: "pointer",
	},

	".status span:hover": {
		background: "rgba(43, 46, 114, 1)",
		color: "white",
	},
}));

const TypeFilterBoard = ({ handleReportDateRange, handleReportsSort, toggle, setToggle }) => {
	const {
		filteredTickets,
		filteredProjectTickets,
		reportTabIndex,
		multipleTicketStatusFiltering,
		multipleProjectTicketStatusFiltering,
	} = useSelector((state) => state.ticketReports);

	const dispatch = useDispatch();

	const handleChange = (ind) => {
		dispatch(SET_REPORT_TAB_INDEX(ind));
	};

	const a11yProps = (ind) => {
		return {
			id: `simple-tab-${ind}`,
			"aria-controls": `simple-tabpanel-${ind}`,
		};
	};

	const handleClick = (status) => {
		dispatch(removeMultipleFilterStatus(status));
		if (status === "done") {
			dispatch(setMultipleDropdownFilterStatus({ status: "done", title: "Tickets Done" }));
		} else if (status === "in-progress") {
			dispatch(
				setMultipleDropdownFilterStatus({ status: "in-progress", title: "Tickets Inprogress" })
			);
		} else if (status === "pending") {
			dispatch(setMultipleDropdownFilterStatus({ status: "pending", title: "Tickets Pending" }));
		} else if (status === "technician enroute") {
			dispatch(
				setMultipleDropdownFilterStatus({
					status: "technician enroute",
					title: "Technician Enroute",
				})
			);
		}
	};

	return (
		<ReportFilterBoardWrapper>
			<div className="tab-sort">
				<ReportTabs index={reportTabIndex} handleChange={() => handleChange(reportTabIndex)}>
					<CustomTab label="Service Tickets" {...a11yProps(0)} onClick={() => handleChange(0)} />
					<CustomTab label="Project Tickets" {...a11yProps(1)} onClick={() => handleChange(1)} />
				</ReportTabs>

				<div className="sort">
					<ReportSort handleReportsSort={handleReportsSort} toggle={toggle} setToggle={setToggle} />
				</div>
			</div>

			<div className="filters">
				{(reportTabIndex === 0 && <FilterBy filteredReports={filteredTickets} />) || (
					<ProjectFilterBy filteredReports={filteredProjectTickets} />
				)}

				{(reportTabIndex === 0 && <ExportFiles text={"Export Tickets"} />) || (
					<ProjectExportFiles text={"Export Tickets"} />
				)}
			</div>

			<div className="date">
				{(reportTabIndex === 0 && <DateFilter handleReportDateRange={handleReportDateRange} />) || (
					<ProjectDateFilter handleReportDateRange={handleReportDateRange} />
				)}
			</div>
			<div className="status">
				{(reportTabIndex === 0 &&
					multipleTicketStatusFiltering?.map((ticket) => (
						<span key={ticket} onClick={() => handleClick(ticket)}>
							{ticket} <ClearIcon />
						</span>
					))) ||
					multipleProjectTicketStatusFiltering?.map((ticket) => (
						<span key={ticket} onClick={() => handleClick(ticket)}>
							{ticket} <ClearIcon />
						</span>
					))}
			</div>
		</ReportFilterBoardWrapper>
	);
};

TypeFilterBoard.propTypes = {
	handleReportDateRange: PropTypes.func,
	handleReportsSort: PropTypes.func,
	setToggle: PropTypes.func,
	toggle: PropTypes.bool,
	filteredReports: PropTypes.array,
};

export default TypeFilterBoard;

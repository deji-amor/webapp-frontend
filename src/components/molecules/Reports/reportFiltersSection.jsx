import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import { CustomTab } from "../../organisms/users/CustomerSuperAdmin/UserTabs";
import { filterTickets, filterCustomers } from "./objects";
import { useDispatch, useSelector } from "react-redux";
import ReportTabs from "../../atoms/Reports/tabs";
import ReportSort from "../../atoms/Reports/sort";
import CustomerExportFiles from "../../atoms/Reports/customerExport";
import FilterBy from "../../atoms/Reports/filter";
import ProjectFilterBy from "../../atoms/Reports/projectfilter";
import ExportFiles from "../../atoms/Reports/exportfiles";
import DateFilter from "../../atoms/Reports/datefilter";
import ProjectDateFilter from "../../atoms/Reports/projectdateFilter";
import CustomerFilterBy from "../../atoms/Reports/customerFilter";
import { SET_REPORT_TAB_INDEX } from "../../../state-manager/reducers/reports/tickets/ticketreport";

const ReportFilterBoardWrapper = styled("div")(() => ({
	width: "1,133px",
	height: "261px",
	position: "relative",
	background: "rgba(255, 255, 255, 1)",
	padding: "0px 0px 24px 0px",
	borderRadius: "12px",
	gap: "22px",

	".tab-sort": {
		position: "relative",
		zIndex: "20",
	},

	".sort": {
		position: "absolute",
		top: "50%",
		transform: "translateY(-50%)",
		right: "10px",
	},

	".filters": {
		position: "relative",
		zIndex: "20",
		width: "100%",
	},
}));

const TypeFilterBoard = ({ handleReportDateRange, handleReportsSort, toggle, setToggle }) => {
	const { customerReport } = useSelector((state) => state.reports);
	const { filteredTickets, filteredProjectTickets, reportTabIndex } = useSelector(
		(state) => state.ticketReports
	);
	const { filteredCustomers } = useSelector((state) => state.customerReports);

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

	return (
		<ReportFilterBoardWrapper>
			<div className="tab-sort">
				<ReportTabs index={reportTabIndex} handleChange={() => handleChange(reportTabIndex)}>
					{!customerReport && (
						<CustomTab label="Service Tickets" {...a11yProps(0)} onClick={() => handleChange(0)} />
					)}
					{!customerReport && (
						<CustomTab label="Project Tickets" {...a11yProps(1)} onClick={() => handleChange(1)} />
					)}
				</ReportTabs>

				<div className="sort">
					<ReportSort handleReportsSort={handleReportsSort} toggle={toggle} setToggle={setToggle} />
				</div>
			</div>
			<div className="filters">
				{customerReport ? (
					<CustomerFilterBy dropItems={filterCustomers} filteredReports={filteredCustomers} />
				) : (
					(reportTabIndex === 0 && (
						<FilterBy dropItems={filterTickets} filteredReports={filteredTickets} />
					)) || (
						<ProjectFilterBy dropItems={filterTickets} filteredReports={filteredProjectTickets} />
					)
				)}
				{customerReport ? (
					<CustomerExportFiles text={"Export Customers"} />
				) : (
					<ExportFiles text={"Export Tickets"} />
				)}
			</div>
			<div>
				{(reportTabIndex === 0 && <DateFilter handleReportDateRange={handleReportDateRange} />) || (
					<ProjectDateFilter handleReportDateRange={handleReportDateRange} />
				)}
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

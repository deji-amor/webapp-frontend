import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import { CustomTab } from "../../organisms/users/CustomerSuperAdmin/UserTabs";
import { filterTickets, filterCustomers } from "./objects";
import { useDispatch, useSelector } from "react-redux";
import ReportTabs from "../../atoms/Reports/tabs";
import ReportSort from "../../atoms/Reports/sort";
import FilterBy from "../../atoms/Reports/filter";
import ExportFiles from "../../atoms/Reports/exportfiles";
import DateFilter from "../../atoms/Reports/datefilter";
import CustomerFilterBy from "../../atoms/Reports/customerFilter";
import { SET_REPORT_TAB_INDEX } from "../../../state-manager/reducers/reports/tickets/ticketreport"

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
		zIndex: "200",
	},

	".sort": {
		position: "absolute",
		top: "50%",
		transform: "translateY(-50%)",
		right: "10px",
	},

	".filters": {
		position: "relative",
		zIndex: "200",
		width: "100%",
	},
}));

const TypeFilterBoard = ({ handleReportDateRange, handleReportsSort, toggle, setToggle }) => {
	const [index, setIndex] = useState(0);
	const { customerReport } = useSelector((state) => state.reports);
	const { filteredTickets } = useSelector((state) => state.ticketReports);
	const { filteredCustomers } = useSelector((state) => state.customerReports);

	const dispatch = useDispatch();

	const handleChange = (index) => {
		setIndex(index);
		dispatch(SET_REPORT_TAB_INDEX(index));
	};

	const a11yProps = (index) => {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		};
	};

	return (
		<ReportFilterBoardWrapper>
			<div className="tab-sort">
				<ReportTabs index={index} handleChange={handleChange}>
					{!customerReport && (
						<CustomTab label="Service Tickets" {...a11yProps(0)} onClick={() => handleChange(0)} />
					)}
					{!customerReport && (
						<CustomTab label="Project Tickets" {...a11yProps(0)} onClick={() => handleChange(1)} />
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
					<FilterBy dropItems={filterTickets} filteredReports={filteredTickets} />
				)}
				<ExportFiles text={"Export Tickets"} />
			</div>
			<div>
				<DateFilter handleReportDateRange={handleReportDateRange} />
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

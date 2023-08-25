import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import { CustomTab } from "../../organisms/users/CustomerSuperAdmin/UserTabs";
import { filterTickets } from "./objects";
import { useDispatch, useSelector } from "react-redux";
import ReportTabs from "../../atoms/Reports/tabs";
import ReportSort from "../../atoms/Reports/sort";
import FilterBy from "../../atoms/Reports/filter";
import ExportFiles from "../../atoms/Reports/exportfiles";
import DateFilter from "../../atoms/Reports/datefilter";
import { SET_REPORT_TAB_INDEX } from "../../../state-manager/reducers/reports/report";

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

const TypeFilterBoard = ({
	handleReportDateRange,
	handleReportsSort,
	filterList,
	reportList,
	setFilteredReports,
	filteredReports,
}) => {
	const [index, setIndex] = useState(0);
	const { customerReport, reportTapIndex } = useSelector((state) => state.reports);

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
						<CustomTab label="Customers" {...a11yProps(0)} onClick={() => handleChange(0)} />
					)}
					{!customerReport && (
						<CustomTab label="Technicians" {...a11yProps(0)} onClick={() => handleChange(1)} />
					)}

				</ReportTabs>

				<div className="sort">
					<ReportSort handleReportsSort={handleReportsSort} />
				</div>
			</div>
			<div className="filters">
				<FilterBy
					dropItems={filterTickets}
					filterList={filterList}
					ticketList={reportList}
					setFilteredTickets={setFilteredReports}
				/>
				<ExportFiles text={"Export Tickets"} />
			</div>
			<div>
				<DateFilter handleTicketDateRange={handleReportDateRange} />
			</div>
		</ReportFilterBoardWrapper>
	);
};

TypeFilterBoard.propTypes = {
	handleReportDateRange: PropTypes.func,
	handleReportsSort: PropTypes.func,
	setFilteredReports: PropTypes.func,
	filterList: PropTypes.array,
	reportList: PropTypes.array,
	filteredReports: PropTypes.array,
};

export default TypeFilterBoard;

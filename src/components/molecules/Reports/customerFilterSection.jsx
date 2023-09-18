import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import { filterCustomers } from "./objects";
import ReportTabs from "../../atoms/Reports/tabs";
import { useDispatch, useSelector } from "react-redux";
import ReportSort from "../../atoms/Reports/sort";
import CustomerExportFiles from "../../atoms/Reports/customerExport";
import DateFilter from "../../atoms/Reports/datefilter";
import CustomerFilterBy from "../../atoms/Reports/customerFilter";
import ClearIcon from "@mui/icons-material/Clear";
import {
	removeMultipleCustomersFilterStatus,
	setMultipleCustomerDropdownFilterStatus,
} from "../../../state-manager/reducers/reports/customers/customers";

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

const CustomerFilterBoard = ({ handleReportDateRange, handleReportsSort, toggle, setToggle }) => {
	const { customerReport } = useSelector((state) => state.reports);
	const { filteredCustomers, multipleCustomerStatusFiltering } = useSelector(
		(state) => state.customerReports
	);

	const dispatch = useDispatch();

	const handleClick = (status) => {
		dispatch(removeMultipleCustomersFilterStatus(status));
		if (status === "active") {
			dispatch(setMultipleCustomerDropdownFilterStatus({ status: "active", title: "Active Customers" }));
		} else if (status === "inactive") {
			dispatch(
				setMultipleCustomerDropdownFilterStatus({
					status: "inactive",
					title: "Inactive Customers",
				})
			);
		} else if (status === "suspend") {
			dispatch(
				setMultipleCustomerDropdownFilterStatus({ status: "suspend", title: "Suspended Customers" })
			);
		}
	};

	return (
		<ReportFilterBoardWrapper>
			<div className="tab-sort">
				<ReportTabs></ReportTabs>
				<div className="sort">
					<ReportSort handleReportsSort={handleReportsSort} toggle={toggle} setToggle={setToggle} />
				</div>
			</div>

			<div className="filters">
				{customerReport && (
					<CustomerFilterBy dropItems={filterCustomers} filteredReports={filteredCustomers} />
				)}

				{customerReport && <CustomerExportFiles text={"Export Customers"} />}
			</div>

			<div className="date">
				<DateFilter handleReportDateRange={handleReportDateRange} />
			</div>

			<div className="status">
				{multipleCustomerStatusFiltering?.map((ticket) => (
					<span key={ticket} onClick={() => handleClick(ticket)}>
						{ticket} <ClearIcon />
					</span>
				))}
			</div>
		</ReportFilterBoardWrapper>
	);
};

CustomerFilterBoard.propTypes = {
	handleReportDateRange: PropTypes.func,
	handleReportsSort: PropTypes.func,
	setToggle: PropTypes.func,
	toggle: PropTypes.bool,
	filteredReports: PropTypes.array,
};

export default CustomerFilterBoard;

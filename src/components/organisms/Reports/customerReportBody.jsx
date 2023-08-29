import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReportNavigateButs from "../../molecules/Reports/reportNavigateSection";
import TypeFilterBoard from "../../molecules/Reports/reportFiltersSection";
import ReportCustomerTable from "../../molecules/Reports/reportCustomerTable";
import { getDateFromDateTime } from "../../../helpers/date-manipulation";
import {
	filterCustomers,
	sortFilteredCustomersByDate,
	filterCustomersByDate,
} from "../../../state-manager/reducers/reports/customers/customers";
import Placeholder from "../../molecules/general/Placeholder";
import CreateIcon from "@mui/icons-material/Create";

const CustomerReportBody = () => {
	const [toggle, setToggle] = useState(true);
	const { filteredCustomers, filteredCustomersByStatus, filteredCustomersByDate } = useSelector(
		(state) => state.customerReports
	);
	const dispatch = useDispatch();

	console.log({ filteredCustomers, filteredCustomersByStatus, filteredCustomersByDate })

	const handleCustomerDateRange = useCallback(
		(start, end) => {
			setToggle(true);

			if (start != "NaN-NaN-NaN" && end != "NaN-NaN-NaN") {
				if (filteredCustomersByStatus.length != 0) {
					const filteredDate = filteredCustomersByStatus.slice().filter((customer) => {
						const start_date = new Date(start);
						const end_date = new Date(end);
						const customer_start_date = new Date(getDateFromDateTime(customer.datetime));

						return customer_start_date >= start_date && customer_start_date <= end_date;
					});
	
					dispatch(filterCustomersByDate([...filteredDate]));
				}else {
					const filteredDate = filteredCustomers.slice().filter((customer) => {
						const start_date = new Date(start);
						const end_date = new Date(end);
						const customer_start_date = new Date(getDateFromDateTime(customer.datetime));
	
						return customer_start_date >= start_date && customer_start_date <= end_date;
					});
	
					dispatch(filterCustomers([...filteredDate]));
				}
			}
		},
		[filteredCustomers, filteredCustomersByStatus, dispatch]
	);

	const handleCustomersSort = (type) => {
		let sortedCustomers = null;

		if (filteredCustomersByStatus.length != 0 && filteredCustomersByDate.length === 0) {
			console.log("Status")
			sortedCustomers = filteredCustomersByStatus
				.slice()
				.sort((t1, t2) =>
					type === "ascending"
						? t1.company_name.toLowerCase().localeCompare(t2.company_name.toLowerCase())
						: t2.company_name.toLowerCase().localeCompare(t1.company_name.toLowerCase())
				);
			dispatch(sortFilteredCustomersByDate(sortedCustomers));
		} else if (filteredCustomersByDate.length != 0) {
			console.log("Date")
			sortedCustomers = filteredCustomersByDate
				.slice()
				.sort((t1, t2) =>
					type === "ascending"
						? t1.company_name.toLowerCase().localeCompare(t2.company_name.toLowerCase())
						: t2.company_name.toLowerCase().localeCompare(t1.company_name.toLowerCase())
				);
			dispatch(filterCustomersByDate(sortedCustomers));
		} else {
			console.log("Original List")
			sortedCustomers = filteredCustomers
				.slice()
				.sort((t1, t2) =>
					type === "ascending"
						? t1.company_name.toLowerCase().localeCompare(t2.company_name.toLowerCase())
						: t2.company_name.toLowerCase().localeCompare(t1.company_name.toLowerCase())
				);
			dispatch(filterCustomers(sortedCustomers));
		}
	};
	return (
		<>
			{(filteredCustomers.length != 0 && (
				<>
					<TypeFilterBoard
						handleReportDateRange={handleCustomerDateRange}
						handleReportsSort={handleCustomersSort}
						filteredReports={filteredCustomers}
						toggle={toggle}
						setToggle={setToggle}
					/>
					<ReportCustomerTable />
				</>
			)) || (
				<Placeholder
					messageHeader="seems you don’t have anything here yet!"
					messageParagraph="Once a report is generated for you, you will be able to view the data here."
				/>
			)}
		</>
	);
};

export default CustomerReportBody;

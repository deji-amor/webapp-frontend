import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReportNavigateButs from "../../molecules/Reports/reportNavigateSection";
import TypeFilterBoard from "../../molecules/Reports/reportFiltersSection";
import ReportTable from "../../molecules/Reports/reportTable";
import { getDateFromDateTime } from "../../../helpers/date-manipulation";
import Placeholder from "../../molecules/general/Placeholder";

const CustomerReportBody = () => {
	const [filteredCustomers, setFilteredCustomers] = useState([]);
	const { customers } = useSelector((state) => state.customers);
	// const [customer, setCustomer] = useState([])

	console.log(customers)
	const handleCustomerDateRange = useCallback(
		(start, end) => {
			if (filteredCustomers.length != 0) {
				const filteredDate = filteredCustomers.slice().filter((ticket) => {
					const start_date = new Date(start);
					const end_date = new Date(end);
					const ticket_start_date = new Date(getDateFromDateTime(ticket.start_date_time));

					return ticket_start_date >= start_date && ticket_start_date <= end_date;
				});

				setFilteredCustomers(filteredDate);
			} else {
				const filteredDate = customers.slice().filter((ticket) => {
					const start_date = new Date(start);
					const end_date = new Date(end);
					const ticket_start_date = new Date(getDateFromDateTime(ticket.start_date_time));

					return ticket_start_date >= start_date && ticket_start_date <= end_date;
				});

				setFilteredCustomers(filteredDate);
			}
		},
		[customers]
	);

	const handleCustomersSort = (type) => {
		let sortedTickets = null;
		if (filteredCustomers.length != 0) {
			if (type === "ascending") {
				console.log("Ascending");
				sortedTickets = filteredCustomers
					.slice()
					.sort((t1, t2) =>
						t1.start_date_time > t2.start_date_time
							? 1
							: t1.start_date_time < t2.start_date_time
							? -1
							: 0
					);
				setFilteredCustomers([...sortedTickets]);
			} else {
				console.log("Descending");
				sortedTickets = filteredCustomers
					.slice()
					.sort((t1, t2) =>
						t1.start_date_time > t2.start_date_time
							? -1
							: t1.start_date_time > t2.start_date_time
							? 1
							: 0
					);
				setFilteredCustomers([...sortedTickets]);
			}
		} else {
			if (type === "ascending") {
				console.log("Ascending");
				sortedTickets = customers
					.slice()
					.sort((t1, t2) =>
						t1.start_date_time > t2.start_date_time
							? 1
							: t1.start_date_time < t2.start_date_time
							? -1
							: 0
					);
				setFilteredCustomers([...sortedTickets]);
			} else {
				console.log("Descending");
				sortedTickets = customers
					.slice()
					.sort((t1, t2) =>
						t1.start_date_time < t2.start_date_time
							? -1
							: t1.start_date_time > t2.start_date_time
							? 1
							: 0
					);
				setFilteredCustomers([...sortedTickets]);
			}
		}
	};

	return (
		<>
			{(customers.length != 0 && (
				<>
					<TypeFilterBoard
						handleReportDateRange={handleCustomerDateRange}
						handleReportsSort={handleCustomersSort}
						filterList={filteredCustomers}
						reportList={customers}
						setFilteredReports={setFilteredCustomers}
						filteredReports={filteredCustomers.length != 0 ? filteredCustomers : customers}
					/>
					<ReportTable
						filteredReports={filteredCustomers.length != 0 ? filteredCustomers : customers}
					/>
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

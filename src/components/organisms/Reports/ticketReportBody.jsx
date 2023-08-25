import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TypeFilterBoard from "../../molecules/Reports/reportFiltersSection";
import ReportTable from "../../molecules/Reports/reportTable";
import { getDateFromDateTime } from "../../../helpers/date-manipulation";
import Placeholder from "../../molecules/general/Placeholder";

const TicketReportBody = () => {
	const [filteredTickets, setFilteredTickets] = useState([]);
	const { tickets } = useSelector((state) => state.tickets);
	const { reportTapIndex } = useSelector((state) => state.reports);

	console.log(reportTapIndex)

	const handleTicketDateRange = useCallback(
		(start, end) => {
			if (filteredTickets.length != 0) {
				const filteredDate = filteredTickets.slice().filter((ticket) => {
					const start_date = new Date(start);
					const end_date = new Date(end);
					const ticket_start_date = new Date(getDateFromDateTime(ticket.start_date_time));

					return ticket_start_date >= start_date && ticket_start_date <= end_date;
				});

				setFilteredTickets(filteredDate);
			} else {
				const filteredDate = tickets.slice().filter((ticket) => {
					const start_date = new Date(start);
					const end_date = new Date(end);
					const ticket_start_date = new Date(getDateFromDateTime(ticket.start_date_time));

					return ticket_start_date >= start_date && ticket_start_date <= end_date;
				});

				setFilteredTickets(filteredDate);
			}
		},
		[tickets]
	);

	const handleTicketsSort = (type) => {
		let sortedTickets = null;
		if (filteredTickets.length != 0) {
			if (type === "ascending") {
				console.log("Ascending");
				sortedTickets = filteredTickets
					.slice()
					.sort((t1, t2) =>
						t1.start_date_time > t2.start_date_time
							? 1
							: t1.start_date_time < t2.start_date_time
							? -1
							: 0
					);
				setFilteredTickets([...sortedTickets]);
			} else {
				console.log("Descending");
				sortedTickets = filteredTickets
					.slice()
					.sort((t1, t2) =>
						t1.start_date_time > t2.start_date_time
							? -1
							: t1.start_date_time > t2.start_date_time
							? 1
							: 0
					);
				setFilteredTickets([...sortedTickets]);
			}
		} else {
			if (type === "ascending") {
				console.log("Ascending");
				sortedTickets = tickets
					.slice()
					.sort((t1, t2) =>
						t1.start_date_time > t2.start_date_time
							? 1
							: t1.start_date_time < t2.start_date_time
							? -1
							: 0
					);
				setFilteredTickets([...sortedTickets]);
			} else {
				console.log("Descending");
				sortedTickets = tickets
					.slice()
					.sort((t1, t2) =>
						t1.start_date_time < t2.start_date_time
							? -1
							: t1.start_date_time > t2.start_date_time
							? 1
							: 0
					);
				setFilteredTickets([...sortedTickets]);
			}
		}
	};

	return (
		<>
			{(tickets.length != 0 && (
				<>
					<TypeFilterBoard
						handleReportDateRange={handleTicketDateRange}
						handleReportsSort={handleTicketsSort}
						// handleTicketsFilter={handleTicketsFilter}
						filterList={filteredTickets}
						reportList={tickets}
						setFilteredReports={setFilteredTickets}
						filteredReports={filteredTickets.length != 0 ? filteredTickets : tickets}
					/>
					{(reportTapIndex === 0 && (
						<ReportTable
							filteredReports={filteredTickets.length != 0 ? filteredTickets : tickets}
						/>
					)) ||
						(reportTapIndex === 1 && (
							<ReportTable
								filteredReports={[]}
							/>
						))}
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

export default TicketReportBody;

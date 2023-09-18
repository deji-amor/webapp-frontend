import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch, createDispatchHook } from "react-redux";
import TypeFilterBoard from "../../molecules/Reports/reportFiltersSection";
import ReportTicketTable from "../../molecules/Reports/reportTicketTable";
import { getDateFromDateTime } from "../../../helpers/date-manipulation";
import Placeholder from "../../molecules/general/Placeholder";
import {
	sortFilteredTicketsByDate,
	filterTicketsByDate,
	filterTickets,
} from "../../../state-manager/reducers/reports/tickets/ticketreport";

const TicketReportBody = () => {
	const [toggle, setToggle] = useState(true);
	const {
		filteredTickets: filteredT,
		filteredTicketsByDate: filteredTBD,
		filteredTicketsByStatus: filteredTBS,
		filteredProjectTickets,
		filteredProjectTicketsByDate,
		filteredProjectTicketsByStatus,
		reportTabIndex,
	} = useSelector((state) => state.ticketReports);
	const dispatch = useDispatch();

	const filteredTickets = reportTabIndex === 0 ? filteredT : filteredProjectTickets;
	const filteredTicketsByDate = reportTabIndex === 0 ? filteredTBD : filteredProjectTicketsByDate;
	const filteredTicketsByStatus =
		reportTabIndex === 0 ? filteredTBS : filteredProjectTicketsByStatus;

	const handleTicketDateRange = useCallback(	
		(start, end) => {
			setToggle(true);
			if (start != "NaN-NaN-NaN" && end != "NaN-NaN-NaN") {
				if (filteredTicketsByStatus.length != 0) {
					const filteredDate = filteredTicketsByStatus.slice().filter((ticket) => {
						const start_date = new Date(start);
						const end_date = new Date(end);
						const ticket_start_date = new Date(getDateFromDateTime(ticket.created_at));

						return ticket_start_date >= start_date && ticket_start_date <= end_date;
					});

					dispatch(filterTicketsByDate([...filteredDate]));
				} else {
					const filteredDate = filteredTickets.slice().filter((ticket) => {
						const start_date = new Date(start);
						const end_date = new Date(end);
						const ticket_start_date = new Date(getDateFromDateTime(ticket.created_at));

						return ticket_start_date >= start_date && ticket_start_date <= end_date;
					});

					dispatch(filterTicketsByDate([...filteredDate]));
				}
			}
		},
		[filteredTickets, filteredTicketsByStatus, dispatch]
	);

	const handleTicketsSort = (type) => {
		let sortedTickets = null;

		if (
			(filteredTicketsByStatus.length != 0 && filteredTicketsByDate.length != 0) ||
			(filteredTicketsByStatus.length != 0 && filteredTicketsByDate.length === 0)
		) {
			console.log("Ascending");
			if (type === "ascending") {
				sortedTickets = filteredTicketsByStatus
					.slice()
					.sort((t1, t2) =>
						t1.created_at > t2.created_at
							? 1
							: t1.created_at < t2.created_at
							? -1
							: 0
					);
				dispatch(sortFilteredTicketsByDate(sortedTickets));
			} else {
				sortedTickets = filteredTicketsByStatus
					.slice()
					.sort((t1, t2) =>
						t1.created_at > t2.created_at
							? -1
							: t1.created_at < t2.created_at
							? 1
							: 0
					);
				dispatch(sortFilteredTicketsByDate(sortedTickets));
			}
		} else if (filteredTicketsByDate.length != 0) {
			console.log("Ascending");
			if (type === "ascending") {
				sortedTickets = filteredTicketsByDate
					.slice()
					.sort((t1, t2) =>
						t1.created_at > t2.created_at
							? 1
							: t1.created_at < t2.created_at
							? -1
							: 0
					);
				dispatch(filterTicketsByDate(sortedTickets));
			} else {
				sortedTickets = filteredTicketsByDate
					.slice()
					.sort((t1, t2) =>
						t1.created_at > t2.created_at
							? -1
							: t1.created_at < t2.created_at
							? 1
							: 0
					);
				dispatch(filterTicketsByDate(sortedTickets));
			}
		} else {
			console.log("Descending");
			if (type === "ascending") {
				sortedTickets = filteredTickets
					.slice()
					.sort((t1, t2) =>
						t1.created_at > t2.created_at
							? 1
							: t1.created_at < t2.created_at
							? -1
							: 0
					);
				dispatch(filterTickets(sortedTickets));
			} else {
				sortedTickets = filteredTickets
					.slice()
					.sort((t1, t2) =>
						t1.created_at > t2.created_at
							? -1
							: t1.created_at < t2.created_at
							? 1
							: 0
					);
				dispatch(filterTickets(sortedTickets));
			}
		}
	};

	return (
		<>
			<TypeFilterBoard
				handleReportDateRange={handleTicketDateRange}
				handleReportsSort={handleTicketsSort}
				toggle={toggle}
				setToggle={setToggle}
			/>
			{(reportTabIndex === 0 && <ReportTicketTable />) || <ReportTicketTable />}
		</>
	);
};

export default TicketReportBody;

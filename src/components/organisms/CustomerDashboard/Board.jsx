import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import FilterBox from "./FilterBox";
import CustomerTicketTable from "./TicketTable";
import { ticketsActions } from "../../../state-manager/reducers/tickets/tickets";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "lodash";

const Board = () => {
	const [id, setId] = useState("");
	const [date, setDate] = useState("");
	const dispatch = useDispatch();

	const typeOptions = ["Project", "Service"];
	const statusOptions = ["Done", "Pending", "Technician enroute", "Inprogress"];

	const { filterCustomerTicketsByID, filterCustomerTicketsByDate } = ticketsActions;

	const {
		tickets,
		customerTicketId,
		customerTicketDate,
		isCustomerFiltered,
		isCustomerFilteredByDate,
		isCustomerFilteredByType,
		isCustomerFilteredByStatus,
		isCustomerFilteredById,
		filteredCustomerTicketsById,
		filteredCustomerTicketsByStatus,
		filteredCustomerTicketsByType,
		filteredCustomerTicketsByDate,
	} = useSelector((state) => state.tickets);

	const allTickets =
		isCustomerFiltered === false
			? tickets
			: isCustomerFilteredByDate && !isCustomerFilteredById
			? filteredCustomerTicketsByDate
			: isCustomerFilteredById
			? filteredCustomerTicketsById
			: [];

	const handleChangeByID = (e) => {
		setId(e.target.value);
	};

	const handleChangeByDate = (e) => {
		setDate(e.target.value);
	};

	useEffect(() => {
		if (id.length != 0) {
			dispatch(filterCustomerTicketsByID({ id }));
		} else {
			dispatch(filterCustomerTicketsByID({ id: "" }));
		}
	}, [dispatch, filterCustomerTicketsByID, id]);

	useEffect(() => {
		if (date.length != 0) {
			const symbol = date.includes("-");
			console.log(symbol)
			if (symbol) {
				dispatch(filterCustomerTicketsByDate({ date }));
			} else {
				let v;
				for (let x=0; x <= date.length; x++) {
					v = date.charAt(x)
					if (v === "/") {
					date[x] = "-"
					}
				}
				dispatch(filterCustomerTicketsByDate({ d }));
			}
		} else {
			dispatch(filterCustomerTicketsByDate({ date: "" }));
		}
	}, [dispatch, filterCustomerTicketsByDate, date]);

	console.log(tickets);

	return (
		<>
			<Box bgcolor="#fff" borderRadius="10px" p={3}>
				<FilterBox
					typeOptions={typeOptions}
					statusOptions={statusOptions}
					customerTicketId={customerTicketId}
					handleChangeByID={handleChangeByID}
					customerTicketDate={customerTicketDate}
					handleChangeByDate={handleChangeByDate}
					tickets={tickets}
				/>
			</Box>
			<CustomerTicketTable allTickets={allTickets} />
		</>
	);
};

export default Board;

// const handleFilterChange = (selectedTypes, selectedStatuses) => {
// 	console.log("Selected Types:", selectedTypes);
// 	console.log("Selected Statuses:", selectedStatuses);
// 	const filteredResults = tickets.filter((ticket) => {
// 		const isTypeMatch = selectedTypes.length === 0 || selectedTypes.includes(ticket.ticket_type);
// 		const isStatusMatch =
// 			selectedStatuses.length === 0 || selectedStatuses.includes(ticket.status);
// 		return isTypeMatch && isStatusMatch;
// 	});
// 	setFilteredTickets(filteredResults);
// };

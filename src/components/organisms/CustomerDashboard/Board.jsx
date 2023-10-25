import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import FilterBox from "./FilterBox";
import CustomerTicketTable from "./TicketTable";
import { useDispatch, useSelector } from "react-redux";

const Board = () => {
	const typeOptions = ["Project", "Service"];
	const statusOptions = ["All", "Done", "Pending", "Technician enroute", "Inprogress", "Overdue"];

	const [filteredTickets, setFilteredTickets] = useState([]);

	const { tickets } = useSelector((state) => state.tickets);

	const handleFilterChange = (selectedTypes, selectedStatuses) => {
		console.log("Selected Types:", selectedTypes);
		console.log("Selected Statuses:", selectedStatuses);

		const filteredResults = tickets.filter((ticket) => {
			const isTypeMatch = selectedTypes.length === 0 || selectedTypes.includes(ticket.ticket_type);
			const isStatusMatch =
				selectedStatuses.length === 0 || selectedStatuses.includes(ticket.status);

			return isTypeMatch && isStatusMatch;
		});

		setFilteredTickets(filteredResults);
	};

	return (
		<>
			<Box bgcolor="#fff" borderRadius="10px" p={3}>
				<FilterBox
					typeOptions={typeOptions}
					statusOptions={statusOptions}
					onFilterChange={handleFilterChange}
					tickets={tickets}
				/>
			</Box>
			<CustomerTicketTable filteredTickets={filteredTickets} />
		</>
	);
};

export default Board;

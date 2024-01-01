import React, { useMemo, useEffect } from "react";
import { UIActions } from "../../../../state-manager/reducers/UI/ui";
import { ticketDetailsActions } from "../../../../state-manager/reducers/tickets/ticketDetails";
import { ticketsActions } from "../../../../state-manager/reducers/tickets/tickets";
import TicketTypeTableHeading from "../../../atoms/Tickets/Typography/Headers/TicketTypeTableHeading";
import TicketRow from "./TicketRow";
import TicketsTablePagination from "./TicketsTablePagination";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, Select, MenuItem } from "@mui/material";

const SelectStatus = () => {
	const dispatch = useDispatch();
	const { filterByStatus, statuses } = useSelector((state) => state.tickets);

	const handleFilterChange = (status) => {
		dispatch(ticketsActions.updateField({ key: "filterByStatus", value: status }));
	};

	return (
		<FormControl size="small" className="">
			<Select
				value={filterByStatus}
				onChange={(e) => {
					handleFilterChange(e.target.value);
				}}
				sx={{
					border: "1px solid transparent",
					"& .MuiOutlinedInput-input": {
						borderColor: "#2b2e72",
					},
				}}
			>
				{statuses.map((status) => (
					<MenuItem key={status} value={status}>
						{status === "Technician enroute" ? "En route" : status}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

const TicketsTableBody = () => {
	const {
		searchTicketsValue,
		tickets,
		sortByAscending,
		currentPage,
		ticketsOnEachPage,
		ticketTabIndex,
		filterByStatus,
	} = useSelector((state) => state.tickets);

	const dispatch = useDispatch();
	const { error, successful, errorMessage, data } = useSelector((state) => state.ticketDetails);

	const filteredTickets = useMemo(() => {
		const filteredType = tickets.filter((ticket) => {
			if (+ticketTabIndex === 0) {
				return ticket.ticket_type === "service ticket";
			} else {
				return ticket.ticket_type === "project ticket";
			}
		});

		const filteredStatus = filteredType.filter((ticket) => {
			if (filterByStatus === "All") {
				return true;
			} else {
				return (
					ticket.status.toLowerCase().replace("-", "") ===
					filterByStatus.toLowerCase().replace("-", "")
				);
			}
		});

		const filteredSearchValue = filteredStatus.filter((ticket) => {
			if (!searchTicketsValue) return true;
			const key = Object.values(ticket).join(" ").toLowerCase();
			const inKey = key.includes(searchTicketsValue?.toLowerCase());
			return inKey;
		});

		let sortedTickets = filteredSearchValue.slice();
		if (sortByAscending) {
			sortedTickets = sortedTickets.reverse();
		}

		return sortedTickets;
	}, [searchTicketsValue, sortByAscending, tickets, ticketTabIndex, filterByStatus]);

	const paginatedTickets = useMemo(() => {
		const startPoint = (currentPage - 1) * ticketsOnEachPage;
		const endPoint = startPoint + ticketsOnEachPage;
		const paginatedTickets = filteredTickets.slice(startPoint, endPoint);

		return paginatedTickets;
	}, [currentPage, ticketsOnEachPage, filteredTickets]);

	useEffect(() => {
		if (successful) {
			dispatch(
				UIActions.showToasts({
					message: "You have successfully updated the ticket status",
					title: "Update Successful",
					type: "successful",
				})
			);
			dispatch(
				ticketDetailsActions.changeMultipleState([
					{ key: "error", value: null },
					{ key: "successful", value: null },
				])
			);
			dispatch(
				ticketsActions.replaceTicket(data)
			)
		}

		if (error) {
			dispatch(
				UIActions.showToasts({
					message: errorMessage,
					title: "Update failed",
					type: "error",
				})
			);
			dispatch(
				ticketDetailsActions.changeMultipleState([
					{ key: "error", value: null },
					{ key: "successful", value: null },
				])
			);
		}
	}, [error, successful, dispatch]);

	return (
		<div className="relative overflow-x-auto bg-white">
			<table className="w-full text-left rtl:text-right border-collapse">
				<thead className="">
					<tr className="border-b-2 border-b-[#ECECEC]">
						<th scope="col" className="pl-4 py-4">
							<TicketTypeTableHeading>Company Name</TicketTypeTableHeading>
						</th>
						<th scope="col" className="py-4 px-1">
							<TicketTypeTableHeading>Ticket Type</TicketTypeTableHeading>
						</th>
						<th scope="col" className="py-4 px-1">
							<TicketTypeTableHeading>Created By</TicketTypeTableHeading>
						</th>
						<th scope="col" className="py-4 px-1">
							<TicketTypeTableHeading>Status</TicketTypeTableHeading>
						</th>
						<th scope="col" className="py-4 px-1">
							<TicketTypeTableHeading>Start Date</TicketTypeTableHeading>
						</th>
						<th scope="col" className="py-4 px-1">
							<TicketTypeTableHeading className="flex">
								Filter By: <SelectStatus />
							</TicketTypeTableHeading>
						</th>
					</tr>
				</thead>
				<tbody>
					{paginatedTickets.map((ticket) => (
						<TicketRow key={ticket.id} ticket={ticket} />
					))}
				</tbody>
			</table>
			<TicketsTablePagination totalResults={filteredTickets?.length} />
		</div>
	);
};

export default TicketsTableBody;

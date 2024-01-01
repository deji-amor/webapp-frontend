import React, { useMemo } from 'react'
import TicketTypeTableHeading from '../../../atoms/Tickets/Typography/Headers/TicketTypeTableHeading';
import TicketRow from './TicketRow';
import TicketsTablePagination from './TicketsTablePagination';
import { useSelector, useDispatch } from 'react-redux';

const TicketsTableBody = () => {
	const { searchTicketsValue, tickets, sortByAscending, currentPage, ticketsOnEachPage } = useSelector(
		(state) => state.tickets
	);

	const filteredTickets = useMemo(() => {
		const filteredSearchValue = tickets.filter((ticket) => {
			if (!searchTicketsValue) return true;
			const key = Object.values(ticket).join(" ").toLowerCase();
			const inKey = key.includes(searchTicketsValue?.toLowerCase());
			return inKey;
		});

		console.log(filteredSearchValue);

		let sortedTickets = filteredSearchValue.slice();
		if (sortByAscending) {
			sortedTickets = sortedTickets.reverse();
		}

		return sortedTickets
	}, [searchTicketsValue, sortByAscending, tickets]);

	const paginatedTickets = useMemo(() => {
		const startPoint = (currentPage - 1) * ticketsOnEachPage;
		const endPoint = startPoint + ticketsOnEachPage;
		const paginatedTickets = filteredTickets.slice(startPoint, endPoint);

		return paginatedTickets
	}, [currentPage, ticketsOnEachPage, filteredTickets])

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
							<TicketTypeTableHeading>Filter By:</TicketTypeTableHeading>
						</th>
					</tr>
				</thead>
				<tbody>
					{paginatedTickets.map((ticket) => (
						<TicketRow key={ticket.id} ticket={ticket}/>
					))}
				</tbody>
			</table>
			<TicketsTablePagination totalResults={filteredTickets?.length} />
		</div>
	);
}

export default TicketsTableBody
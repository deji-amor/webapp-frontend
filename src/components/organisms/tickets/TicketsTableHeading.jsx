import React from 'react'
import RecentTicketsTableHeader from '../../atoms/Dashboard/RecentTicketsTableHeader';

const TicketsTableHeading = () => {
  return (
		<thead className="border-b-2 border-b-[#ECECEC]">
			<tr>
				<RecentTicketsTableHeader>Customer Name</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Ticket Type</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Created By</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Status</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Start Date</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Filter By:</RecentTicketsTableHeader>
			</tr>
		</thead>
	);
}

export default TicketsTableHeading
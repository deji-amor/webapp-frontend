import React from "react";
import RecentTicketsTableHeader from "../../atoms/Dashboard/RecentTicketsTableHeader";

const CustomerTicketTableHeadRow = (props) => {
	return (
		<thead className="border-b-2 border-b-[#ECECEC]">
			<tr>
				<RecentTicketsTableHeader>Ticket Title</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Ticket Type</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Ticket Description</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Ticket Start Date</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Ticket End Date</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Status</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Locations</RecentTicketsTableHeader>
			</tr>
		</thead>
	);
};

CustomerTicketTableHeadRow.propTypes = {};

export default CustomerTicketTableHeadRow;

import React from "react";
import RecentTicketsTableHeader from "../../atoms/Dashboard/RecentTicketsTableHeader";

const CustomerTicketTableHeadRow = (props) => {
	return (
		<thead className="border-b-2 border-b-[#ECECEC]">
			<tr>
				<RecentTicketsTableHeader>Ticket ID</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Ticket Type</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Category</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Updated on</RecentTicketsTableHeader>
				<RecentTicketsTableHeader>Status</RecentTicketsTableHeader>
			</tr>
		</thead>
	);
};

CustomerTicketTableHeadRow.propTypes = {};

export default CustomerTicketTableHeadRow;

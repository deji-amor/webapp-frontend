import React from "react";
import TicketTypeTableBodyText from "../../../atoms/Tickets/Typography/Paragraphs/TicketTypeTableBodyText";
import TicketStatusTablet from "../../../atoms/Tickets/Typography/Paragraphs/TicketStatusTablet";
import PropTypes from "prop-types";

const TicketRow = ({ ticket }) => {
	return (
		<tr className="border-b-2 border-b-[#ECECEC]">
			<td scope="ro" className="pl-4 py-4">
				<TicketTypeTableBodyText>Sevirox Manufacturing</TicketTypeTableBodyText>
			</td>
			<td scope="ro" className="py-4 px-1">
				<TicketTypeTableBodyText>Break Fix Maintenance</TicketTypeTableBodyText>
			</td>
			<td scope="ro" className="py-4 px-1">
				<TicketTypeTableBodyText>ASchevchenko@</TicketTypeTableBodyText>
			</td>
			<td scope="ro" className="py-4 px-1">
				<TicketStatusTablet>Done</TicketStatusTablet>
			</td>
			<td scope="ro" className="py-4 px-1">
				<TicketTypeTableBodyText>12/06/2023</TicketTypeTableBodyText>
			</td>
			<td scope="ro" className="py-4 px-1">
				<TicketTypeTableBodyText>Edit Ticket</TicketTypeTableBodyText>
			</td>
		</tr>
	);
};

TicketRow.propTypes = {
	ticket: PropTypes.object,
};

export default TicketRow;

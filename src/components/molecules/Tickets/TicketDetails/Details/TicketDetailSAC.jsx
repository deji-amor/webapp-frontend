import React from "react";
import PropTypes from "prop-types";
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailSAC = ({ ticket }) => {
	const { software_customization_quantity, software_customization_name } = ticket;

	return (
		<>
			<TicketDetailItem field="Software Customization Name" value={software_customization_name} />
			<TicketDetailItem
				field="Software Application Device(s)"
				value={software_customization_quantity}
			/>
		</>
	);
};

TicketDetailSAC.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailSAC;

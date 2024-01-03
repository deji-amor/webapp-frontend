import React from "react";
import PropTypes from "prop-types";
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailSAI = ({ ticket }) => {
	const { software_installation_quantity, software_installation_name } = ticket;

	return (
		<>
			<TicketDetailItem field="Software Application Name" value={software_installation_name} />
			<TicketDetailItem field="Software Application Device(s)" value={software_installation_quantity} />
		</>
	);
};

TicketDetailSAI.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailSAI;

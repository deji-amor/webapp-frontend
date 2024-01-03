import React from "react";
import PropTypes from "prop-types";
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailDOL = ({ ticket }) => {
	const { number_of_technicians } = ticket;

	return (
		<>
			<TicketDetailItem field="Number of Technicians" value={number_of_technicians} />
		</>
	);
};

TicketDetailDOL.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailDOL;

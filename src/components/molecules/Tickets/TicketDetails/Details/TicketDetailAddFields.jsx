import React from "react";
import PropTypes from "prop-types";
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailAddFields = ({ ticket }) => {
	const { number_of_technicians } = ticket;

	return (
		<>
			<TicketDetailItem field="Number of Technicians" value={number_of_technicians} />
		</>
	);
};

TicketDetailAddFields.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailAddFields;

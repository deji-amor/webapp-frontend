import React from "react";
import PropTypes from "prop-types";
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailPUL = ({ ticket }) => {
	const { number_of_technicians } = ticket;

	return (
		<>
			<TicketDetailItem field="Number of Technicians" value={number_of_technicians} />
		</>
	);
};

TicketDetailPUL.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailPUL;

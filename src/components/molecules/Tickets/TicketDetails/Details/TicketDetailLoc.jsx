import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailLoc = ({ticket}) => {
  const { number_of_technicians } = ticket;

	return (
		<>
			<TicketDetailItem field="Number of Technicians" value={number_of_technicians} />
		</>
	);
}

TicketDetailLoc.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailLoc
import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailMatPro = ({ticket}) => {
  const { number_of_technicians } = ticket;

	return (
		<>
			<TicketDetailItem field="Number of Technicians" value={number_of_technicians} />
		</>
	);
}

TicketDetailMatPro.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailMatPro
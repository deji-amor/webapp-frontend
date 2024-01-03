import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailMatPro = ({ticket}) => {
  const { materials_description } = ticket;

	return (
		<>
			<TicketDetailItem field="Materials" value={materials_description} />
		</>
	);
}

TicketDetailMatPro.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailMatPro
import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailMatPro = ({ticket}) => {
  const { materialsDescription } = ticket;

	return (
		<>
			<TicketDetailItem field="Materials" value={materialsDescription} />
		</>
	);
}

TicketDetailMatPro.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailMatPro
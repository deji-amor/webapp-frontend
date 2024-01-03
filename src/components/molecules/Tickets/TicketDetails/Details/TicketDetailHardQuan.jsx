import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailHardQuan = ({ticket}) => {
  const { hardware_quantity, hardware_name } = ticket;

	return (
		<>
			<TicketDetailItem field="Hardware Quantity" value={hardware_quantity} />
			<TicketDetailItem field="Hardware Name" value={hardware_name} />
		</>
	);
}

TicketDetailHardQuan.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailHardQuan
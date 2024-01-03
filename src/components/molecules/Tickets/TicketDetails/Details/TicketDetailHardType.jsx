import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailHardType = ({ticket}) => {
  const { hardware_component_type_list } = ticket;

	const hardwares = JSON.parse(hardware_component_type_list);

	return (
		<>
			<TicketDetailItem field="Number of Technicians" value={hardware_component_type_list} />
		</>
	);
}

TicketDetailHardType.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailHardType
import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailHardType = ({ticket}) => {
  const { hardware_component_type_list, hardware_component_type_quantity } = ticket;

	const hardwares = JSON.parse(hardware_component_type_list);
	const hardwaresAlt = hardwares.map((hardware, ind, arr) =>
		ind === arr.length - 1 ? `${hardware}.` : `${hardware}, `
	);

	return (
		<>
			<TicketDetailItem field="Hardware Component(s)" value={hardwaresAlt} />
			<TicketDetailItem
				field="Hardware Component(s) Quantity"
				value={hardware_component_type_quantity}
			/>
		</>
	);
}

TicketDetailHardType.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailHardType
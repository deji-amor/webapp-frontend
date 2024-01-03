import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailSOW = ({ticket}) => {
  const {scope_of_work_description} = ticket;

	return (
		<>
			<TicketDetailItem field="Scope of work Description" value={scope_of_work_description} />
		</>
	);
}

TicketDetailSOW.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailSOW
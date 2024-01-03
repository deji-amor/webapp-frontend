import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailNumSys = ({ticket}) => {
  const {  number_of_work_systems } = ticket;

	return (
		<>
			<TicketDetailItem field="Number of System(s)" value={ number_of_work_systems} />
		</>
	);
}

TicketDetailNumSys.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailNumSys
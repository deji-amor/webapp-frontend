import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailNumSta = ({ticket}) => {
  const {  number_of_work_station } = ticket;

	return (
		<>
			<TicketDetailItem field="Number of WorkStation(s)" value={ number_of_work_station} />
		</>
	);
}

TicketDetailNumSta.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailNumSta
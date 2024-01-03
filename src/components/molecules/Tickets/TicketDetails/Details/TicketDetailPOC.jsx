import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from '../TicketDetailItem'

const TicketDetailPOC = ({ticket}) => {
  const {point_of_contact_name, point_of_contact_phone_number, point_of_contact_address} = ticket

  return (
		<>
			<TicketDetailItem field="Point of contact name" value={point_of_contact_name} />
			<TicketDetailItem field="Point of contact Phone" value={point_of_contact_phone_number} />
			<TicketDetailItem field="Point of contact Address" value={point_of_contact_address} />
		</>
	);
}

TicketDetailPOC.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailPOC
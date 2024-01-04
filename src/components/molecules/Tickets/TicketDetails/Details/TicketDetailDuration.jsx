import React from 'react'
import PropTypes from 'prop-types'
import TicketDetailItem from "../TicketDetailItem";
import { format } from "date-fns";

export const formatDateString = (date) => {
		const inputDate = new Date(date);
		const formattedDate = format(inputDate, "dd-MM-yyyy/hh:mm a");

		return formattedDate
}

const TicketDetailDuration = ({ticket}) => {
  const { end_date_time, start_date_time, created_at } = ticket;

	return (
		<>
			<TicketDetailItem field="Creation Date/Time" value={formatDateString(created_at)} />
			<TicketDetailItem field="Start Date/Time" value={formatDateString(start_date_time)} />
			<TicketDetailItem field="End Date/Time" value={formatDateString(end_date_time)} />
		</>
	);
}

TicketDetailDuration.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailDuration

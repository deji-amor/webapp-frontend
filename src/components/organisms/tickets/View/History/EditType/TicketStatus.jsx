import React from "react";
import PropTypes from "prop-types";
import { TicketStatusText1, TicketStatusText2, TicketStatusText3, Arrow } from "../TicketStatusText";
import { formatDateAndTime } from "../log-date-format";

const TicketStatus = ({ log }) => {
	const { old_details, new_details, email, datetime } = log;

	return (
		<div className="">
			<div className="">
				<TicketStatusText3>{email}</TicketStatusText3>{" "}
				<TicketStatusText2>updated the</TicketStatusText2>{" "}
				<TicketStatusText3>status</TicketStatusText3>
			</div>
			<div className="">
				<TicketStatusText1>{formatDateAndTime(datetime).date}</TicketStatusText1>{" "}
				<TicketStatusText2>at</TicketStatusText2>{" "}
				<TicketStatusText3>{formatDateAndTime(datetime).time}</TicketStatusText3>{" "}
			</div>
			<div className="">
				<TicketStatusText3>{old_details}</TicketStatusText3>{" "}
				<span> <Arrow/> </span>{" "}
				<TicketStatusText3>{new_details}</TicketStatusText3>{" "}
			</div>
		</div>
	);
};

TicketStatus.propTypes = {
	log: PropTypes.object,
};

export default TicketStatus;

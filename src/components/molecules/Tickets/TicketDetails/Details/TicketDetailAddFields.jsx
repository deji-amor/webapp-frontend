import React from "react";
import PropTypes from "prop-types";
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailAddFields = ({ ticket }) => {
	const { additional_fields } = ticket;

	const fields = JSON.parse(additional_fields)

	return (
		<>
			{fields.map((field, ind) => (
				<TicketDetailItem
					key={Object.entries(field)[ind][0]}
					field={Object.entries(field)[ind][0]}
					value={Object.entries(field)[ind][1]}
				/>
			))}
		</>
	);
};

TicketDetailAddFields.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailAddFields;

import React from "react";
import PropTypes from "prop-types";
import TicketDetailItem from "../TicketDetailItem";

const TicketDetailAddFields = ({ ticket }) => {
	const { additional_fields } = ticket;

	const fields = JSON.parse(additional_fields)
	console.log(fields);

	console.log(Object.values(fields));

	return (
		<>
			{fields.map((field, ind) => (
				<TicketDetailItem
					key={Object.keys(field)[0]}
					field={Object.keys(field)[0]}
					value={Object.values(field)[0]}
				/>
			))}
		</>
	);
};

TicketDetailAddFields.propTypes = {
	ticket: PropTypes.object,
};

export default TicketDetailAddFields;

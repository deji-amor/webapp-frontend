import React from "react";
import PropTypes from "prop-types";
import HistoryTicketMessage from "./HistoryTicketMessage";
import HistoryTicketDate from "./HistoryTicketDate";
import HistoryTicketValueChange from "./HistoryTicketValueChange";
import { isEqual, isObject, intersection, pickBy } from "lodash";
import { formatDate } from "../Details/components/Duration";
import { v4 } from "uuid";

function isJSONString(str) {
	try {
		JSON.parse(str);
		return true;
	} catch (e) {
		return false;
	}
}

function convertDate(dateString) {
	const date = new Date(dateString);
	const formattedDate = date.toISOString().slice(0, -5); // Remove seconds and milliseconds
	return formattedDate;
}

const HistoryItem = ({ log }) => {
	const { old_details, new_details, datetime, edit_type, email } = log;

	const isOldDetailsAnObject = isJSONString(old_details) && isObject(JSON.parse(old_details));
	const isNewDetailsAnObject = isJSONString(new_details) && isObject(JSON.parse(new_details));

		// if (edit_type === "ticket-edit") return <></>

		if (isOldDetailsAnObject || isNewDetailsAnObject) {
			const oldDetails = JSON.parse(old_details);
			if (oldDetails.start_date_time) {
				oldDetails.start_date_time = formatDate(convertDate(oldDetails.start_date_time), false);
			}
			if (oldDetails.end_date_time) {
				oldDetails.end_date_time = formatDate(convertDate(oldDetails.end_date_time), false);
			}
			const newDetails = JSON.parse(new_details);
			if (newDetails.start_date_time) {
				newDetails.start_date_time = formatDate(convertDate(newDetails.start_date_time), false);
			}
			if (newDetails.end_date_time) {
				newDetails.end_date_time = formatDate(convertDate(newDetails.end_date_time), false);
			}
			const commonKeys = intersection(Object.keys(oldDetails), Object.keys(newDetails));
			const differences = pickBy(
				newDetails,
				(value, key) => !isEqual(value, oldDetails[key]) && commonKeys.includes(key)
			);
			const changedKeys = Object.keys(differences);
			// console.log(changedKeys);
			// console.log(differences);
			// console.log(commonKeys);
			// console.log(oldDetails);
			// console.log(newDetails);

			return changedKeys.map((key) => {
				return (
					<HistoryItem
						key={v4()}
						log={{
							...log,
							edit_type: key.replaceAll("_", " "),
							old_details: oldDetails[key],
							new_details: newDetails[key],
						}}
					/>
				);
			});
		}

	return (
		<div className="w-full max-w-full">
			<HistoryTicketMessage
				email={email}
				field={edit_type.replace("ticket-", " ")}
			></HistoryTicketMessage>
			<HistoryTicketDate timeStamp={datetime}></HistoryTicketDate>
			<HistoryTicketValueChange
				prevValue={old_details}
				newValue={new_details}
			></HistoryTicketValueChange>
		</div>
	);
};

HistoryItem.propTypes = {
	log: PropTypes.shape({
		id: PropTypes.number.isRequired,
		user_id: PropTypes.number.isRequired,
		old_details: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.any]).isRequired,
		new_details: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.any]).isRequired,
		edit_type: PropTypes.string.isRequired,
		identification_id: PropTypes.number.isRequired,
		datetime: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
	}),
};

export default HistoryItem;

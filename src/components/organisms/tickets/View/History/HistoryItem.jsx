import React from "react";
import PropTypes from "prop-types";
import HistoryTicketMessage from "./HistoryTicketMessage";
import HistoryTicketDate from "./HistoryTicketDate";
import HistoryTicketValueChange from "./HistoryTicketValueChange";
import { omitBy, isEqual, reduce, isObject, intersection, pick } from "lodash";
import { useSelector } from "react-redux";
import { v4 } from "uuid";

function isJSONString(str) {
	try {
		JSON.parse(str);
		return true;
	} catch (e) {
		return false;
	}
}

function compareValues(value1, value2) {
	const valuesToExclude = [null, undefined, "null", "undefined"];
	if (valuesToExclude.includes(value1) || valuesToExclude.includes(value2)) {
		return true;
	}
	if (typeof value1 === "number" || typeof value1 === "string") {
		return value1 == value2; // Using loose equality
	}
	return isEqual(value1, value2);
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
  // console.log(log);
  // console.log(old_details, new_details);
  // console.log(isOldDetailsAnObject, isNewDetailsAnObject);

	if (isOldDetailsAnObject || isNewDetailsAnObject) {
		const oldDetails = JSON.parse(old_details);
		// old_details.start_date_time = convertDate(old_details.start_date_time);
		// old_details.end_date_time = convertDate(old_details.end_date_time);
    const newDetails = JSON.parse(new_details);

		const newDetailsModified = {
			id: oldDetails.id,
			user_id: oldDetails.user_id,
			workspace_id: oldDetails.workspace_id,
			ticket_type: newDetails.ticketType,
			ticket_form: newDetails.ticketForm,
			ticket_path: newDetails.ticketPath,
			point_of_contact_name: newDetails.pointOfContactName,
			point_of_contact_phone_number: newDetails.pointOfContactPhoneNumber,
			point_of_contact_address: newDetails.pointOfContactAddress,
			number_of_technicians: newDetails.numberOfTechnicians,
			scope_of_work_description: newDetails.scopeOfWorkDescription,
			scope_of_work_document: newDetails.scopeOfWorkDocument,
			start_date_time: newDetails.startDateTime,
			end_date_time: newDetails.endDateTime,
			hardware_quantity: newDetails.hardwareQuantity,
			hardware_name: newDetails.hardwareName,
			hardware_component_type_list: newDetails.hardwareComponentTypeList,
			hardware_component_type_quantity: newDetails.hardwareComponentTypeQuantity,
			locations: newDetails.locations,
			materials_description: newDetails.materialsDescription,
			number_of_work_station: newDetails.numberOfWorkStation,
			number_of_work_systems: newDetails.numberOfWorkSystems,
			software_customization_quantity: newDetails.softwareCustomizationQuantity,
			software_customization_name: newDetails.softwareCustomizationName,
			software_installation_quantity: newDetails.softwareInstallationQuantity,
			software_installation_name: newDetails.softwareInstallationName,
			pick_locations: newDetails.pickLocations,
			drop_off_locations: newDetails.dropOffLocations,
			customer_id: newDetails.customerId,
			additional_fields: newDetails.additionalFields.map(({ name, value }) => ({ [name]: value })),
		};

		const similarKeys = intersection(Object.keys(oldDetails), Object.keys(newDetailsModified));
		// console.log(similarKeys);
		const commonOldDetails = pick(oldDetails, similarKeys)
		const commonNewDetails = pick(newDetailsModified, similarKeys)
		// console.log({commonOldDetails, commonNewDetails});

		const differences = omitBy(commonNewDetails, (value, key) => compareValues(value, commonOldDetails[key]));
    // console.log(differences); 
		// // console.log({ oldDetails, newDetails });

		const diffArray = Object.keys(differences).map((key) => ({
			[key]: [commonOldDetails[key], commonNewDetails[key]],
		}));

		console.log(diffArray);

		return diffArray.map((item) => {
      return (
				<HistoryItem
					key={v4()}
					log={{
						...log,
						old_details: Object.entries(item)[0][1][0],
						new_details: Object.entries(item)[0][1][1],
					}}
				/>
			);
		});
	}

	return (
		<div>
			<HistoryTicketMessage
				email={email}
				field={edit_type.replace("-", " ")}
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
		old_details: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
		new_details: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
		edit_type: PropTypes.string.isRequired,
		identification_id: PropTypes.number.isRequired,
		datetime: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
	}),
};

export default HistoryItem;

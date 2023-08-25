import React from "react";
import PropTypes from "prop-types";
import HistoryTicketMessage from "./HistoryTicketMessage";
import HistoryTicketDate from "./HistoryTicketDate";
import HistoryTicketValueChange from "./HistoryTicketValueChange";
import { omitBy, isEqual, reduce, isObject } from "lodash";
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

const HistoryItem = ({ log }) => {
	const users = useSelector((state) => state.users.users);
	const user = users.find((user) => +user.id === +log.id);
	const { email } = user;
	const { old_details, new_details, datetime, edit_type } = log;

	const isOldDetailsAnObject = isJSONString(old_details) && isObject(JSON.parse(old_details));
	const isNewDetailsAnObject = isJSONString(new_details) && isObject(JSON.parse(new_details));
  // console.log(log);
  // console.log(old_details, new_details);
  // console.log(isOldDetailsAnObject, isNewDetailsAnObject);

	if (isOldDetailsAnObject || isNewDetailsAnObject) {
		const oldDetails = JSON.parse(old_details);
    const newDetailsParsed = JSON.parse(new_details);
    console.log(oldDetails, newDetailsParsed);
		const newDetails = {
			id: oldDetails.id,
			user_id: newDetailsParsed.userId,
			workspace_id: newDetailsParsed.workspaceId,
			ticket_type: newDetailsParsed.ticketType,
			ticket_form: newDetailsParsed.ticketForm,
			ticket_path: newDetailsParsed.ticketPath,
			point_of_contact_name: newDetailsParsed.pointOfContactName,
			point_of_contact_phone_number: newDetailsParsed.pointOfContactPhoneNumber,
			point_of_contact_address: newDetailsParsed.pointOfContactAddress,
			number_of_technicians: newDetailsParsed.numberOfTechnicians,
			scope_of_work_description: newDetailsParsed.scopeOfWorkDescription,
			scope_of_work_document: newDetailsParsed.scopeOfWorkDocument,
			start_date_time: newDetailsParsed.startDateTime,
			end_date_time: newDetailsParsed.endDateTime,
			hardware_quantity: newDetailsParsed.hardwareQuantity,
			hardware_name: newDetailsParsed.hardwareName,
			hardware_component_type_list: newDetailsParsed.hardwareComponentTypeList,
			hardware_component_type_quantity: newDetailsParsed.hardwareComponentTypeQuantity,
			locations: newDetailsParsed.locations,
			materials_description: newDetailsParsed.materialsDescription,
			number_of_work_station: newDetailsParsed.numberOfWorkStation,
			number_of_work_systems: newDetailsParsed.numberOfWorkSystems,
			software_customization_quantity: newDetailsParsed.softwareCustomizationQuantity,
			software_customization_name: newDetailsParsed.softwareCustomizationName,
			software_installation_quantity: newDetailsParsed.softwareInstallationQuantity,
			software_installation_name: newDetailsParsed.softwareInstallationName,
			pick_locations: newDetailsParsed.pickLocations,
			drop_off_locations: newDetailsParsed.dropOffLocations,
			customer_id: newDetailsParsed.customerId,
			additional_fields: newDetailsParsed.additionalFields,
			status: newDetailsParsed.status,
			created_at: newDetailsParsed.createdAt,
		};

		const differences = omitBy(newDetails, (value, key) => isEqual(value, oldDetails[key]));
    // console.log(differences);
		// console.log({ oldDetails, newDetails });

		const diffArray = Object.keys(differences).map((key) => ({
			[key]: [oldDetails[key], newDetails[key]],
		}));

		return diffArray.map((array, ind) => {
      return (
				<HistoryItem key={v4()} log={{ ...log, old_details: array[0], new_details: array[1] }} />
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

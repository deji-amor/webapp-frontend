import React from "react";
import PropTypes from "prop-types";
import { omitBy, isEqual } from "lodash";
import {
	TicketStatusText1,
	TicketStatusText2,
	TicketStatusText3,
	Arrow,
} from "../TicketStatusText";
import { formatDateAndTime } from "../log-date-format";
import { extractFileName } from "../../../../../aws/aws-crud-operations";

const newFieldNames = {
	id: "ID",
	user_id: "User ID",
	workspace_id: "Workspace Id",
	ticket_type: "project ticket",
	ticket_form: "alter the end",
	ticket_path: '["Project request","IMAC","Move","alter the end"]',
	point_of_contact_name: "Point Of Contact Name",
	point_of_contact_phone_number: "Point Of Contact Number",
	point_of_contact_address: "Point Of Contact Address",
	number_of_technicians: "Number of Technician",
	scope_of_work_description: "Scope of Work Description",
	scope_of_work_document: "Scope of Work Document",
	start_date_time: "Start Date Time",
	end_date_time: "End Date Time",
	hardware_quantity: "Hardware Quantity",
	hardware_name: "Hardware Name",
	hardware_component_type_list: "Hardware component(s)",
	hardware_component_type_quantity: "Hardware Quantity",
	locations: "Locations",
	materials_description: "Material Description",
	number_of_work_station: "Number of Work Station",
	number_of_work_systems: "Number of Work System",
	software_customization_quantity: "Software Customization Quantity",
	software_customization_name: "Software Customization Quantity",
	software_installation_quantity: "Software Installation Quantity",
	software_installation_name: "Software Installation Quantity",
	pick_locations: "Pick Up Locations",
	drop_off_locations: "Drop Off Locations",
	customer_id: "Customer ID",
	additional_fields: "Additional Fields",
	status: "Status",
	created_at: "Created At",
	first_name: "First Name",
	last_name: "Last name",
	email: "Email",
	phone_number: "Phone Number",
	country: "Country",
	city: "City",
	user_type: "User Type",
	company_name: "Company name",
};

const fieldContainsArrays = {
	hardware_component_type_list: true,
	locations: true,
	additional_fields: true,
	pick_locations: true,
	drop_off_locations: true
};

const TicketEdit = ({ log }) => {
	const { old_details, new_details, email, datetime } = log;
	const excludedKeys = [];
	const oldDetails = JSON.parse(old_details);
	const newDetails = JSON.parse(new_details);

	const difference = omitBy(
		newDetails,
		(value, key) => isEqual(value, oldDetails[key]) && !excludedKeys.includes(key)
	);

	const fieldLogs = Object.keys(difference);
  console.log(fieldLogs);

	return (
		<>
			{fieldLogs.map((fieldLog) => {
        let oldD = oldDetails[fieldLog]
        let newD = newDetails[fieldLog]

        if (fieldLog === "scope_of_work_document"){
						oldD = extractFileName(oldD);
						newD = extractFileName(newD);
        }
        
					if (fieldContainsArrays[fieldLog]) {
            if(Array.isArray(oldD) && Array.isArray(newD)){
              oldD = JSON.stringify(oldD)?.replaceAll(`"`, "")?.replace("[{", "")?.replace("}]", "")?.replace(" ,", ", ")
              newD = JSON.stringify(oldD)?.replaceAll(`"`, "")?.replace("[{", "")?.replace("}]", "")?.replace(" ,", ", ")
            }
					}

				return (
					<div key={fieldLog} className="max-w-full w-full overflow-x-hidden">
						<div className="">
							<TicketStatusText3>{email}</TicketStatusText3>{" "}
							<TicketStatusText2>updated the field</TicketStatusText2>{" "}
							<TicketStatusText3>{newFieldNames[fieldLog]}</TicketStatusText3>
						</div>
						<div className="">
							<TicketStatusText1>{formatDateAndTime(datetime).date}</TicketStatusText1>{" "}
							<TicketStatusText2>at</TicketStatusText2>{" "}
							<TicketStatusText3>{formatDateAndTime(datetime).time}</TicketStatusText3>{" "}
						</div>
						<div className="">
							<TicketStatusText3>
								{oldD || <span className="border-b-2 border-b-[#2B2E72] w-6 inline-block"></span>}
							</TicketStatusText3>{" "}
							<span>
								<Arrow />
							</span>
							<TicketStatusText3 className="">
								{newD || <span className="border-b-2 border-b-[#2B2E72] w-6 inline-block"></span>}
							</TicketStatusText3>{" "}
						</div>
					</div>
				);
			})}
		</>
	);
};

TicketEdit.propTypes = {
	log: PropTypes.object,
};

export default TicketEdit;

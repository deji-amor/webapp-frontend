import React from "react";
import { useSelector} from "react-redux";
import { allRequiredFields } from "../state-manager/reducers/tickets/ticketCreation";

const useCreateTicketFields = () => {
	const chosenTemplate = useSelector((state) => state.ticketCreation.chosenTemplate);
  const { pathToTemplate } = useSelector((state) => state.ticketCreation);
	const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);

	const {
		pointOfContactName,
		pointOfContactPhoneNumber,
		pointOfContactAddress,
		numberOfTechnicians,
		scopeOfWorkDescription,
		scopeOfWorkDocument,
		startDateTime,
		endDateTime,
		hardwareQuantity,
		hardwareName,
		hardwareComponentTypeQuantityValue,
		hardwareComponentTypeQuantityName,
		locations,
		materialsDescription,
		numberOfWorkstation,
		numberOfWorkSystems,
		softwareInstallationQuantity,
		softwareInstallationName,
		softwareCustomizationQuantity,
		softwareCustomizationName,
		pickLocations,
		dropOffLocations,
		additionalFields,
	} = allPossibleFields;

	const initialValue = {
		...allRequiredFields,
		ticketType: pathToTemplate.at(0) === "Project Tickets" ? "project ticket" : "service ticket",
		ticketPath: pathToTemplate,
		ticketForm: pathToTemplate.at(-1),
		customerId: +allPossibleFields.customerId,
	};

	const fields = chosenTemplate.reduce(
		(previousValue, currentSection) => {
			if (currentSection === "pointOfContact") {
				return {
					...previousValue,
					pointOfContactName,
					pointOfContactPhoneNumber,
					pointOfContactAddress,
				};
			}
			if (currentSection === "numberOfTechniciansNeeded") {
				return {
					...previousValue,
					numberOfTechnicians: +numberOfTechnicians,
				};
			}
			if (currentSection === "scopeOfWork") {
				return {
					...previousValue,
					scopeOfWorkDescription,
					scopeOfWorkDocument,
				};
			}
			if (currentSection === "duration") {
				return {
					...previousValue,
					startDateTime,
					endDateTime,
				};
			}
			if (currentSection === "hardwareComponentQuantity") {
				return {
					...previousValue,
					hardwareQuantity,
					hardwareName,
				};
			}
			if (currentSection === "hardwareComponentType") {
				return {
					...previousValue,
					hardwareQuantity: hardwareComponentTypeQuantityValue,
					hardwareName: hardwareComponentTypeQuantityName,
				};
			}
			if (currentSection === "location") {
				return {
					...previousValue,
					locations,
					pickLocations: [],
					dropOffLocations: [],
				};
			}
			if (currentSection === "materialsProcurement") {
				return {
					...previousValue,
					materialsDescription,
				};
			}
			if (currentSection === "numberOfWorkStation") {
				return {
					...previousValue,
					numberOfWorkstation,
				};
			}
			if (currentSection === "numberOfWorkSystems") {
				return {
					...previousValue,
					numberOfWorkSystems,
				};
			}
			if (currentSection === "softwareApplicationInstallation") {
				return {
					...previousValue,
					softwareInstallationQuantity,
					softwareInstallationName,
				};
			}
			if (currentSection === "softwareApplicationCustomization") {
				return {
					...previousValue,
					softwareCustomizationQuantity,
					softwareCustomizationName,
				};
			}
			if (currentSection === "pickUpLocation") {
				return {
					...previousValue,
					pickLocations,
					locations: [],
				};
			}
			if (currentSection === "dropOffLocation") {
				return {
					...previousValue,
					dropOffLocations,
					locations: [],
				};
			}
			if (currentSection === "additionalFields") {
				const newAdditionalFields = additionalFields.map(({ name, value }) => ({ [name]: value }));
				return {
					...previousValue,
					additionalFields: newAdditionalFields,
				};
			}
			return { ...previousValue };
		},
		initialValue
	);
	return fields;
};

export default useCreateTicketFields;

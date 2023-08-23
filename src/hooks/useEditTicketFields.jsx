import React from "react";
import { useSelector } from "react-redux";
import { allRequiredFields } from "../state-manager/reducers/tickets/ticketCreation";

const useEditTicketFields = () => {
	const chosenTemplate = useSelector((state) => state.ticketEdition.chosenTemplate);
	const { pathToTemplate } = useSelector((state) => state.ticketEdition);
	const allPossibleFields = useSelector((state) => state.ticketEdition.allPossibleFields);

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

	const mapFields = {
		pointOfContact: {
			pointOfContactName,
			pointOfContactPhoneNumber,
			pointOfContactAddress,
		},
		numberOfTechniciansNeeded: {
			numberOfTechnicians: +numberOfTechnicians,
		},
		scopeOfWork: {
			scopeOfWorkDescription,
			scopeOfWorkDocument,
		},
		duration: {
			startDateTime,
			endDateTime,
		},
		hardwareComponentQuantity: {
			hardwareQuantity,
			hardwareName,
		},
		hardwareComponentType: {
			hardwareQuantity: hardwareComponentTypeQuantityValue,
			hardwareName: hardwareComponentTypeQuantityName,
		},
		location: {
			locations,
			pickLocations: [],
			dropOffLocations: [],
		},
		materialsProcurement: {
			materialsDescription,
		},
		numberOfWorkStation: {
			numberOfWorkstation,
		},
		numberOfWorkSystems: {
			numberOfWorkSystems,
		},
		softwareApplicationInstallation: {
			softwareInstallationQuantity,
			softwareInstallationName,
		},
		softwareApplicationCustomization: {
			softwareCustomizationQuantity,
			softwareCustomizationName,
		},
		pickUpLocation: {
			pickLocations,
			locations: [],
		},
		dropOffLocation: {
			dropOffLocations,
			locations: [],
		},
		additionalFields: {
			additionalFields: additionalFields,
		},
	};

	const initialValue = {
		...allRequiredFields,
		ticketType: pathToTemplate.at(0) === "Project Tickets" ? "project ticket" : "service ticket",
		ticketPath: pathToTemplate,
		ticketForm: pathToTemplate.at(-1),
		customerId: +allPossibleFields.customerId,
	};

	const fields = chosenTemplate.reduce((previousValue, currentSection) => {
		const sectionFields = mapFields[currentSection] || {};
		return {
			...previousValue,
			...sectionFields,
		};
	}, initialValue);

	return fields;
};

export default useEditTicketFields;

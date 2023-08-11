import React from "react";
import { useSelector } from "react-redux";

const useCreateTicketFormValidator = () => {
	const chosenTemplate = useSelector((state) => state.ticketCreation.chosenTemplate);
	const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);

	const {
		pointOfContactNameIsValid,
		pointOfContactPhoneNumberIsValid,
		pointOfContactAddressIsValid,
		scopeOfWorkDescriptionIsValid,
		hardwareComponentTypeQuantityNameIsValid,
		hardwareComponentTypeListIsValid,
		locationsAddressIsValid,
		materialsDescriptionIsValid,
		softwareInstallationNameIsValid,
		softwareCustomizationNameIsValid,
		pickLocationsAddressIsValid,
		dropOffLocationsAddressIsValid,
		additionalFieldsIsValid,
	} = allPossibleFields;

	const isFormValid = chosenTemplate.every((currentSection) => {
		switch (currentSection) {
			case "pointOfContact":
				return (
					pointOfContactNameIsValid &&
					pointOfContactPhoneNumberIsValid &&
					pointOfContactAddressIsValid
				);

			case "numberOfTechniciansNeeded":
			case "duration":
			case "numberOfWorkStation":
			case "numberOfWorkSystems":
				return true;

			case "scopeOfWork":
				return scopeOfWorkDescriptionIsValid;

			case "hardwareComponentQuantity":
				return hardwareComponentTypeQuantityNameIsValid;

			case "hardwareComponentType":
				return hardwareComponentTypeListIsValid;

			case "location":
				return locationsAddressIsValid;

			case "materialsProcurement":
				return materialsDescriptionIsValid;

			case "softwareApplicationInstallation":
				return softwareInstallationNameIsValid;

			case "softwareApplicationCustomization":
				return softwareCustomizationNameIsValid;

			case "pickUpLocation":
				return pickLocationsAddressIsValid;

			case "dropOffLocation":
				return dropOffLocationsAddressIsValid;

			case "additionalFields":
				return additionalFieldsIsValid;

			default:
				return true;
		}
	});

	return isFormValid;
};

export default useCreateTicketFormValidator;

import React from "react";
import { useSelector } from "react-redux";

const useEditTicketFormValidator = () => {
	const chosenTemplate = useSelector((state) => state.ticketEdition.chosenTemplate);
	const allPossibleFields = useSelector((state) => state.ticketEdition.allPossibleFields);

	const {
		pointOfContactNameIsValid,
		pointOfContactPhoneNumberIsValid,
		pointOfContactAddressIsValid,
		pointOfContactAddress,
		scopeOfWorkDescriptionIsValid,
		durationIsValid,
		hardwareComponentTypeListIsValid,
		hardwareNameIsValid,
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
					(pointOfContactAddress ? pointOfContactAddressIsValid : true)
				);

			case "numberOfTechniciansNeeded":
			case "numberOfWorkStation":
			case "numberOfWorkSystems":
				return true;

			case "duration":
				return durationIsValid;

			case "scopeOfWork":
				return scopeOfWorkDescriptionIsValid;

			case "hardwareComponentQuantity":
				return hardwareNameIsValid;

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

export default useEditTicketFormValidator;

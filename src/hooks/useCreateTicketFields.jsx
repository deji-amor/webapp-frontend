import React from "react";
import { useSelector, useDispatch } from "react-redux";

const useCreateTicketFields = () => {
	const chosenTemplate = useSelector((state) => state.ticketCreation.chosenTemplate);
  const { pathToTemplate } = useSelector((state) => state.ticketCreation);
	const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);

	const fields = chosenTemplate.reduce(
		(previousValue, currentSection) => {
			if (currentSection === "pointOfContact") {
				const { pointOfContactName, pointOfContactPhoneNumber, pointOfContactAddress } = allPossibleFields;
				return {
					...previousValue,
					pointOfContactName,
					pointOfContactPhoneNumber,
					pointOfContactAddress,
				};
			}
			if (currentSection === "numberOfTechniciansNeeded") {
				const { numberOfTechnicians } = allPossibleFields;
				return {
					...previousValue,
					numberOfTechnicians,
				};
			}
			if (currentSection === "scopeOfWork") {
				const { scopeOfWorkDescription, scopeOfWorkDocument } = allPossibleFields;
				return {
          ...previousValue,
          scopeOfWorkDescription,
          scopeOfWorkDocument
        }
			}
			if (currentSection === "duration") {
				const { startDateTime, endDateTime } = allPossibleFields;
				return {
          ...previousValue,
          startDateTime,
          endDateTime
        }
			}
			if (currentSection === "hardwareComponentQuantity") {
				const { startDateTime, endDateTime } = allPossibleFields;
				return {
					...previousValue,
					startDateTime,
					endDateTime,
				};
			}
			if (currentSection === "hardwareComponentType") {
				const { hardwareComponentTypeQuantityValue, hardwareComponentTypeQuantityName } = allPossibleFields;
				return {
					...previousValue,
					hardwareComponentTypeQuantityValue,
					hardwareComponentTypeQuantityName,
				};
			}
			if (currentSection === "location") {
				const { locations } = allPossibleFields;
        console.log({
					...previousValue,
					locations,
				});
				return {
					...previousValue,
					locations,
				};
			}
			if (currentSection === "materialsProcurement") {
				const { materialsDescription } = allPossibleFields;
				return {
					...previousValue,
					materialsDescription,
				};
			}
			if (currentSection === "numberOfWorkStation") {
				const { numberOfWorkstation } = allPossibleFields;
				return {
					...previousValue,
					numberOfWorkstation,
				};
			}
			if (currentSection === "numberOfWorkSystems") {
				const { numberOfWorkSystem } = allPossibleFields;
				return {
					...previousValue,
					numberOfWorkSystem,
				};
			}
			if (currentSection === "softwareApplicationInstallation") {
				const { softwareInstallationQuantity, softwareInstallationName } = allPossibleFields;
				return {
					...previousValue,
					softwareInstallationQuantity,
					softwareInstallationName,
				};
			}
			if (currentSection === "softwareApplicationCustomization") {
				const { softwareCustomizationQuantity, softwareCustomizationName } = allPossibleFields;
				return {
					...previousValue,
					softwareCustomizationQuantity,
					softwareCustomizationName,
				};
			}
			if (currentSection === "pickUpLocation") {
				const { pickLocations } = allPossibleFields;
				return {
					...previousValue,
					pickLocations,
				};
			}
			if (currentSection === "dropOffLocation") {
				const { dropOffLocations } = allPossibleFields;
				return {
					...previousValue,
					dropOffLocations,
				};
			}
      return {...previousValue}
		},
		{ ticketType: pathToTemplate.at(0), path: chosenTemplate, form: pathToTemplate.at(-1) }
	);

	return fields;
};

export default useCreateTicketFields;

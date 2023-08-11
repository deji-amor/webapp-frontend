import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const useCreateTicketFormValidator = () => {
  const chosenTemplate = useSelector((state) => state.ticketCreation.chosenTemplate);
  const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);

  const isFormValid = chosenTemplate.reduce((previousValue, currentSection) => {
    if(currentSection === "pointOfContact"){
      const { pointOfContactNameIsValid, pointOfContactPhoneNumberIsValid , pointOfContactAddressIsValid} = allPossibleFields;
      // console.log({
			// 	pointOfContactNameIsValid,
			// 	pointOfContactPhoneNumberIsValid,
			// 	pointOfContactAddressIsValid,
			// });
      return previousValue && (pointOfContactNameIsValid && pointOfContactPhoneNumberIsValid && pointOfContactAddressIsValid)
    }
    if (currentSection === "numberOfTechniciansNeeded") {
       const { numberOfTechnicians } = allPossibleFields;
      //  console.log({ numberOfTechnicians });
      return true && previousValue;
    }
    if (currentSection === "scopeOfWork") {
      const { scopeOfWorkDescriptionIsValid } = allPossibleFields;
      return scopeOfWorkDescriptionIsValid && (previousValue)
    }
    if(currentSection === "duration"){
      return true && previousValue;
    }
    if (currentSection === "hardwareComponentQuantity") {
      const {hardwareNameIsValid} = allPossibleFields
      return hardwareNameIsValid && previousValue
    }
    if(currentSection === "hardwareComponentType"){
      const { hardwareComponentTypeListIsValid } = allPossibleFields;
      return hardwareComponentTypeListIsValid && previousValue
    }
    if (currentSection === "location") {
      const { locationsAddressIsValid } = allPossibleFields;
      return locationsAddressIsValid && previousValue;
    }
    if (currentSection === "materialsProcurement") {
      const { materialsDescriptionIsValid } = allPossibleFields;
      return materialsDescriptionIsValid && previousValue;
    }
    if (currentSection === "numberOfWorkStation") {
      return true && previousValue
    }
    if (currentSection === "numberOfWorkSystems") {
      return true && previousValue;
    }
    if (currentSection === "softwareApplicationInstallation") {
      const {softwareInstallationNameIsValid} = allPossibleFields
      return softwareInstallationNameIsValid && previousValue
    }
    if (currentSection === "softwareApplicationCustomization") {
      const { softwareCustomizationNameIsValid } = allPossibleFields;
      return softwareCustomizationNameIsValid && previousValue
    }
    if(currentSection === "pickUpLocation"){
      const {pickLocationsAddressIsValid} = allPossibleFields
      return pickLocationsAddressIsValid && previousValue
    }
    if (currentSection === "dropOffLocation") {
      const {dropOffLocationsAddressIsValid} = allPossibleFields
      return dropOffLocationsAddressIsValid && previousValue
    }
    if (currentSection === "additionalFields") {
			const { additionalFieldsIsValid } = allPossibleFields;
			return additionalFieldsIsValid && previousValue;
		}
    return true && previousValue

  }, true)

  return isFormValid
}

export default useCreateTicketFormValidator
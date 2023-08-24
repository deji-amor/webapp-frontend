import React from "react";
import { useSelector } from "react-redux";
import { allRequiredFields } from "../state-manager/reducers/tickets/ticketEdition";
import { isEqual } from "lodash";

const filterObjectsByKey = (objectsArray, baseObject) => {
	const baseKeys = Object.keys(baseObject);

	const filteredArray = objectsArray.map((obj) => {
		const filteredObj = {};
		baseKeys.forEach((key) => {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				filteredObj[key] = obj[key];
			}
		});
		return filteredObj;
	});

	return filteredArray;
};


const useEditTicketIsAltered = () => {
	const {originalTicket, allPossibleFields} = useSelector(
		(state) => state.ticketEdition
	);

  const t = filterObjectsByKey([originalTicket, allPossibleFields], allRequiredFields)
  const [objA, objB] = t
  const areEqual = isEqual(objA, objB)
	return areEqual;
};

export default useEditTicketIsAltered;

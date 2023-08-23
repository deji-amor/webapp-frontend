import React from "react";
import { useSelector } from "react-redux";
import { allRequiredFields } from "../state-manager/reducers/tickets/ticketEdition";

const filterObjectsByKey = (objectsArray, baseObject) => {
	const baseKeys = Object.keys(baseObject);

	const filteredArray = objectsArray.map((obj) => {
		const filteredObj = {};
		baseKeys.forEach((key) => {
			if (obj.hasOwnProperty(key)) {
				filteredObj[key] = obj[key];
			}
		});
		return filteredObj;
	});

	return filteredArray;
};

const areValuesEqual = (objA, objB) => {
	const keysA = Object.keys(objA);
	for (const key of keysA) {
		if (Array.isArray(objA[key])) {
			if (!Array.isArray(objB[key])) {
				return false;
			}
			if (objA[key].length !== objB[key].length) {
				return false;
			}
			for (let i = 0; i < objA[key].length; i++) {
				if (objA[key][i] !== objB[key][i]) {
					return false;
				}
			}
		} else if (objA[key] !== objB[key]) {
			return false;
		}
	}
	return true;
};

const useEditTicketIsAltered = () => {
	const {originalTicket, allPossibleFields} = useSelector(
		(state) => state.ticketEdition
	);

  const t = filterObjectsByKey([originalTicket, allPossibleFields], allRequiredFields)
  const [objA, objB] = t
  const areEqual = areValuesEqual(objA, objB)
  console.log({areEqual, objA, objB});

	return areEqual;
};

export default useEditTicketIsAltered;

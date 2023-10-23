import React, {useMemo} from "react";
import { useSelector } from "react-redux";
import { allRequiredFields } from "../state-manager/reducers/tickets/ticketEdition";
import { isEqual, omit } from "lodash";

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
  const { originalTicket, allPossibleFields } = useSelector(
    (state) => state.ticketEdition
  );

  // Use useMemo to memoize the result
  const requiredAdditionalFields = useMemo(() => {
    const allPossibleFieldsClone = structuredClone(allPossibleFields);
    const requiredAdditionalFields = allPossibleFieldsClone.additionalFields.map((obj) =>
      omit(obj, ["isValid", "errorMessage", "hasError", "isTouched"])
    );
    allPossibleFieldsClone.additionalFields = requiredAdditionalFields;
    return allPossibleFieldsClone;
  }, [allPossibleFields]);

  const [objA, objB] = useMemo(() => filterObjectsByKey(
    [originalTicket, requiredAdditionalFields],
    allRequiredFields
  ), [originalTicket, requiredAdditionalFields]);

  // Calculate 'areEqual' only when 'objA' and 'objB' change
  const areEqual = useMemo(() => isEqual(objA, objB), [objA, objB]);

  return areEqual;
};

export default useEditTicketIsAltered;

// IMPORT
// import React, { useState, useEffect, useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTicketActions } from "../state-manager/reducers/tickets/ticketCreation";
// IMPORT
// import PropTypes from "prop-types";

const useAdditionalFieldsInput = (validateValue) => {
	const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
  const additionalFields = allPossibleFields.additionalFields;
  const dispatch = useDispatch();

  const additionalFieldsList = additionalFields.map((currentField, currentFieldInd) => {
    const enteredValue = currentField.value;
    const enteredName = currentField.name
    // IS TOUCHED
    // const isTouched = currentField.isTouched;
    const hasError = currentField.hasError;
    const valueIsValid = currentField.isValid;
    const errorMessage = currentField.errorMessage
  
    const setEnteredValue = (value) => {
      const fields = additionalFields.slice()
      const field = additionalFields.find((_, ind) => ind === currentFieldInd)
      const isValid = validateValue(value)[0]
      const errMsg = validateValue(value)[1]
      const newField = {
        ...field,
        value: value,
        isValid: isValid,
        hasError: !(isValid && true),
        errorMessage: errMsg,
        isTouched: true,
      };
      fields.splice(currentFieldInd, 1, newField)
      dispatch(createTicketActions.updateField({ key: "additionalFields", value: fields }));
    };
  
    const setIsTouched = (bool) => {
      const fields = additionalFields.slice();
      const field = additionalFields.find((_, ind) => ind === currentFieldInd);
      const newField = { ...field, isTouched: bool };
      fields.splice(currentFieldInd, 1, newField);
      dispatch(createTicketActions.updateField({ key: "additionalFields", value: fields }));
    };
  
    const setHasError = (bool) => {
      const fields = additionalFields.slice();
      const field = additionalFields.find((_, ind) => ind === currentFieldInd);
      const newField = { ...field, hasError: bool };
      fields.splice(currentFieldInd, 1, newField);
      dispatch(createTicketActions.updateField({ key: "additionalFields", value: fields }));
    };

    const removeSelf = () => {
      const fields = additionalFields.slice();
      fields.splice(currentFieldInd, 1);
      dispatch(createTicketActions.updateField({ key: "additionalFields", value: fields }));
    }

    const id = `${"xr6ty6cu"}currentField`;
    // USE STATE
    // const [enteredValue, setEnteredValue] = useState("");
    // const [isTouched, setIsTouched] = useState(false);
    // const [hasError, setHasError] = useState(false);
  
    const valueChangeHandler = (value) => {
      setEnteredValue(value);
      // SET ERROR
      // setErrorFromServer(false);
    };
  
    const valueBlurHandler = () => {
      setIsTouched(true);
    };
  
    const reset = () => {
      setEnteredValue("");
      setIsTouched(false);
      setHasError(false);
      // SET ERROR
      // setErrorFromServer(false);
    };

    return {
      valueChangeHandler,
      valueBlurHandler,
      reset,
      enteredValue,
      enteredName,
      hasError,
      setHasError,
      errorMessage,
      removeSelf,
      // SET ERROR
      // setErrorMessage,
      valueIsValid,
      // SET ERROR
      // errorFromServer,
      // setErrorFromServer,
      id,
    };
  })

  return additionalFieldsList
};

useAdditionalFieldsInput.propTypes = {};

export default useAdditionalFieldsInput;

import React, { useState, useEffect, useId } from "react";
import PropTypes from "prop-types";

const useCreateTicketInput = (validateValue) => {
	const id = useId();
	const [enteredValue, setEnteredValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [valueIsValid, errMsg] = validateValue(enteredValue);
	const [errorMessage, setErrorMessage] = useState(errMsg);
	const [errorFromServer, setErrorFromServer] = useState(false);

	useEffect(() => {
		setHasError(!valueIsValid && isTouched);
		setErrorMessage(validateValue(enteredValue)[1]);
	}, [valueIsValid, isTouched, validateValue, enteredValue]);

	const valueChangeHandler = (value) => {
		setEnteredValue(value);
		setErrorFromServer(false);
	};

	const valueBlurHandler = () => {
		setIsTouched(true);
	};

	const reset = () => {
		setEnteredValue("");
		setIsTouched(false);
		setHasError(false);
		setErrorFromServer(false);
	};

	return {
		valueChangeHandler,
		valueBlurHandler,
		reset,
		enteredValue,
		hasError,
		setHasError,
		errorMessage,
		setErrorMessage,
		valueIsValid,
		errorFromServer,
		setErrorFromServer,
		id,
	};
};

useCreateTicketInput.propTypes = {};

export default useCreateTicketInput;

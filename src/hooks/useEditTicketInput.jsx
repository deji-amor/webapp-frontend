import React, { useState, useEffect, useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTicketActions } from "../state-manager/reducers/tickets/ticketEdition";

const useEditTicketInput = (pointer, validateValue) => {
	const allPossibleFields = useSelector((state) => state.ticketEdition.allPossibleFields);
	const dispatch = useDispatch();
	const enteredValue = allPossibleFields[pointer];
	const isTouched = allPossibleFields[`${pointer}IsTouched`];
	const hasError = allPossibleFields[`${pointer}HasError`];
	const valueIsValid = allPossibleFields[`${pointer}IsValid`];

	const setEnteredValue = (value) => {
		dispatch(editTicketActions.updateField({ key: pointer, value: value }));
	};

	const setIsTouched = (bool) => {
		dispatch(editTicketActions.updateField({ key: `${pointer}IsTouched`, value: bool }));
	};

	const setHasError = (bool) => {
		dispatch(editTicketActions.updateField({ key: `${pointer}HasError`, value: bool }));
	};

	useEffect(() => {
		dispatch(
			editTicketActions.updateField({
				key: `${pointer}IsValid`,
				value: validateValue(enteredValue)[0],
			})
		);
	}, [enteredValue, dispatch, pointer, validateValue]);

	const id = useId();
	// USE STATE const [enteredValue, setEnteredValue] = useState("");
	// USE STATE const [isTouched, setIsTouched] = useState(false);
	// USE STATE const [hasError, setHasError] = useState(false);
	const errMsg = validateValue(enteredValue)[1];
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

export default useEditTicketInput;

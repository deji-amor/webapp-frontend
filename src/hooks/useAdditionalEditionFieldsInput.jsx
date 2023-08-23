import { useSelector, useDispatch } from "react-redux";
import { editTicketActions } from "../state-manager/reducers/tickets/ticketEdition";

const useAdditionalEditionFieldsInput = (validateValue) => {
	const allPossibleFields = useSelector((state) => state.ticketEdition.allPossibleFields);
	const additionalFields = allPossibleFields.additionalFields;
	const dispatch = useDispatch();

	const additionalFieldsList = additionalFields.map((currentField, currentFieldInd) => {

		const enteredName = Object.entries(currentField)[0][0];
		const enteredValue = Object.entries(currentField)[0][1];
		// IS TOUCHED
		// const isTouched = currentField.isTouched;
		const hasError = currentField.hasError;
		const valueIsValid = currentField.isValid;
		const errorMessage = currentField.errorMessage;

		const setEnteredValue = (value) => {
			const fields = additionalFields.slice();
			const field = additionalFields.find((_, ind) => ind === currentFieldInd);
			// console.log({fields, field});
			const isValid = validateValue(value)[0];
			const errMsg = validateValue(value)[1];
			const newKey = Object.keys(field)[0];
			const newField = {
				...field,
				[newKey]: value,
				isValid: isValid,
				hasError: !isValid,
				errorMessage: errMsg,
				isTouched: true,
			};
			fields.splice(currentFieldInd, 1, newField);
			console.log(fields);
			dispatch(editTicketActions.updateField({ key: "additionalFields", value: fields }));
		};

		const setIsTouched = (bool) => {
			const fields = additionalFields.slice();
			const field = additionalFields.find((_, ind) => ind === currentFieldInd);
			const newField = { ...field, isTouched: bool };
			fields.splice(currentFieldInd, 1, newField);
			dispatch(editTicketActions.updateField({ key: "additionalFields", value: fields }));
		};

		const setHasError = (bool) => {
			const fields = additionalFields.slice();
			const field = additionalFields.find((_, ind) => ind === currentFieldInd);
			const newField = { ...field, hasError: bool };
			fields.splice(currentFieldInd, 1, newField);
			dispatch(editTicketActions.updateField({ key: "additionalFields", value: fields }));
		};

		const removeSelf = () => {
			const fields = additionalFields.slice();
			fields.splice(currentFieldInd, 1);
			dispatch(editTicketActions.updateField({ key: "additionalFields", value: fields }));
		};

		const id = `${"xr6ty6cu"}currentField`;
		// USE STATE
		// const [enteredValue, setEnteredValue] = useState("");
		// const [isTouched, setIsTouched] = useState(false);
		// const [hasError, setHasError] = useState(false);

		const valueChangeHandler = (value) => {
			setEnteredValue(value);
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
	});

	return additionalFieldsList;
};

useAdditionalEditionFieldsInput.propTypes = {};

export default useAdditionalEditionFieldsInput;

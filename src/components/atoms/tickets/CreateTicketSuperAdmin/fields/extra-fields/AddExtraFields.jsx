import React, {useState, useEffect} from 'react'
import AddIcon from "@mui/icons-material/Add";
import EnterFieldInput from '../general/EnterFieldInput';
import Input from "../general/Input";
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import IconButton from "../general/IconButton";
import BlueThemedLightText from '../../BlueThemedLightText';
import GrayThemedLightestText from '../../GrayThemedLightestText';
import useCreateTicketInput from "../../../../../../hooks/useCreateTicketInput";
import useAdditionalFieldsInput from '../../../../../../hooks/useAdditionalFieldsInput';
import AddOrCancelButton from "../general/AddOrCancelButton";
import { isFieldValueEmpty } from '../../../../../../helpers/validation';
import { createTicketActions } from "../../../../../../state-manager/reducers/tickets/ticketCreation";
import { useSelector, useDispatch } from "react-redux";

const AddExtraFields = () => {
	const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
	const additionalFields = allPossibleFields.additionalFields;
	// ADDITIONAL FIRELD
	// const additionalFieldsIsValid = allPossibleFields.additionalFieldsIsValid;
	const [showInput, setShowInput] = useState(false);
	const dispatch = useDispatch()

	const {
		enteredValue: fieldNameValue,
		errorMessage: fieldNameErrorMessage,
		setErrorMessage: fieldNameSetErrorMessage,
		hasError: fieldNameHasError,
		setHasError: fieldNameSetHasError,
		valueChangeHandler: fieldNameChangeHandler,
		valueBlurHandler: fieldNameBlurHandler,
		valueIsValid: fieldNameIsValid,
		errorFromServer: fieldNameErrFromServer,
		// FIELD VALUE
		// setErrorFromServer: fieldNameSetErrorFromServer,
		id: fieldNameId,
		reset: fieldNameReset,
	} = useCreateTicketInput("extraFieldNameInputTypeCurrentValue", isFieldValueEmpty);

	const {
		enteredValue: fieldValueValue,
		errorMessage: fieldValueErrorMessage,
		// FIELD VALUE
		// setErrorMessage: fieldValueSetErrorMessage,
		hasError: fieldValueHasError,
		// FIELD VALUE
		// setHasError: fieldValueSetHasError,
		valueChangeHandler: fieldValueChangeHandler,
		valueBlurHandler: fieldValueBlurHandler,
		valueIsValid: fieldValueIsValid,
		errorFromServer: fieldValueErrFromServer,
		// FIELD VALUE
		// setErrorFromServer: fieldValueSetErrorFromServer,
		id: fieldValueId,
		reset: fieldValueReset,
	} = useCreateTicketInput("extraFieldValueInputTypeCurrentValue", isFieldValueEmpty);

	const addFieldHandler = () => {
		const newField = {name: fieldNameValue, value: fieldValueValue, isValid: true, isTouched: false, hasError: false,}
		// NEW FIELD
		// const newField = {[fieldNameValue]: fieldValueValue}
		const addFields = additionalFields.slice()
		addFields.push(newField)
		dispatch(createTicketActions.updateField({ key: "additionalFields", value: addFields }));
		fieldNameReset();
		fieldValueReset();
		setShowInput(false);
	}

	const cancelFieldHandler = () => {
		fieldNameReset()
		fieldValueReset()
		setShowInput(false)
	}

	const isAddFieldButtonDisabled = !(!fieldNameHasError && fieldValueIsValid);
	useEffect(() => {
		if(additionalFields.some(item => item.name === fieldNameValue)){
			console.log("gotcha");
			fieldNameSetErrorMessage("field names can not be duplicates")
			fieldNameSetHasError(true)
		}
	}, [fieldNameValue])

	useEffect(() => {
		if (additionalFields.every(({ value }) => isFieldValueEmpty(value)[0])){
			dispatch(createTicketActions.updateField({ key: "additionalFieldsIsValid", value: true }));
		}else {
			dispatch(createTicketActions.updateField({ key: "additionalFieldsIsValid", value: false }));
		}
	}, [additionalFields]);

	const hasNewFieldsReachedLimit = additionalFields.length >= 3

	const list = useAdditionalFieldsInput(isFieldValueEmpty)
	
	const listDiv = list.map(item => {
		const {
			enteredValue: value,
			enteredName: name,
			errorMessage: errorMessage,
			hasError: hasError,
			// SET
			// setHasError: setHasError,
			valueChangeHandler: changeHandler,
			valueBlurHandler: blurHandler,
			// IS VALID
			// valueIsValid: isValid,
			id: id,
			removeSelf: removeSelf,
			// RESET
			// reset: reset,
		} = item;

		return (
			<div key={name} className="w-[30rem] mb-[1rem]">
				<GrayThemedLightestText>{name}*</GrayThemedLightestText>
				<div className="flex gap-4">
					<div className="w-[21rem]">
						<Input
							id={id}
							type={"text"}
							onBlur={blurHandler}
							onChange={changeHandler}
							placeholder={"Enter field value"}
							value={value}
						/>
					</div>
					<div className="self-center space-x-[1rem]">
						<AddOrCancelButton onClick={removeSelf} type="cancel" />
					</div>{" "}
				</div>
				{hasError && (
					<ValidationErrorText errorFromServer={false}>{errorMessage}</ValidationErrorText>
				)}
			</div>
		);
	})

	const setHowInputHandler = () => {
		setShowInput((pv) => !pv)
	}

	useEffect(() => {
		if(showInput){
			const divEl = document.getElementById("ticket-creation-form-sections");
			divEl.scrollIntoView({ behavior: "smooth" });
		}
	}, [showInput])

  return (
		<div>
			<div className="mb-[0.25rem]">
				{listDiv}
			</div>
			<div className="mb-[0.25rem]">
				{
				!hasNewFieldsReachedLimit ?
				<IconButton bolder={true} onClick={setHowInputHandler} icon={<AddIcon />}>
					Add New Field
				</IconButton> : 
				<BlueThemedLightText>Reached a maximum of 3 extra fields</BlueThemedLightText>
				}
			</div>
			{showInput && (
				<div id="extra-fields-input" className="">
					<div className="w-[18.25rem] mb-[0.25rem]">
						<EnterFieldInput
							id={fieldNameId}
							type={"text"}
							onBlur={fieldNameBlurHandler}
							onChange={fieldNameChangeHandler}
							placeholder={"Enter field name"}
							value={fieldNameValue}
							isValid={fieldNameIsValid}
						/>
						{fieldNameHasError && (
							<ValidationErrorText errorFromServer={fieldNameErrFromServer}>
								{fieldNameErrorMessage}
							</ValidationErrorText>
						)}
					</div>
					<div className="w-[30rem]">
						<div className="flex gap-4">
							<div className="w-[21rem]">
								<Input
									id={fieldValueId}
									type={"text"}
									onBlur={fieldValueBlurHandler}
									onChange={fieldValueChangeHandler}
									placeholder={"Enter field value"}
									value={fieldValueValue}
									isValid={fieldValueIsValid}
								/>
							</div>
							<div className="self-center space-x-[1rem]">
								<AddOrCancelButton
									onClick={addFieldHandler}
									type="add"
									disabled={isAddFieldButtonDisabled}
								/>
								<AddOrCancelButton onClick={cancelFieldHandler} type="cancel" />
							</div>{" "}
						</div>
						{fieldValueHasError && (
							<ValidationErrorText errorFromServer={fieldValueErrFromServer}>
								{fieldValueErrorMessage}
							</ValidationErrorText>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

export default AddExtraFields
import React, {useState, useEffect} from 'react'
import AddIcon from "@mui/icons-material/Add";
import EnterFieldInput from '../general/EnterFieldInput';
import Input from "../general/Input";
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import IconButton from "../general/IconButton";
import BlueThemedLightText from '../../../CreateTicketSuperAdmin/BlueThemedLightText';
import GrayThemedLightestText from '../../../CreateTicketSuperAdmin/GrayThemedLightestText';
import useEditTicketInput from '../../../../../../hooks/useEditTicketInput';
import useAdditionalEditionFieldsInput from '../../../../../../hooks/useAdditionalEditionFieldsInput';
import AddOrCancelButton from "../general/AddOrCancelButton";
import { isFieldValueEmpty } from '../../../../../../helpers/validation';
import { editTicketActions } from '../../../../../../state-manager/reducers/tickets/ticketEdition';
import { useSelector, useDispatch } from "react-redux";

const AddExtraFields = () => {
	const allPossibleFields = useSelector((state) => state.ticketEdition.allPossibleFields);
	const additionalFields = allPossibleFields.additionalFields;
	// ADDITIONAL FIRELD
	// const additionalFieldsIsValid = allPossibleFields.additionalFieldsIsValid;
	const [showInput, setShowInput] = useState(false);
	const dispatch = useDispatch()

	// console.log(additionalFields);

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
	} = useEditTicketInput("extraFieldNameInputTypeCurrentValue", isFieldValueEmpty);

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
	} = useEditTicketInput("extraFieldValueInputTypeCurrentValue", isFieldValueEmpty);

	const addFieldHandler = () => {
		const newField = {[fieldNameValue]: fieldValueValue, isValid: true, isTouched: false, hasError: false,}
		const addFields = additionalFields.slice()
		addFields.push(newField)
		dispatch(editTicketActions.updateField({ key: "additionalFields", value: addFields }));
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
		if (additionalFields.some((item) => Object.keys(item)[0] === fieldNameValue)) {
			console.log("gotcha");
			fieldNameSetErrorMessage("field names can not be duplicates");
			fieldNameSetHasError(true);
		}
	}, [fieldNameValue])

	useEffect(() => {
		if (additionalFields.every(item => isFieldValueEmpty(Object.values(item)[0]))){
			dispatch(editTicketActions.updateField({ key: "additionalFieldsIsValid", value: true }));
		}else {
			dispatch(editTicketActions.updateField({ key: "additionalFieldsIsValid", value: false }));
		}
	}, [additionalFields]);

	const hasNewFieldsReachedLimit = additionalFields.length >= 3

	const list = useAdditionalEditionFieldsInput(isFieldValueEmpty)

	// console.log(list);

	
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
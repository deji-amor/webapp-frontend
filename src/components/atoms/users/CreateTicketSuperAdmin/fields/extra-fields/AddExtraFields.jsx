import React, {useState, useEffect} from 'react'
import AddIcon from "@mui/icons-material/Add";
import EnterFieldInput from '../general/EnterFieldInput';
import Input from "../general/Input";
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import IconButton from "../general/IconButton";
import GrayThemedLightText from "../../GrayThemedLightText";
import GrayThemedLighterText from "../../GrayThemedLighterText";
import NumberDropDown from "../general/NumberDropDown";
import useCreateTicketInput from "../../../../../../hooks/useCreateTicketInput";
import useAdditionalFieldsInput from '../../../../../../hooks/useAdditionalFieldsInput';
import Tab from "../general/Tab";
import AddOrCancelButton from "../general/AddOrCancelButton";
import BlueThemedLightText from "../../BlueThemedLightText";
import BlueThemeSmall from "../../BlueThemedSmall";
import BlueThemedMediumText from "../../BlueThemedMediumText";
import BlueThemedXtraSm from "../../BlueThemedXtraSm";
import { isFieldNameEmpty, isFieldValueEmpty } from "../../../../../../helpers/validation";
import { createTicketActions } from "../../../../../../state-manager/reducers/users/ticketCreation";
import { useSelector, useDispatch } from "react-redux";

const AddExtraFields = () => {
	const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
	const additionalFields = allPossibleFields.additionalFields;
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
		setErrorFromServer: fieldNameSetErrorFromServer,
		id: fieldNameId,
		reset: fieldNameReset,
	} = useCreateTicketInput("extraFieldNameInputTypeCurrentValue", isFieldValueEmpty);

	const {
		enteredValue: fieldValueValue,
		errorMessage: fieldValueErrorMessage,
		setErrorMessage: fieldValueSetErrorMessage,
		hasError: fieldValueHasError,
		setHasError: fieldValueSetHasError,
		valueChangeHandler: fieldValueChangeHandler,
		valueBlurHandler: fieldValueBlurHandler,
		valueIsValid: fieldValueIsValid,
		errorFromServer: fieldValueErrFromServer,
		setErrorFromServer: fieldValueSetErrorFromServer,
		id: fieldValueId,
		reset: fieldValueReset,
	} = useCreateTicketInput("extraFieldValueInputTypeCurrentValue", isFieldValueEmpty);

	const addFieldHandler = () => {
		const newField = {name: fieldNameValue, value: fieldValueValue, isValid: true, isTouched: false, hasError: false,}
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

	const isAddFieldButtonDisabled = !(fieldNameIsValid && fieldValueIsValid);

	const list = useAdditionalFieldsInput()
	// console.log({additionalFields});
	console.log({list});
	const listDiv = list.map(item => {
		const {
			enteredValue: value,
			enteredName: name,
			errorMessage: errorMessage,
			hasError: hasError,
			setHasError: setHasError,
			valueChangeHandler: changeHandler,
			valueBlurHandler: blurHandler,
			valueIsValid: isValid,
			id: id,
			reset: reset,
		} = item;

		return (
			<div key={name} className="w-[30rem]">
				<div className="flex gap-4">
					<div className="w-[21rem]">
						<Input
							id={id}
							type={"text"}
							onBlur={blurHandler}
							onChange={changeHandler}
							placeholder={"Enter field value"}
							value={fieldValueValue}
						/>
					</div>
					{/* <div className="self-center space-x-[1rem]">
						<AddOrCancelButton
							onClick={addFieldHandler}
							type="add"
							disabled={isAddFieldButtonDisabled}
						/>
						<AddOrCancelButton onClick={cancelFieldHandler} type="cancel" />
					</div>{" "} */}
				</div>
				{hasError && (
					<ValidationErrorText errorFromServer={false}>
						{errorMessage}
					</ValidationErrorText>
				)}
			</div>
		);
	})

  return (
		<div>
			<div className="mb-[0.25rem]">
				{listDiv}
			</div>
			<div className="mb-[0.25rem]">
				<IconButton bolder={true} onClick={() => setShowInput((pv) => !pv)} icon={<AddIcon />}>
					Add New Field
				</IconButton>
			</div>
			{showInput && (
				<div className="">
					<div className="w-[18.25rem] mb-[0.25rem]">
						<EnterFieldInput
							id={fieldNameId}
							type={"text"}
							onBlur={fieldNameBlurHandler}
							onChange={fieldNameChangeHandler}
							placeholder={"Enter field name"}
							value={fieldNameValue}
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
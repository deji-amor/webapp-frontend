import React from "react";
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import { isNameEmpty, isPhoneNumber, isAddressEmpty } from "../../../../../../helpers/validation";
import useCreateTicketInput from "../../../../../../hooks/useCreateTicketInput";
import GrayThemedLighterText from "../../GrayThemedLighterText";
import GrayThemedLightestText from "../../GrayThemedLightestText";
import Input from "../general/Input";
import TextArea from "../general/TextArea";

const PointOfContact = (props) => {
	const {
		enteredValue: nameValue,
		errorMessage: nameErrorMessage,
// POINT
		// setErrorMessage: nameSetErrorMessage,
		hasError: nameHasError,
// POINT
		// setHasError: nameSetHasError,
		valueChangeHandler: nameChangeHandler,
		valueBlurHandler: nameBlurHandler,
		valueIsValid: nameIsValid,
		errorFromServer: nameErrFromServer,
// POINT
		// setErrorFromServer: nameSetErrorFromServer,
		id: nameId,
// POINT
		// reset: nameReset,
	} = useCreateTicketInput("pointOfContactName", isNameEmpty);

	const {
		enteredValue: numberValue,
		errorMessage: numberErrorMessage,
// POINT
		// setErrorMessage: numberSetErrorMessage,
		hasError: numberHasError,
// POINT
		// setHasError: numberSetHasError,
		valueChangeHandler: numberChangeHandler,
		valueBlurHandler: numberBlurHandler,
		valueIsValid: numberIsValid,
		errorFromServer: numberErrFromServer,
// POINT
		// setErrorFromServer: numberSetErrorFromServer,
		id: numberId,
// POINT
		// reset: numberReset,
	} = useCreateTicketInput("pointOfContactPhoneNumber", isPhoneNumber);

	const {
		enteredValue: addressValue,
// POINT
		// errorMessage: addressErrorMessage,
// POINT
		// setErrorMessage: addressSetErrorMessage,
		// hasError: addressHasError,
// POINT
		// setHasError: addressSetHasError,
		valueChangeHandler: addressChangeHandler,
		valueBlurHandler: addressBlurHandler,
		valueIsValid: addressIsValid,
// POINT
		// errorFromServer: addressErrFromServer,
// POINT
		// setErrorFromServer: addressSetErrorFromServer,
		id: addressId,
// POINT
		// reset: addressReset,
	} = useCreateTicketInput("pointOfContactAddress", isAddressEmpty);

	return (
		<div className="space-y-[0.75rem]">
			<div className="">
				<GrayThemedLightestText>Point of contact</GrayThemedLightestText>
			</div>
			<div className="flex items-start justify-start gap-[0.75rem]">
				<div className="basis-[21rem]">
					<GrayThemedLighterText>Name*</GrayThemedLighterText>
					<Input
						id={nameId}
						type={"text"}
						onBlur={nameBlurHandler}
						onChange={nameChangeHandler}
						placeholder={"Enter contact name"}
						value={nameValue}
						isValid={nameIsValid}
					/>
					{nameHasError && (
						<ValidationErrorText errorFromServer={nameErrFromServer}>
							{nameErrorMessage}
						</ValidationErrorText>
					)}
				</div>
				<div className="basis-[21rem]">
					<GrayThemedLighterText>Phone Number*</GrayThemedLighterText>
					<Input
						id={numberId}
						type={"text"}
						onBlur={numberBlurHandler}
						onChange={numberChangeHandler}
						placeholder={"Enter contact phone number"}
						value={numberValue}
						isValid={numberIsValid}
					/>
					{numberHasError && (
						<ValidationErrorText errorFromServer={numberErrFromServer}>
							{numberErrorMessage}
						</ValidationErrorText>
					)}
				</div>
			</div>
			<div className="">
				<GrayThemedLighterText>Address of contact</GrayThemedLighterText>
				<div className="w-[30rem] h-[6.25rem]">
					<TextArea
						id={addressId}
						onBlur={addressBlurHandler}
						onChange={addressChangeHandler}
						value={addressValue}
						placeholder={"Enter address..."}
						resizable={false}
						isValid={addressIsValid}
					/>
				</div>
			</div>
		</div>
	);
};

PointOfContact.propTypes = {};

export default PointOfContact;

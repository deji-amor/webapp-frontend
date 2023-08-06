import React from "react";
import PropTypes from "prop-types";
import GrayThemedLightText from "../../GrayThemedLightText";
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import { isNameEmpty, isPhoneNumber, isAddressEmpty } from "../../../../../../helpers/validation";
import useCreateTicketInput from "../../../../../../hooks/useCreateTicketInput";
import GrayThemedLighterText from "../../GrayThemedLighterText";
import GrayThemedLightestText from "../../GrayThemedLightestText";
import Input from "../general/Input";
import TextArea from "../general/TextArea";
import { useSelector } from "react-redux";

const PointOfContact = (props) => {
	const {
		enteredValue: nameValue,
		errorMessage: nameErrorMessage,
		setErrorMessage: nameSetErrorMessage,
		hasError: nameHasError,
		setHasError: nameSetHasError,
		valueChangeHandler: nameChangeHandler,
		valueBlurHandler: nameBlurHandler,
		valueIsValid: nameIsValid,
		errorFromServer: nameErrFromServer,
		setErrorFromServer: nameSetErrorFromServer,
		id: nameId,
		reset: nameReset,
	} = useCreateTicketInput("pointOfContactName", isNameEmpty);

	const {
		enteredValue: numberValue,
		errorMessage: numberErrorMessage,
		setErrorMessage: numberSetErrorMessage,
		hasError: numberHasError,
		setHasError: numberSetHasError,
		valueChangeHandler: numberChangeHandler,
		valueBlurHandler: numberBlurHandler,
		valueIsValid: numberIsValid,
		errorFromServer: numberErrFromServer,
		setErrorFromServer: numberSetErrorFromServer,
		id: numberId,
		reset: numberReset,
	} = useCreateTicketInput("pointOfContactPhoneNumber", isPhoneNumber);

	const {
		enteredValue: addressValue,
		errorMessage: addressErrorMessage,
		setErrorMessage: addressSetErrorMessage,
		hasError: addressHasError,
		setHasError: addressSetHasError,
		valueChangeHandler: addressChangeHandler,
		valueBlurHandler: addressBlurHandler,
		valueIsValid: addressIsValid,
		errorFromServer: addressErrFromServer,
		setErrorFromServer: addressSetErrorFromServer,
		id: addressId,
		reset: addressReset,
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
					/>
					{numberHasError && (
						<ValidationErrorText errorFromServer={numberErrFromServer}>
							{numberErrorMessage}
						</ValidationErrorText>
					)}
				</div>
			</div>
			<div className="">
				<GrayThemedLighterText>Address of contact*</GrayThemedLighterText>
				<div className="w-[30rem] h-[6.25rem]">
					<TextArea
						id={addressId}
						onBlur={addressBlurHandler}
						onChange={addressChangeHandler}
						value={addressValue}
						placeholder={"Enter address..."}
						resizable={false}
					/>
				</div>
				{addressHasError && (
					<ValidationErrorText errorFromServer={addressErrFromServer}>
						{addressErrorMessage}
					</ValidationErrorText>
				)}
			</div>
		</div>
	);
};

PointOfContact.propTypes = {};

export default PointOfContact;

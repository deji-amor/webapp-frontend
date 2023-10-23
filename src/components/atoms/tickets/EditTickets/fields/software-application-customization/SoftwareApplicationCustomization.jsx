import React from 'react'
import GrayThemedLighterText from '../../../CreateTicketSuperAdmin/GrayThemedLighterText';
import NumberDropDown from "../general/NumberDropDown";
import { useDispatch, useSelector } from "react-redux";
import { editTicketActions } from '../../../../../../state-manager/reducers/tickets/ticketEdition';
import useEditTicketInput from '../../../../../../hooks/useEditTicketInput';
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import { isHardwareQuantityValid } from "../../../../../../helpers/validation";
import Input from "../general/Input";

const SoftwareApplicationCustomization = () => {
  const {
		enteredValue: appValue,
		errorMessage: appErrorMessage,
		// APP
		// setErrorMessage: appSetErrorMessage,
		hasError: appHasError,
		// APP
		// setHasError: appSetHasError,
		valueChangeHandler: appChangeHandler,
		valueBlurHandler: appBlurHandler,
		valueIsValid: appIsValid,
		errorFromServer: appErrFromServer,
		// APP
		// setErrorFromServer: appSetErrorFromServer,
		id: appId,
		// APP
		// reset: appReset,
	} = useEditTicketInput("softwareCustomizationName", isHardwareQuantityValid);

	const allPossibleFields = useSelector((state) => state.ticketEdition.allPossibleFields);
	const softwareCustomizationQuantity = allPossibleFields.softwareCustomizationQuantity;
	const dispatch = useDispatch();

	const softwareCustomizationQuantityChangeHandler = (value) => {
		dispatch(
			editTicketActions.updateField({ key: "softwareCustomizationQuantity", value: value })
		);
	};

	return (
		<div className="flex items-center justify-between">
			<div className="">
				<GrayThemedLighterText>Software Application Name*</GrayThemedLighterText>
				<div className="w-[21rem]">
					<Input
						id={appId}
						onBlur={appBlurHandler}
						onChange={appChangeHandler}
						value={appValue}
						placeholder={"Enter software name"}
						resizable={false}
						isValid={appIsValid}
					/>
				</div>
				{appHasError && (
					<ValidationErrorText errorFromServer={appErrFromServer}>
						{appErrorMessage}
					</ValidationErrorText>
				)}
			</div>
			<div className="flex items-center gap-[0.75rem]">
				<GrayThemedLighterText>Number of Customization Devices</GrayThemedLighterText>
				<NumberDropDown
					min={1}
					max={100}
					onChange={softwareCustomizationQuantityChangeHandler}
					value={softwareCustomizationQuantity}
				/>
			</div>
		</div>
	);
}

export default SoftwareApplicationCustomization
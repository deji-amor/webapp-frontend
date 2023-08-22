import React from 'react'
import GrayThemedLighterText from "../../GrayThemedLighterText";
import NumberDropDown from "../general/NumberDropDown";
import { useDispatch, useSelector } from "react-redux";
import { createTicketActions } from "../../../../../../state-manager/reducers/tickets/ticketCreation";
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import { isHardwareQuantityValid } from "../../../../../../helpers/validation";
import useCreateTicketInput from "../../../../../../hooks/useCreateTicketInput";
import Input from "../general/Input";

const SoftwareApplicationInstallation = () => {
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
	} = useCreateTicketInput("softwareInstallationName", isHardwareQuantityValid);

	const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
	const softwareInstallationQuantity = allPossibleFields.softwareInstallationQuantity;
	const dispatch = useDispatch();

	const softwareInstallationQuantityChangeHandler = (value) => {
		dispatch(
			createTicketActions.updateField({ key: "softwareInstallationQuantity", value: value })
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
				<GrayThemedLighterText>Number of Installation Devices</GrayThemedLighterText>
				<NumberDropDown
					min={1}
					max={100}
					onChange={softwareInstallationQuantityChangeHandler}
					value={softwareInstallationQuantity}
				/>
			</div>
		</div>
	);
}

export default SoftwareApplicationInstallation
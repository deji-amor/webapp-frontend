import React from 'react'
import GrayThemedLighterText from "../../GrayThemedLighterText";
import NumberDropDown from "../general/NumberDropDown";
import { useDispatch, useSelector } from "react-redux";
import { createTicketActions } from "../../../../../../state-manager/reducers/tickets/ticketCreation";
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import { isHardwareQuantityValid } from "../../../../../../helpers/validation";
import useCreateTicketInput from "../../../../../../hooks/useCreateTicketInput";
import Input from "../general/Input";

const HardwareComponentQuantity = () => {
  const {
		enteredValue: quantityValue,
		errorMessage: quantityErrorMessage,
		// QUANTITY
		// setErrorMessage: quantitySetErrorMessage,
		hasError: quantityHasError,
		// QUANTITY
		// setHasError: quantitySetHasError,
		valueChangeHandler: quantityChangeHandler,
		valueBlurHandler: quantityBlurHandler,
		valueIsValid: quantityIsValid,
		errorFromServer: quantityErrFromServer,
		// QUANTITY
		// setErrorFromServer: quantitySetErrorFromServer,
		id: quantityId,
		// QUANTITY
		// reset: quantityReset,
	} = useCreateTicketInput("hardwareName", isHardwareQuantityValid);

  const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
  const hardwareQuantity = allPossibleFields.hardwareQuantity;
  const dispatch = useDispatch();

  const hardwareComponentTypeQuantityValueChangeHandler = (value) => {
    dispatch(createTicketActions.updateField({ key: "hardwareQuantity", value: value }));
  };

  return (
		<div className="flex items-center justify-between">
			<div className="">
				<GrayThemedLighterText>Hardware Component Name*</GrayThemedLighterText>
				<div className="w-[21rem]">
					<Input
						id={quantityId}
						onBlur={quantityBlurHandler}
						onChange={quantityChangeHandler}
						value={quantityValue}
						placeholder={"Enter hardware component name"}
						resizable={false}
						isValid={quantityIsValid}
					/>
				</div>
				{quantityHasError && (
					<ValidationErrorText errorFromServer={quantityErrFromServer}>
						{quantityErrorMessage}
					</ValidationErrorText>
				)}
			</div>
			<div className="flex items-center gap-[0.75rem]">
				<GrayThemedLighterText>Hardware Component Quantity</GrayThemedLighterText>
				<NumberDropDown
					min={1}
					max={100}
					onChange={hardwareComponentTypeQuantityValueChangeHandler}
					value={hardwareQuantity}
				/>
			</div>
		</div>
	);
}

export default HardwareComponentQuantity
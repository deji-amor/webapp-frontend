import React from 'react'
import GrayThemedLighterText from '../../../CreateTicketSuperAdmin/GrayThemedLighterText';
import NumberDropDown from "../general/NumberDropDown";
import { useDispatch, useSelector } from "react-redux";
import { editTicketActions } from '../../../../../../state-manager/reducers/tickets/ticketEdition';
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import { isHardwareQuantityValid } from "../../../../../../helpers/validation";
import useEditTicketInput from '../../../../../../hooks/useEditTicketInput';
import Input from "../general/Input";

const HardwareComponentQuantity = () => {
  const {
		enteredValue: quantityValue,
		errorMessage: quantityErrorMessage,
		hasError: quantityHasError,
		valueChangeHandler: quantityChangeHandler,
		valueBlurHandler: quantityBlurHandler,
		valueIsValid: quantityIsValid,
		errorFromServer: quantityErrFromServer,
		id: quantityId,
	} = useEditTicketInput("hardwareName", isHardwareQuantityValid);

  const allPossibleFields = useSelector((state) => state.ticketEdition.allPossibleFields);
  const hardwareQuantity = allPossibleFields.hardwareQuantity;
  const dispatch = useDispatch();

  const hardwareComponentTypeQuantityValueChangeHandler = (value) => {
    dispatch(editTicketActions.updateField({ key: "hardwareQuantity", value: value }));
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
import React, {useState} from 'react'
import AddIcon from "@mui/icons-material/Add";
import Input from '../general/Input';
import ValidationErrorText from '../../../../Login/ValidationErrorText';
import IconButton from '../general/IconButton';
import GrayThemedLightText from "../../GrayThemedLightText";
import GrayThemedLighterText from "../../GrayThemedLighterText";
import NumberDropDown from '../general/NumberDropDown';
import useCreateTicketInput from '../../../../../../hooks/useCreateTicketInput';
import Tab from '../general/Tab';
import BlueThemedLightText from '../../BlueThemedLightText';
import BlueThemeSmall from '../../BlueThemedSmall';
import BlueThemedMediumText from '../../BlueThemedMediumText';
import BlueThemedXtraSm from '../../BlueThemedXtraSm';
import { isNameEmpty } from '../../../../../../helpers/validation';
import { createTicketActions } from '../../../../../../state-manager/reducers/users/ticketCreation';
import { useSelector, useDispatch } from "react-redux";

const HardWareComponentType = () => {
  const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
	const hardwareComponentTypeList = allPossibleFields.hardwareComponentTypeList;
  const hardwareComponentTypeQuantity = allPossibleFields.hardwareComponentTypeQuantity;
  const dispatch = useDispatch();

	const [showInput, setShowInput] = useState(false)

		const {
			enteredValue: typeValue,
			errorMessage: typeErrorMessage,
			setErrorMessage: typeSetErrorMessage,
			hasError: typeHasError,
			setHasError: typeSetHasError,
			valueChangeHandler: typeChangeHandler,
			valueBlurHandler: typeBlurHandler,
			valueIsValid: typeIsValid,
			errorFromServer: typeErrFromServer,
			setErrorFromServer: typeSetErrorFromServer,
			id: typeId,
			reset: typeReset,
		} = useCreateTicketInput("hardwareInputTypeCurrentValue", isNameEmpty);

  const hardwareComponentTypeQuantityChangeHandler = (value) => {
		dispatch(
			createTicketActions.updateField({ key: "hardwareComponentTypeQuantity", value: value })
		);
	};

	const tablets = <div className='inline-flex gap-1'>{hardwareComponentTypeList.map((item) => <Tab key={item} onRemove={() => {}}>{item}</Tab>)}</div>;

  return (
		<div className="">
			<div className="">
				<GrayThemedLightText>Hardware Details</GrayThemedLightText>
			</div>
			<div className="px-[1.5rem] py-[1.25rem]">
				<div className="flex items-center gap-[0.75rem] mb-[1.72rem]">
					<GrayThemedLighterText>Number of Hardware</GrayThemedLighterText>
					<NumberDropDown
						min={1}
						max={100}
						onChange={hardwareComponentTypeQuantityChangeHandler}
						value={hardwareComponentTypeQuantity}
					/>
					{/* <input className=''/> */}
				</div>
				<div className="space-y-[0.5rem]">
					<GrayThemedLighterText>Hardware Types*</GrayThemedLighterText>
					{/* {tablets} */}
					{!showInput ? (
						<IconButton onClick={() => setShowInput((pv) => !pv)} icon={<AddIcon />}>
							Add New Hardware Type
						</IconButton>
					) : (
						<div className="max-w-[21rem]">
							<Input
								id={typeId}
								type={"text"}
								onBlur={typeBlurHandler}
								onChange={typeChangeHandler}
								placeholder={"Enter contact type"}
								value={typeValue}
							/>
							<BlueThemedXtraSm>Add at least one hardware type</BlueThemedXtraSm>
							{typeHasError && (
								<ValidationErrorText errorFromServer={typeErrFromServer}>
									{typeErrorMessage}
								</ValidationErrorText>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default HardWareComponentType
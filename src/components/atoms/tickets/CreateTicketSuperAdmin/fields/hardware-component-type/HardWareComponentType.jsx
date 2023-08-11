import React, {useState, useEffect} from 'react'
import AddIcon from "@mui/icons-material/Add";
import Input from '../general/Input';
import ValidationErrorText from '../../../../Login/ValidationErrorText';
import IconButton from '../general/IconButton';
import GrayThemedLightText from "../../GrayThemedLightText";
import GrayThemedLighterText from "../../GrayThemedLighterText";
import NumberDropDown from '../general/NumberDropDown';
import useCreateTicketInput from '../../../../../../hooks/useCreateTicketInput';
import Tab from '../general/Tab';
import AddOrCancelButton from '../general/AddOrCancelButton';
import BlueThemedXtraSm from '../../BlueThemedXtraSm';
import { isHardwareTypeValid } from '../../../../../../helpers/validation';
import { createTicketActions } from "../../../../../../state-manager/reducers/tickets/ticketCreation";
import { useSelector, useDispatch } from "react-redux";

const HardWareComponentType = () => {
  const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
  const hardwareComponentTypeQuantity = allPossibleFields.hardwareComponentTypeQuantity;
	const hardwareComponentTypeList = allPossibleFields.hardwareComponentTypeList;
	const hardwareInputTypeCurrentValue = allPossibleFields.hardwareInputTypeCurrentValue;
	const hardwareInputTypeCurrentValueIsValid = allPossibleFields.hardwareInputTypeCurrentValueIsValid
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
			// TYPE
			// setErrorFromServer: typeSetErrorFromServer,
			id: typeId,
			reset: typeReset,
		} = useCreateTicketInput("hardwareInputTypeCurrentValue", isHardwareTypeValid);

  const hardwareComponentTypeQuantityChangeHandler = (value) => {
		dispatch(
			createTicketActions.updateField({ key: "hardwareComponentTypeQuantity", value: value })
		);
	};

	const addTypeHandler = () => {
		console.log("add");
		const newList = [...hardwareComponentTypeList, hardwareInputTypeCurrentValue]
		dispatch(createTicketActions.updateField({ key: "hardwareComponentTypeList", value: newList }));
		dispatch(createTicketActions.updateField({ key: "hardwareInputTypeCurrentValue", value: "" }));
		typeReset();
	}

	const cancelTypeHandler = () => {
		console.log("remove");
		typeReset()
		dispatch(createTicketActions.updateField({ key: "hardwareInputTypeCurrentValue", value: "" }));
		setShowInput(false)
	}

	const removeTabHandler = (type) => {
		const newList = hardwareComponentTypeList.filter(item => item !== type)
		dispatch(createTicketActions.updateField({ key: "hardwareComponentTypeList", value: newList }));
	}

	useEffect(() => {
		if(hardwareComponentTypeList.some(item => item === hardwareInputTypeCurrentValue)){
			typeSetHasError(true)
			typeSetErrorMessage("Hard ware types can not have duplicates")
			dispatch(
				createTicketActions.updateField({ key: "hardwareInputTypeCurrentValueIsValid", value: false })
			);
		}
	}, [hardwareInputTypeCurrentValue, hardwareComponentTypeList, typeSetHasError, typeSetErrorMessage, dispatch]);

	const isAddButtonDisabled = !typeIsValid || !hardwareInputTypeCurrentValueIsValid;

	const tablets = <div className='inline-flex gap-1'>{hardwareComponentTypeList.map((item) => <Tab key={item} onRemove={removeTabHandler}>{item}</Tab>)}</div>;

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
				</div>
				<div className="space-y-[0.5rem]">
					<GrayThemedLighterText>Hardware Types*</GrayThemedLighterText>
						{tablets}
						{!showInput ? (
							<IconButton onClick={() => setShowInput((pv) => !pv)} icon={<AddIcon />}>
								Add New Hardware Type
							</IconButton>
						) : (
							<div className="">
								<div className="flex gap-4">
									<div className="basis-[21rem]">
										<Input
											id={typeId}
											type={"text"}
											onBlur={typeBlurHandler}
											onChange={typeChangeHandler}
											placeholder={"Enter hardware type"}
											value={typeValue}
											isValid={typeIsValid}
										/>
									</div>
									<div className="self-center space-x-[1rem]">										
										<AddOrCancelButton
											onClick={addTypeHandler}
											type="add"
											disabled={isAddButtonDisabled}
										/>
										<AddOrCancelButton onClick={cancelTypeHandler} type="cancel" />
									</div>{" "}
								</div>
								{typeHasError && (
									<ValidationErrorText errorFromServer={typeErrFromServer}>
										{typeErrorMessage}
									</ValidationErrorText>
								)}
								{(hardwareComponentTypeList.length === 0) && (
									<BlueThemedXtraSm>Add at least one hardware type</BlueThemedXtraSm>
								)}
							</div>
						)}
				</div>
			</div>
		</div>
	);
}

export default HardWareComponentType
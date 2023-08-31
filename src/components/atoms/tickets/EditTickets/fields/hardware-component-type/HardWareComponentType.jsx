import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import Input from "../general/Input";
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import IconButton from "../general/IconButton";
import GrayThemedLightText from "../../../CreateTicketSuperAdmin/GrayThemedLightText";
import GrayThemedLighterText from "../../../CreateTicketSuperAdmin/GrayThemedLighterText";
import NumberDropDown from "../general/NumberDropDown";
import useEditTicketInput from "../../../../../../hooks/useEditTicketInput";
import Tab from "../general/Tab";
import AddOrCancelButton from "../general/AddOrCancelButton";
import BlueThemedXtraSm from "../../../CreateTicketSuperAdmin/BlueThemedXtraSm";
import { isHardwareTypeValid } from "../../../../../../helpers/validation";
import { editTicketActions } from "../../../../../../state-manager/reducers/tickets/ticketEdition";
import { useSelector, useDispatch } from "react-redux";

const HardWareComponentType = () => {
	const allPossibleFields = useSelector((state) => state.ticketEdition.allPossibleFields);
	const hardwareComponentTypeQuantity = allPossibleFields.hardwareComponentTypeQuantity;
	const hardwareComponentTypeList = allPossibleFields.hardwareComponentTypeList;
	const hardwareInputTypeCurrentValue = allPossibleFields.hardwareInputTypeCurrentValue;
	const hardwareInputTypeCurrentValueIsValid =
		allPossibleFields.hardwareInputTypeCurrentValueIsValid;
	const dispatch = useDispatch();

	const [showInput, setShowInput] = useState(false);

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
		id: typeId,
		reset: typeReset,
	} = useEditTicketInput("hardwareInputTypeCurrentValue", isHardwareTypeValid);

	const hardwareComponentTypeQuantityChangeHandler = (value) => {
		dispatch(
			editTicketActions.updateField({ key: "hardwareComponentTypeQuantity", value: value })
		);
	};

	const addTypeHandler = () => {
		const newList = [...hardwareComponentTypeList, hardwareInputTypeCurrentValue];
		dispatch(editTicketActions.updateField({ key: "hardwareComponentTypeList", value: newList }));
		dispatch(editTicketActions.updateField({ key: "hardwareInputTypeCurrentValue", value: "" }));
		typeReset();
	};

	const cancelTypeHandler = () => {
		typeReset();
		dispatch(editTicketActions.updateField({ key: "hardwareInputTypeCurrentValue", value: "" }));
		setShowInput(false);
	};

	const removeTabHandler = (type) => {
		const newList = hardwareComponentTypeList.filter((item) => item !== type);
		dispatch(editTicketActions.updateField({ key: "hardwareComponentTypeList", value: newList }));
	};

	useEffect(() => {
		if (hardwareComponentTypeList.some((item) => item === hardwareInputTypeCurrentValue)) {
			typeSetHasError(true);
			typeSetErrorMessage("Hard ware types can not have duplicates");
			dispatch(
				editTicketActions.updateField({
					key: "hardwareInputTypeCurrentValueIsValid",
					value: false,
				})
			);
		}
	}, [
		hardwareInputTypeCurrentValue,
		hardwareComponentTypeList,
		typeSetHasError,
		typeSetErrorMessage,
		dispatch,
	]);

	useEffect(() => {
		if(hardwareComponentTypeList.every(item => isHardwareTypeValid(item))){
			dispatch(
				editTicketActions.updateField({ key: "hardwareComponentTypeListIsValid", value: true })
			);
		}else {
			dispatch(
				editTicketActions.updateField({ key: "hardwareComponentTypeListIsValid", value: false })
			);
		}
	}, [hardwareComponentTypeList]);

	const isAddButtonDisabled = !typeIsValid || !hardwareInputTypeCurrentValueIsValid;

	const tablets = (
		<div className="inline-flex gap-1">
			{hardwareComponentTypeList.map((item) => (
				<Tab key={item} onRemove={removeTabHandler}>
					{item}
				</Tab>
			))}
		</div>
	);

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
							{hardwareComponentTypeList.length === 0 && (
								<BlueThemedXtraSm>Add at least one hardware type</BlueThemedXtraSm>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default HardWareComponentType;

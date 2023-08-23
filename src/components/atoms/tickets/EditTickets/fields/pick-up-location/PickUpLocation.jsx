import React, { useEffect } from "react";
import GrayThemedLightText from "../../../CreateTicketSuperAdmin/GrayThemedLightText";
import GrayThemedLighterText from "../../../CreateTicketSuperAdmin/GrayThemedLighterText";
import NumberDropDown from "../general/NumberDropDown";
import { useDispatch, useSelector } from "react-redux";
import { editTicketActions } from "../../../../../../state-manager/reducers/tickets/ticketEdition";
import useEditTicketInput from "../../../../../../hooks/useEditTicketInput";
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import TextArea from "../general/TextArea";
import LocationTab from "../general/LocationTab";
import Checkbox from "../general/Checkbox";
import { isAddressEmpty } from "../../../../../../helpers/validation";
import { v4 } from "uuid";

const PickUpLocation = () => {
	const allPossibleFields = useSelector((state) => state.ticketEdition.allPossibleFields);
	const numberOfPickLocation = allPossibleFields.numberOfPickLocation;
	const pickLocations = allPossibleFields.pickLocations;
	const activePickLocationAddress = allPossibleFields.activePickLocationAddress;
	const activePickLocationType = allPossibleFields.activePickLocationType;
	const dispatch = useDispatch();

	const {
		enteredValue: locationAddressValue,
		errorMessage: locationAddressErrorMessage,
		hasError: locationAddressHasError,
		valueChangeHandler: locationAddressChangeHandler,
		valueBlurHandler: locationAddressBlurHandler,
		valueIsValid: locationAddressIsValid,
		errorFromServer: locationAddressErrFromServer,
		id: locationAddressId,
		reset: locationAddressReset,
	} = useEditTicketInput("pickLocationAddress", isAddressEmpty);

	const numberOfPickLocationChangeHandler = (value) => {
		dispatch(editTicketActions.updateField({ key: "numberOfPickLocation", value: value }));
	};

	useEffect(() => {
		const newLocations = Array.from({ length: numberOfPickLocation }, () => ({
			address: "",
			type: "governmental",
		}));
		dispatch(editTicketActions.updateField({ key: "pickLocations", value: newLocations }));
		dispatch(editTicketActions.updateField({ key: "activePickLocationAddress", value: 0 }));
		dispatch(editTicketActions.updateField({ key: "activePickLocationType", value: 0 }));
		dispatch(
			editTicketActions.updateField({ key: "pickLocationAddress", value: "governmental" })
		);
		locationAddressReset();
	}, [numberOfPickLocation, dispatch]);

	const changePickLocationChangeHandler = (location) => {
		dispatch(
			editTicketActions.updateField({ key: "activePickLocationAddress", value: location })
		);
		dispatch(editTicketActions.updateField({ key: "activePickLocationType", value: location }));
	};

	useEffect(() => {
		const newLocations = pickLocations.slice();
		const item = newLocations.find((loc, ind) => ind === activePickLocationType);
		const newItem = { ...item, address: locationAddressValue };
		newLocations.splice(activePickLocationType, 1, newItem);
		dispatch(editTicketActions.updateField({ key: "pickLocations", value: newLocations }));
		if (newLocations.every(({ address }) => isAddressEmpty(address)[0])) {
			dispatch(
				editTicketActions.updateField({ key: "pickLocationsAddressIsValid", value: true })
			);
		} else {
			dispatch(
				editTicketActions.updateField({ key: "pickLocationsAddressIsValid", value: false })
			);
		}
	}, [locationAddressValue]);

	useEffect(() => {
		locationAddressReset();
		dispatch(
			editTicketActions.updateField({
				key: "pickLocationAddress",
				value: pickLocations[activePickLocationAddress].address,
			})
		);
	}, [activePickLocationAddress]);

	const tablet = (
		<div className="py-[0.375rem] border-b-[1px] border-[#000] inline-flex items-center gap-[0.5rem] mb-[1.12rem]">
			{pickLocations.map(({ address, type }, ind) => (
				<div key={`${address}${type}${v4()}`} className="flex items-center gap-[0.5rem]">
					{ind !== 0 && <div className="w-[2.5625rem] h-[0.0625rem] bg-[#000]"></div>}
					<LocationTab
						number={ind + 1}
						isActive={activePickLocationAddress === ind}
						onClick={changePickLocationChangeHandler}
						isValid={isAddressEmpty(address)[0]}
					/>
				</div>
			))}
		</div>
	);

	const boxesChangeHandler = (type) => {
		const newLocations = pickLocations.slice();
		const item = newLocations.find((loc, ind) => ind === activePickLocationType);
		const newItem = { ...item, type: type };
		newLocations.splice(activePickLocationType, 1, newItem);
		dispatch(editTicketActions.updateField({ key: "pickLocations", value: newLocations }));
	};

	const boxes = (
		<div className="flex items-center gap-[1.5rem]">
			{["governmental", "commercial", "residential"].map((type, ind) => (
				<Checkbox
					key={type}
					onChange={boxesChangeHandler}
					isActive={type === pickLocations[activePickLocationType].type}
				>
					{type}
				</Checkbox>
			))}
		</div>
	);

	return (
		<div className="">
			<div className="mb-[0.75rem]">
				<GrayThemedLightText>Pick Up Locations Details:</GrayThemedLightText>
			</div>
			<div className="px-[1.5rem] py-[0.75rem] border-[0.5px] border-[#000]">
				<div className="flex items-center gap-[0.75rem] mb-[1.38rem]">
					<GrayThemedLighterText>Number of Locations</GrayThemedLighterText>
					<NumberDropDown
						min={1}
						max={5}
						onChange={numberOfPickLocationChangeHandler}
						value={numberOfPickLocation}
					/>
				</div>
				{tablet}
				<div className="mb-[0.75rem]">
					<GrayThemedLighterText>Location Address*</GrayThemedLighterText>
					<div className="w-[30rem] h-[6.25rem]">
						<TextArea
							id={locationAddressId}
							type={"text"}
							onBlur={locationAddressBlurHandler}
							onChange={locationAddressChangeHandler}
							placeholder={"Enter address..."}
							value={locationAddressValue}
							resizable={false}
							isValid={locationAddressIsValid}
						/>
					</div>
					{locationAddressHasError && (
						<ValidationErrorText errorFromServer={locationAddressErrFromServer}>
							{locationAddressErrorMessage}
						</ValidationErrorText>
					)}
				</div>
				<div className="">
					<div className="mb-[0.88rem]">
						<GrayThemedLighterText>Select building type*</GrayThemedLighterText>
					</div>
					{boxes}
				</div>
			</div>
		</div>
	);
};

export default PickUpLocation;

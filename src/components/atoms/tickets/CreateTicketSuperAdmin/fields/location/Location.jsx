import React, { useEffect } from 'react'
import GrayThemedLightText from '../../GrayThemedLightText';
import GrayThemedLighterText from "../../GrayThemedLighterText";
import NumberDropDown from "../general/NumberDropDown";
import { useDispatch, useSelector } from "react-redux";
import { createTicketActions } from "../../../../../../state-manager/reducers/tickets/ticketCreation";
import useCreateTicketInput from '../../../../../../hooks/useCreateTicketInput';
import ValidationErrorText from '../../../../Login/ValidationErrorText';
import TextArea from '../general/TextArea';
import LocationTab from '../general/LocationTab';
import Checkbox from '../general/Checkbox';
import { isAddressEmpty } from '../../../../../../helpers/validation';

const Location = () => {
	const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
	const numberOfLocation = allPossibleFields.numberOfLocation;
	const locations = allPossibleFields.locations;
	const locationsAddressIsValid = allPossibleFields.locationsAddressIsValid;
	const activeLocationAddress = allPossibleFields.activeLocationAddress;
	const activeLocationType = allPossibleFields.activeLocationType;
	const dispatch = useDispatch();

	const {
		enteredValue: locationAddressValue,
		errorMessage: locationAddressErrorMessage,
		setErrorMessage: locationAddressSetErrorMessage,
		hasError: locationAddressHasError,
		setHasError: locationAddressSetHasError,
		valueChangeHandler: locationAddressChangeHandler,
		valueBlurHandler: locationAddressBlurHandler,
		valueIsValid: locationAddressIsValid,
		errorFromServer: locationAddressErrFromServer,
		setErrorFromServer: locationAddressSetErrorFromServer,
		id: locationAddressId,
		reset: locationAddressReset,
	} = useCreateTicketInput("locationAddress", isAddressEmpty);

	const numberOfLocationChangeHandler = (value) => {
		dispatch(createTicketActions.updateField({ key: "numberOfLocation", value: value }));
	};

	useEffect(() => {
		const newLocations = Array.from({length: numberOfLocation}, () => ({address: "", type: "governmental"}))
		dispatch(createTicketActions.updateField({ key: "locations", value: newLocations }));
		dispatch(createTicketActions.updateField({ key: "activeLocationAddress", value: 0 }));
		dispatch(createTicketActions.updateField({ key: "activeLocationType", value: 0 }));
		dispatch(createTicketActions.updateField({ key: "locationType", value: "governmental" }));
		locationAddressReset()
	}, [numberOfLocation, dispatch])
	
	const changeActiveLocationAddressHandler = (location) => {
		dispatch(createTicketActions.updateField({ key: "activeLocationAddress", value: location }));
		dispatch(createTicketActions.updateField({ key: "activeLocationType", value: location }));
	};

	useEffect(() => {
		// console.log("fired");
		const newLocations = locations.slice();
		const item = newLocations.find((loc, ind) => ind === activeLocationAddress);
		const newItem = { ...item, address: locationAddressValue };
		newLocations.splice(activeLocationAddress, 1, newItem);
		dispatch(createTicketActions.updateField({ key: "locations", value: newLocations }));
		if(newLocations.every(({address}) => isAddressEmpty(address)[0])){
			dispatch(createTicketActions.updateField({ key: "locationsAddressIsValid", value: true }));
		}else {
			dispatch(createTicketActions.updateField({ key: "locationsAddressIsValid", value: false }));
		}
	}, [locationAddressValue]);

	useEffect(() => {
		locationAddressReset()
		dispatch(createTicketActions.updateField({ key: "locationAddress", value: locations[activeLocationAddress].address }));
	}, [activeLocationAddress])


	const tablet = (
		<div className="py-[0.375rem] border-b-[1px] border-[#000] inline-flex items-center gap-[0.5rem] mb-[1.12rem]">
			{locations.map(({ address, type }, ind) => (
				<div key={`${address}${ind}`} className="flex items-center gap-[0.5rem]">
					{ind !== 0 && <div className="w-[2.5625rem] h-[0.0625rem] bg-[#000]"></div>}
					<LocationTab
						number={ind + 1}
						isActive={activeLocationAddress === ind}
						onClick={changeActiveLocationAddressHandler}
						isValid={isAddressEmpty(address)[0]}
					/>
				</div>
			))}
		</div>
	);

	const boxesChangeHandler = (type) => {
		const newLocations = locations.slice();
		const item = newLocations.find((loc, ind) => ind === activeLocationType);
		const newItem = { ...item, type: type };
		newLocations.splice(activeLocationType, 1, newItem);
		dispatch(createTicketActions.updateField({ key: "locations", value: newLocations }));
		// dispatch(createTicketActions.updateField({ ey: "activeLocationType",  }));
	}

	const boxes = (
		<div className="flex items-center gap-[1.5rem]">
			{["governmental", "commercial", "residential"].map((type, ind) => (
				<Checkbox key={type} onChange={boxesChangeHandler} isActive={type === locations[activeLocationType].type}>
					{type}
				</Checkbox>
			))}
		</div>
	);

	// console.log(locations, locationsAddressIsValid);
	// console.log({numberOfLocation});

	return (
		<div className="">
			<div className="mb-[0.75rem]">
				<GrayThemedLightText>Locations Details:</GrayThemedLightText>
			</div>
			<div className="px-[1.5rem] py-[0.75rem] border-[0.5px] border-[#000]">
				<div className="flex items-center gap-[0.75rem] mb-[1.38rem]">
					<GrayThemedLighterText>Number of Locations</GrayThemedLighterText>
					<NumberDropDown
						min={1}
						max={5}
						onChange={numberOfLocationChangeHandler}
						value={numberOfLocation}
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
}

export default Location

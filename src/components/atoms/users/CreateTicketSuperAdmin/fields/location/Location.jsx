import React, { useEffect } from 'react'
import GrayThemedLightText from '../../GrayThemedLightText';
import GrayThemedLighterText from "../../GrayThemedLighterText";
import NumberDropDown from "../general/NumberDropDown";
import { useDispatch, useSelector } from "react-redux";
import { createTicketActions } from "../../../../../../state-manager/reducers/users/ticketCreation";
import useCreateTicketInput from '../../../../../../hooks/useCreateTicketInput';
import ValidationErrorText from '../../../../Login/ValidationErrorText';
import TextArea from '../general/TextArea';
import LocationTab from '../general/LocationTab';
import { isAddressEmpty } from '../../../../../../helpers/validation';

const Location = () => {
  const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
  const numberOfLocation = allPossibleFields.numberOfLocation;
  const dispatch = useDispatch();

  const locations = allPossibleFields.locations;
  const activeLocation = allPossibleFields.activeLocation;

  // for the drop down
  const numberOfLocationChangeHandler = (value) => {
    dispatch(createTicketActions.updateField({ key: "numberOfLocation", value: value }));
  };

  // for the location tabs
  const changeActiveLocationHandler = (location) => {
    dispatch(createTicketActions.updateField({ key: "activeLocation", value: location }));
  }

  // for current location
    const {
			enteredValue: locationValue,
			errorMessage: locationErrorMessage,
			setErrorMessage: locationSetErrorMessage,
			hasError: locationHasError,
			setHasError: locationSetHasError,
			valueChangeHandler: locationChangeHandler,
			valueBlurHandler: locationBlurHandler,
			valueIsValid: locationIsValid,
			errorFromServer: locationErrFromServer,
			setErrorFromServer: locationSetErrorFromServer,
			id: locationId,
			reset: locationReset,
		} = useCreateTicketInput("location", isAddressEmpty);

    // when the number of locations is changed reset
    useEffect(() => {
      const newLocations = Array.from({ length: numberOfLocation }, () => "");
      dispatch(createTicketActions.updateField({ key: "locations", value: newLocations }));
      dispatch(createTicketActions.updateField({ key: "activeLocation", value: 0 }));
      locationReset()
    }, [numberOfLocation, dispatch]);

    // when the active location is changed the input address to put to the right item in the location list
    useEffect(() => {
      dispatch(createTicketActions.updateField({ key: "location", value: locations[activeLocation] }));
    }, [activeLocation, dispatch])

    // when the locationValue from the input changes, update the respective item in the list 
    useEffect(() => {
      const newLocations = locations.slice()
      newLocations.splice(activeLocation, 1, locationValue)
      dispatch(createTicketActions.updateField({ key: "locations", value: newLocations }));
    }, [locationValue, dispatch])

    const tablet = (
			<div className="py-[0.375rem] border-b-[1px] border-[#000] inline-flex items-center gap-[0.5rem] mb-[1.12rem]">
				{locations.map((location, ind) => (
					<div key={`${location}${ind}`} className='flex items-center gap-[0.5rem]'>
						{ind !== 0 && <div className="w-[2.5625rem] h-[0.0625rem] bg-[#000]"></div>}
						<LocationTab
							number={ind + 1}
							isActive={activeLocation === ind}
							onClick={changeActiveLocationHandler}
              isValid={isAddressEmpty(location)[0]}
						/>
					</div>
				))}
			</div>
		);

  return (
		<div>
			<div className="mb-[0.75rem]">
				<GrayThemedLightText>Pick Up Locations Details:</GrayThemedLightText>
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
				<div className="">
					<GrayThemedLighterText>Address of contact*</GrayThemedLighterText>
					<div className="w-[30rem] h-[6.25rem]">
						<TextArea
							id={locationId}
							onBlur={locationBlurHandler}
							onChange={locationChangeHandler}
							value={locationValue}
							placeholder={"Enter location..."}
							resizable={false}
						/>
					</div>
					{locationHasError && (
						<ValidationErrorText errorFromServer={locationErrFromServer}>
							{locationErrorMessage}
						</ValidationErrorText>
					)}
				</div>
			</div>
		</div>
	);
}

export default Location
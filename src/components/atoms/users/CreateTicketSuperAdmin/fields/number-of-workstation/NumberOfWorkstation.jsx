import React from 'react'
import GrayThemedLighterText from "../../GrayThemedLighterText";
import NumberDropDown from "../general/NumberDropDown";
import { useDispatch, useSelector } from "react-redux";
import { createTicketActions } from "../../../../../../state-manager/reducers/users/ticketCreation";

const NumberOfWorkstation = () => {
    const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
		const numberOfWorkstation = allPossibleFields.numberOfWorkstation;
		const dispatch = useDispatch();

		const numberOfWorkstationChangeHandler = (value) => {
			dispatch(
				createTicketActions.updateField({ key: "numberOfWorkstation", value: value })
			);
		};

  return (
		<div className="flex items-center gap-[0.75rem]">
			<GrayThemedLighterText>Number of Workstations</GrayThemedLighterText>
			<NumberDropDown
				min={1}
				max={100}
				onChange={numberOfWorkstationChangeHandler}
				value={numberOfWorkstation}
			/>
		</div>
	);
}

export default NumberOfWorkstation
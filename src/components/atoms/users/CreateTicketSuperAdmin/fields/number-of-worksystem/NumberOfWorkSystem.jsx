import React from 'react'
import GrayThemedLighterText from "../../GrayThemedLighterText";
import NumberDropDown from "../general/NumberDropDown";
import { useDispatch, useSelector } from "react-redux";
import { createTicketActions } from "../../../../../../state-manager/reducers/users/ticketCreation";

const NumberOfWorkSystem = () => {
    const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
		const numberOfWorkSystem = allPossibleFields.numberOfWorkSystem;
		const dispatch = useDispatch();

		const numberOfWorkSystemChangeHandler = (value) => {
			dispatch(createTicketActions.updateField({ key: "numberOfWorkSystem", value: value }));
		};

		return (
			<div className="flex items-center gap-[0.75rem]">
				<GrayThemedLighterText>Number of Work Systems</GrayThemedLighterText>
				<NumberDropDown
					min={1}
					max={100}
					onChange={numberOfWorkSystemChangeHandler}
					value={numberOfWorkSystem}
				/>
			</div>
		);
}

export default NumberOfWorkSystem
import React from 'react'
import GrayThemedLighterText from "../../GrayThemedLighterText";
import NumberDropDown from "../general/NumberDropDown";
import { useDispatch, useSelector } from "react-redux";
import { createTicketActions } from "../../../../../../state-manager/reducers/tickets/ticketCreation";

const NumberOfWorkSystem = () => {
    const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
		const numberOfWorkSystems = allPossibleFields.numberOfWorkSystems;
		const dispatch = useDispatch();

		const numberOfWorkSystemsChangeHandler = (value) => {
			dispatch(createTicketActions.updateField({ key: "numberOfWorkSystems", value: value }));
		};

		return (
			<div className="flex items-center gap-[0.75rem]">
				<GrayThemedLighterText>Number of Work Systems</GrayThemedLighterText>
				<NumberDropDown
					min={1}
					max={100}
					onChange={numberOfWorkSystemsChangeHandler}
					value={numberOfWorkSystems}
				/>
			</div>
		);
}

export default NumberOfWorkSystem
// 
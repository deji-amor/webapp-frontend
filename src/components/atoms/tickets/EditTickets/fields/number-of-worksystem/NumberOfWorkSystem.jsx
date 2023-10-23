import React from 'react'
import GrayThemedLighterText from '../../../CreateTicketSuperAdmin/GrayThemedLighterText';
import NumberDropDown from "../general/NumberDropDown";
import { useDispatch, useSelector } from "react-redux";
import { editTicketActions } from '../../../../../../state-manager/reducers/tickets/ticketEdition';

const NumberOfWorkSystem = () => {
    const allPossibleFields = useSelector((state) => state.ticketEdition.allPossibleFields);
		const numberOfWorkSystems = allPossibleFields.numberOfWorkSystems;
		const dispatch = useDispatch();

		const numberOfWorkSystemsChangeHandler = (value) => {
			dispatch(editTicketActions.updateField({ key: "numberOfWorkSystems", value: value }));
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
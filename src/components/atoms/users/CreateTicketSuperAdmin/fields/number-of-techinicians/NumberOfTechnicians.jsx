import React from 'react'
import GrayThemedLighterText from "../../GrayThemedLighterText";
import NumberDropDown from '../general/NumberDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { createTicketActions } from '../../../../../../state-manager/reducers/users/ticketCreation';

const NumberOfTechnicians = () => {
    const allPossibleFields = useSelector((state) => state.ticketCreation.allPossibleFields);
    const numberOfTechnicians = allPossibleFields.numberOfTechnicians;
    const dispatch = useDispatch()

  const technicianNumberChangeHandler = (value) => {
    console.log(value);
    dispatch(
			createTicketActions.updateField({ key: "numberOfTechnicians", value: value })
		);
  }

  return (
    <div className=''>
      <div className='flex items-center gap-[0.75rem]'>
        <GrayThemedLighterText>Number of Technicians</GrayThemedLighterText>
        <NumberDropDown min={1} max={100} onChange={technicianNumberChangeHandler} value={numberOfTechnicians}/>
        {/* <input className=''/> */}
      </div>
    </div>
  )
}

export default NumberOfTechnicians
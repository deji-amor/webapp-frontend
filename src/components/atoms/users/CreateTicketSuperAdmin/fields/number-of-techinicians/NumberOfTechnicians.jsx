import React from 'react'
import ValidationErrorText from "../../../../Login/ValidationErrorText";
import { isMaterialEmpty } from "../../../../../../helpers/validation";
import useCreateTicketInput from "../../../../../../hooks/useCreateTicketInput";
import GrayThemedLighterText from "../../GrayThemedLighterText";
import TextArea from "../general/TextArea";

const NumberOfTechnicians = () => {
  return (
    <div className=''>
      <div className='flex items-center'>
        <GrayThemedLighterText>Number of Technicians</GrayThemedLighterText>
        <input className=''/>
      </div>
    </div>
  )
}

export default NumberOfTechnicians
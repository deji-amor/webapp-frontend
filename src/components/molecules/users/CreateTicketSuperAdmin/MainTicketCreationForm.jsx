import React from 'react'
import FormButton from '../../../atoms/users/CreateTicketSuperAdmin/FormButton'
import GrayThemedLightText from '../../../atoms/users/CreateTicketSuperAdmin/GrayThemedLightText'
import GrayThemedLighterText from '../../../atoms/users/CreateTicketSuperAdmin/GrayThemedLighterText'
import GrayThemedLightestText from '../../../atoms/users/CreateTicketSuperAdmin/GrayThemedLightestText'
import PointOfContact from '../../../atoms/users/CreateTicketSuperAdmin/fields/point-of-contact/PointOfContact'

const MainTicketCreationForm = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(formData);
  }

  return (
		<form onSubmit={submitHandler}>
			<div className="max-w-[55rem] min-h-[25rem] overflow-y-auto space-y-[0.75rem]">
				<div className="">
					<GrayThemedLightText>Ticket Details:</GrayThemedLightText>
				</div>
        <div className=''>
          <PointOfContact/>
        </div>
			</div>
			<div className="flex items-center justify-end gap-[1rem]">
				<FormButton highLighted={false} type="button">
					Back
				</FormButton>
				<FormButton highLighted={true} type="submit">
					Save Ticket
				</FormButton>
			</div>
		</form>
	);
}

export default MainTicketCreationForm
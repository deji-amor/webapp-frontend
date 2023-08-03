import React from 'react'
import FormButton from '../../../atoms/users/CreateTicketSuperAdmin/FormButton'
import GrayThemedLightText from '../../../atoms/users/CreateTicketSuperAdmin/GrayThemedLightText'
import GrayThemedLighterText from '../../../atoms/users/CreateTicketSuperAdmin/GrayThemedLighterText'
import GrayThemedLightestText from '../../../atoms/users/CreateTicketSuperAdmin/GrayThemedLightestText'
import PointOfContact from '../../../atoms/users/CreateTicketSuperAdmin/fields/point-of-contact/PointOfContact'
import MaterialsProcurement from '../../../atoms/users/CreateTicketSuperAdmin/fields/materials-procurement/MaterialsProcurement'
import ScopeOfWork from '../../../atoms/users/CreateTicketSuperAdmin/fields/scope-of-work/ScopeOfWork'
import HorizontalRule from '../../../atoms/users/CreateTicketSuperAdmin/HorizontalRule'

const MainTicketCreationForm = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(formData);
  }

  return (
		<form onSubmit={submitHandler}>
			<div className="min-h-[20rem] overflow-y-auto space-y-[0.75rem]">
				<div className="">
					<GrayThemedLightText>Ticket Details:</GrayThemedLightText>
				</div>
				<div className="space-y-[1.25rem]">
					{/* POINT OF CONTACT */}
					<PointOfContact />
					<div className="max-w-[48rem]">
						<HorizontalRule />
					</div>
					<div className="flex items-start justify-start gap-[2rem]">
						<MaterialsProcurement />
						<ScopeOfWork />
					</div>
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
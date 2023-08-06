import React from 'react'
import FormButton from '../../../atoms/users/CreateTicketSuperAdmin/FormButton'
import GrayThemedLightText from '../../../atoms/users/CreateTicketSuperAdmin/GrayThemedLightText'
import GrayThemedLighterText from '../../../atoms/users/CreateTicketSuperAdmin/GrayThemedLighterText'
import GrayThemedLightestText from '../../../atoms/users/CreateTicketSuperAdmin/GrayThemedLightestText'
import { useDispatch, useSelector } from 'react-redux'
import { createTicketActions } from '../../../../state-manager/reducers/users/ticketCreation'
import PointOfContact from '../../../atoms/users/CreateTicketSuperAdmin/fields/point-of-contact/PointOfContact'
import MaterialsProcurement from '../../../atoms/users/CreateTicketSuperAdmin/fields/materials-procurement/MaterialsProcurement'
import ScopeOfWork from '../../../atoms/users/CreateTicketSuperAdmin/fields/scope-of-work/ScopeOfWork'
import Duration from '../../../atoms/users/CreateTicketSuperAdmin/fields/duration/Duration'
import NumberOfTechnicians from '../../../atoms/users/CreateTicketSuperAdmin/fields/number-of-techinicians/NumberOfTechnicians'
import HardWareComponentType from '../../../atoms/users/CreateTicketSuperAdmin/fields/hardware-component-type/HardWareComponentType'
import HardwareComponentQuantity from '../../../atoms/users/CreateTicketSuperAdmin/fields/hardware-component-quantity/HardwareComponentQuantity'
import NumberOfWorkstation from '../../../atoms/users/CreateTicketSuperAdmin/fields/number-of-workstation/NumberOfWorkstation'
import NumberOfWorkSystem from '../../../atoms/users/CreateTicketSuperAdmin/fields/number-of-worksystem/NumberOfWorksystem'
import SoftwareApplicationCustomization from '../../../atoms/users/CreateTicketSuperAdmin/fields/software-application-customization/SoftwareApplicationCustomization'
import SoftwareApplicationInstallation from '../../../atoms/users/CreateTicketSuperAdmin/fields/software-application-installation/SoftwareApplicationInstallation'
import PickUpLocation from '../../../atoms/users/CreateTicketSuperAdmin/fields/pick-up-location/PickUpLocation'
import DropOffLocation from '../../../atoms/users/CreateTicketSuperAdmin/fields/drop-off-location/DropOffLocation'
import Location from '../../../atoms/users/CreateTicketSuperAdmin/fields/location/Location'
import HorizontalRule from '../../../atoms/users/CreateTicketSuperAdmin/HorizontalRule'

const MainTicketCreationForm = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log(formData);
  }

	const dispatch = useDispatch()

	const goBackHandler = () => {
		dispatch(createTicketActions.goBackToAddTicketModal());
	}

  return (
		<form onSubmit={submitHandler}>
			<div className="max-h-[25rem] max-w-[65rem] overflow-y-auto space-y-[0.75rem]">
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
					<div className=''>
						<NumberOfWorkSystem/>
					</div>
					<div className=''>
						<NumberOfWorkstation/>
					</div>
					<div className='flex items-center justify-start gap-[8.75rem]'>
						<NumberOfTechnicians/>
						<Duration/>
					</div>
					<div className=''>
						<HardWareComponentType/>
					</div>
					<div className=''>
						<HardwareComponentQuantity/>
					</div>
					<div className=''>
						<SoftwareApplicationCustomization/>
					</div>
					<div className=''>
						<SoftwareApplicationInstallation/>
					</div>
					<div className=''>
						<PickUpLocation/>
					</div>
					<div className=''>
						<DropOffLocation/>
					</div>
					<div className=''>
						<Location/>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-end gap-[1rem]">
				<FormButton highLighted={false} onClick={goBackHandler} type="button">
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
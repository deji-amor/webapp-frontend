import React, { useEffect } from "react";
import {
	createTicket,
	createTicketActions,
} from "../../../../state-manager/reducers/tickets/ticketCreation";
import FormButton from "../../../atoms/tickets/CreateTicketSuperAdmin/FormButton";
import GrayThemedLightText from "../../../atoms/tickets/CreateTicketSuperAdmin/GrayThemedLightText";
import Loader from "../../../organisms/tickets/Loader";
import useCreateTicketFormValidator from "../../../../hooks/useCreateTicketFormValidator";
import useCreateTicketFields from "../../../../hooks/useCreateTicketFields";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../../../state-manager/reducers/UI/ui";
import { ticketsActions } from "../../../../state-manager/reducers/tickets/tickets";
import PointOfContact from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/point-of-contact/PointOfContact";
import MaterialsProcurement from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/materials-procurement/MaterialsProcurement";
import ScopeOfWork from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/scope-of-work/ScopeOfWork";
import Duration from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/duration/Duration";
import NumberOfTechnicians from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/number-of-techinicians/NumberOfTechnicians";
import HardWareComponentType from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/hardware-component-type/HardWareComponentType";
import HardwareComponentQuantity from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/hardware-component-quantity/HardwareComponentQuantity";
import NumberOfWorkstation from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/number-of-workstation/NumberOfWorkstation";
import NumberOfWorkSystem from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/number-of-worksystem/NumberOfWorkSystem";
import SoftwareApplicationCustomization from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/software-application-customization/SoftwareApplicationCustomization";
import SoftwareApplicationInstallation from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/software-application-installation/SoftwareApplicationInstallation";
import PickUpLocation from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/pick-up-location/PickUpLocation";
import DropOffLocation from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/drop-off-location/DropOffLocation";
import AddExtraFields from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/extra-fields/AddExtraFields";
import Location from "../../../atoms/tickets/CreateTicketSuperAdmin/fields/location/Location";
import HorizontalRule from "../../../atoms/tickets/CreateTicketSuperAdmin/HorizontalRule";

const MainTicketCreationForm = () => {
	const requiredFields = useCreateTicketFields();
	const dispatch = useDispatch();
	const {customer, data} = useSelector((state) => state.ticketCreation);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(createTicket(requiredFields));
	};

	const goBackHandler = () => {
		dispatch(createTicketActions.goBackToAddTicketModal(customer));
	};

	const {loading, error, errorMessage, successful } = useSelector(
		(state) => state.ticketCreation
	);
	useEffect(() => {
		if (successful === true) {
			console.log({data});
			if(data) dispatch(ticketsActions.addNewTicket(data))
			dispatch(
				UIActions.showToasts({
					message: "You have successfully created a new Ticket for the customer.",
					title: "Ticket Created Successfully",
					type: "successful"
				})
			);
		dispatch(createTicketActions.toggleTemplateModal());
		}
		if (error === true) {
				dispatch(
					UIActions.showToasts({
						message: errorMessage,
						title: "Ticket Creation Unsuccessful",
						type: "error",
					})
				);
			// DISPATCH dispatch(createTicketActions.toggleTemplateModal());
		}
	}, [error, successful, data]);

	const isFormValid = useCreateTicketFormValidator();
	const isFormDisabled = !isFormValid;

	const chosenTemplate = useSelector((state) => state.ticketCreation.chosenTemplate);
	const pointOfContact = chosenTemplate.includes("pointOfContact");
	const numberOfTechniciansNeeded = chosenTemplate.includes("numberOfTechniciansNeeded");
	const scopeOfWork = chosenTemplate.includes("scopeOfWork");
	const duration = chosenTemplate.includes("duration");
	const hardwareComponentQuantity = chosenTemplate.includes("hardwareComponentQuantity");
	const hardwareComponentType = chosenTemplate.includes("hardwareComponentType");
	const location = chosenTemplate.includes("location");
	const materialsProcurement = chosenTemplate.includes("materialsProcurement");
	const numberOfWorkStation = chosenTemplate.includes("numberOfWorkStation");
	const numberOfWorkSystems = chosenTemplate.includes("numberOfWorkSystems");
	const softwareApplicationInstallation = chosenTemplate.includes(
		"softwareApplicationInstallation"
	);
	const softwareApplicationCustomization = chosenTemplate.includes(
		"softwareApplicationCustomization"
	);
	const pickUpLocation = chosenTemplate.includes("pickUpLocation");
	const dropOffLocation = chosenTemplate.includes("dropOffLocation");
	const additionalFields = chosenTemplate.includes("additionalFields");

	return (
		<form onSubmit={submitHandler}>
			<div
				id="ticket-creation-form-sections"
				className="max-h-[26rem] max-w-[67rem] overflow-y-auto space-y-[0.75rem] mb-[1rem]"
			>
				<div className="">
					<GrayThemedLightText>Ticket Details:</GrayThemedLightText>
				</div>
				<div className="space-y-[1.25rem] p-[2px]">
					{/* POINT OF CONTACT */}
					{pointOfContact && <PointOfContact />}
					<div className="max-w-[48rem]">
						<HorizontalRule />
					</div>
					<div className="flex items-start justify-start gap-[2rem]">
						{materialsProcurement && <MaterialsProcurement />}
						{scopeOfWork && <ScopeOfWork />}
					</div>
					<div className="">{numberOfWorkSystems && <NumberOfWorkSystem />}</div>
					<div className="">{numberOfWorkStation && <NumberOfWorkstation />}</div>
					<div className="">{hardwareComponentQuantity && <HardwareComponentQuantity />}</div>
					<div className="flex items-center justify-start gap-[8.75rem]">
						{numberOfTechniciansNeeded && <NumberOfTechnicians />}
						{duration && <Duration />}
					</div>
					<div className="">{hardwareComponentType && <HardWareComponentType />}</div>
					<div className="">
						{softwareApplicationCustomization && <SoftwareApplicationCustomization />}
					</div>
					<div className="">
						{softwareApplicationInstallation && <SoftwareApplicationInstallation />}
					</div>
					<div className="">{pickUpLocation && <PickUpLocation />}</div>
					<div className="">{dropOffLocation && <DropOffLocation />}</div>
					<div className="">{location && <Location />}</div>
					<div className="">{additionalFields && <AddExtraFields />}</div>
					<div id="ticket-creation-form-sections"></div>
				</div>
			</div>
			<div className="flex items-center justify-end gap-[1rem]">
				<FormButton highLighted={false} onClick={goBackHandler} type="button">
					Back
				</FormButton>
				<FormButton highLighted={true} type="submit" disabled={isFormDisabled || loading}>
					{loading ? <Loader>Creating Ticket...</Loader> : "Save Ticket"}
				</FormButton>
			</div>
		</form>
	);
};

export default MainTicketCreationForm;

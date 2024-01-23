import React, { useEffect } from "react";
import FormButton from "../../../atoms/tickets/CreateTicketSuperAdmin/FormButton";
import GrayThemedLightText from "../../../atoms/tickets/CreateTicketSuperAdmin/GrayThemedLightText";
import Loader from "../../../organisms/tickets/Loader";
import useEditTicketFormValidator from "../../../../hooks/useEditTicketFormValidator";
import useEditTicketFields from "../../../../hooks/useEditTicketFields";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../../../state-manager/reducers/UI/ui";
import { ticketsActions } from "../../../../state-manager/reducers/tickets/tickets";
import useEditTicketIsAltered from "../../../../hooks/useEditTicketIsAltered";
import {
	editTicketActions,
	editTicket,
} from "../../../../state-manager/reducers/tickets/ticketEdition";
import PointOfContact from "../../../atoms/tickets/EditTickets/fields/point-of-contact/PointOfContact";
import MaterialsProcurement from "../../../atoms/tickets/EditTickets/fields/materials-procurement/MaterialsProcurement";
import ScopeOfWork from "../../../atoms/tickets/EditTickets/fields/scope-of-work/ScopeOfWork";
import Duration from "../../../atoms/tickets/EditTickets/fields/duration/Duration";
import NumberOfTechnicians from "../../../atoms/tickets/EditTickets/fields/number-of-techinicians/NumberOfTechnicians";
import HardWareComponentType from "../../../atoms/tickets/EditTickets/fields/hardware-component-type/HardWareComponentType";
import HardwareComponentQuantity from "../../../atoms/tickets/EditTickets/fields/hardware-component-quantity/HardwareComponentQuantity";
import NumberOfWorkstation from "../../../atoms/tickets/EditTickets/fields/number-of-workstation/NumberOfWorkstation";
import NumberOfWorkSystem from "../../../atoms/tickets/EditTickets/fields/number-of-worksystem/NumberOfWorkSystem";
import SoftwareApplicationCustomization from "../../../atoms/tickets/EditTickets/fields/software-application-customization/SoftwareApplicationCustomization";
import SoftwareApplicationInstallation from "../../../atoms/tickets/EditTickets/fields/software-application-installation/SoftwareApplicationInstallation";
import PickUpLocation from "../../../atoms/tickets/EditTickets/fields/pick-up-location/PickUpLocation";
import DropOffLocation from "../../../atoms/tickets/EditTickets/fields/drop-off-location/DropOffLocation";
import AddExtraFields from "../../../atoms/tickets/EditTickets/fields/extra-fields/AddExtraFields";
import Location from "../../../atoms/tickets/EditTickets/fields/location/Location";
import HorizontalRule from "../../../atoms/tickets/CreateTicketSuperAdmin/HorizontalRule";

const MainTicketEditionForm = () => {
	const requiredFields = useEditTicketFields();
	const hasTicketHasChanged = useEditTicketIsAltered();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { originalTicket } = useSelector((state) => state.ticketEdition);

	const submitHandler = (e) => {
		e.preventDefault();
	console.log(requiredFields);

  if (requiredFields.pointOfContactAddress) {
    requiredFields.pointOfContactAddress = requiredFields.pointOfContactAddress.replaceAll("\n", "\\n");
  }
  if (requiredFields.materialsDescription) {
    requiredFields.materialsDescription = requiredFields.materialsDescription.replaceAll("\n", "\\n");
  }
  if (requiredFields.scopeOfWorkDescription) {
    requiredFields.scopeOfWorkDescription = requiredFields.scopeOfWorkDescription.replaceAll("\n", "\\n");
  }
  if (requiredFields.locations) {
    requiredFields.locations = requiredFields.locations?.map(loc => ({...loc, address: loc?.address?.replaceAll("\n", "\\n")}));
  }
  if (requiredFields.pickLocations) {
    requiredFields.pickLocations = requiredFields.pickLocations?.map(loc => ({...loc, address: loc?.address?.replaceAll("\n", "\\n")}));
  }
  if (requiredFields.dropOffLocations) {
    requiredFields.dropOffLocations = requiredFields.dropOffLocations?.map(loc => ({...loc, address: loc?.address?.replaceAll("\n", "\\n")}));
  }

	console.log(requiredFields);
		dispatch(editTicket(requiredFields));
	};

	const goBackHandler = () => {
		dispatch(editTicketActions.reset());
		navigate(-1);
	};

	const { loading, error, errorMessage, successful, data } = useSelector(
		(state) => state.ticketEdition
	);

	useEffect(() => {
		if (successful === true) {
			if (data) dispatch(ticketsActions.replaceTicket(data));
			dispatch(editTicketActions.reset());
			dispatch(
				UIActions.showToasts({
					message: "You have successfully edited the Ticket for the customer.",
					title: "Ticket Edit Successful",
					type: "successful",
				})
			);
			dispatch(
				editTicketActions.changeMultipleState([
					{ key: "error", value: null },
					{ key: "successful", value: null },
				])
			);
			navigate(-1);
		}
		if (error === true) {
			dispatch(
				UIActions.showToasts({
					message: errorMessage,
					title: "Ticket Edit Unsuccessful",
					type: "error",
				})
			);
			dispatch(
				editTicketActions.changeMultipleState([
					{ key: "error", value: null },
					{ key: "successful", value: null },
				])
			);
		}
	}, [error, data, successful]);

	const isFormValid = useEditTicketFormValidator() && !hasTicketHasChanged;
	// console.log({isFormValid});
	const isFormDisabled = !isFormValid;

	const chosenTemplate = useSelector((state) => state.ticketEdition.chosenTemplate);
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
					{loading ? <Loader>Updating Ticket...</Loader> : "Save And Update Changes"}
				</FormButton>
			</div>
		</form>
	);
};

export default MainTicketEditionForm;

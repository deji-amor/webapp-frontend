import React, { useEffect, useMemo, useState } from "react";
import MediumText from "../../../atoms/tickets/CreateTicketSuperAdmin/MediumText";
import EditIcon from "@mui/icons-material/Edit";
import HorizontalRule from "../../../atoms/tickets/CreateTicketSuperAdmin/HorizontalRule";
import SmallText from "../../../atoms/tickets/CreateTicketSuperAdmin/SmallText";
import LightText from "../../../atoms/tickets/CreateTicketSuperAdmin/LightText";
import UserActivity from "../../../atoms/tickets/CreateTicketSuperAdmin/UserActivity";
import { useSelector, useDispatch } from "react-redux";
import { getDateFromDateTime } from "../../../../helpers/date-manipulation";
import EditableFields from "../../users/CustomerSuperAdmin/EditableFields";
import { Button } from "@mui/material";
import SplitButtonDropdown from "../../../atoms/users/CustomerSuperAdmin/SplitButtonDropdown";
import { suspendUnsuspend, resendVerification } from "../../../../state-manager/reducers/users/customers/customers";
import { isPhoneNumber } from "../../../../helpers/validation";

const ProductDetails = () => {
	const dispatch = useDispatch();

	// EDITABLE const [showEditableFields, setShowEditableFields] = useState(false);
	// EDITABLE ELEMENT {showEditableFields && (
	// EDITABLE ELEMENT 			<EditableFields
	// EDITABLE ELEMENT 				open={true}
	// EDITABLE ELEMENT 				onClose={() => console.log("Closed")}
	// EDITABLE ELEMENT 				customer={selectedCustomer}
	// EDITABLE ELEMENT 				onClick={() => console.log("Clicked")}
	// EDITABLE ELEMENT 			/>
	// EDITABLE ELEMENT 		)}
	const [selectedCustomer, setSelectedCustomer] = useState(null);

	const {customerId} = useSelector((state) => state.ticketCreation.allPossibleFields);
	const customers = useSelector(state => state.customers.customers)
	const customer = customers.find(customer => +customer.id === +customerId)
	// const { company_name, first_name, last_name, email, phone_number, datetime, status } = customer;
	const company_name = customer?.company_name || "—";
	const first_name = customer?.first_name || "—"
	const last_name = customer?.last_name || "—"
	const email = customer?.email || "—"
	const phone_number = customer?.phone_number || "—"
	const datetime = customer?.datetime || "—"
	const status = customer?.status || "—"

	const handleUpdateStatus = (customerId, newStatus, comment) => {
		dispatch(suspendUnsuspend(customerId, newStatus, comment));
	};

	const memoizedEmail = useMemo(() => email, [email]);

	useEffect(() => {
		dispatch(resendVerification({ representativeEmail: memoizedEmail })); 
	}, [dispatch, memoizedEmail]);

	const saveButtonStyles = {
		color: "#2b2e72",
		textTransform: "none",
		"&:hover": {
			color: "#2b2e72",
			background: "transparent",
		},
	};

	const handleEditIconClick = () => {
		setSelectedCustomer(customer);
	};

	if(!customer) return <p>An error occurred please reload</p>

	return (
		<>
			<div className="grid grid-cols-2 gap-x-[7rem]">
				<div className="">
					<MediumText>Profile Details</MediumText>
				</div>
				<div className="flex items-center justify-between gap-[1.25rem]">
				<Button onClick={handleEditIconClick} sx={saveButtonStyles}>
				Edit Fields <EditIcon />
			</Button>
			<EditableFields
				open={selectedCustomer !== null}
				onClose={() => setSelectedCustomer(null)}
				customer={selectedCustomer}
			/>
					<></>
					<SplitButtonDropdown
					status={customer.status}
					customerId={customer.user_id}
					onUpdateStatus={handleUpdateStatus}
					email={customer.email}
				/>
				</div>
			</div>
			<HorizontalRule />
			<div className="grid grid-cols-2 gap-x-[7rem] gap-y-[2.5rem]">
				<div className="">
					<LightText>Company Name</LightText>
					<SmallText>{company_name}</SmallText>
				</div>
				<div className="">
					<LightText>Company Rep Full Name</LightText>
					<SmallText>
						{first_name} {last_name}
					</SmallText>
				</div>
				<div className="">
					<LightText>Company Rep Email</LightText>
					<SmallText>{email}</SmallText>
				</div>
				<div className="">
					<LightText>Company Rep Phone Number</LightText>
					<SmallText>{isPhoneNumber(phone_number)[0] ? phone_number : "Not provided"}</SmallText>
				</div>
				<div className="">
					<LightText>Date Created</LightText>
					<SmallText>{getDateFromDateTime(datetime)}</SmallText>
				</div>
				<div className="">
					<LightText>Status</LightText>
					<UserActivity status={status} />
				</div>
			</div>
			
		</>
	);
};

export default ProductDetails;

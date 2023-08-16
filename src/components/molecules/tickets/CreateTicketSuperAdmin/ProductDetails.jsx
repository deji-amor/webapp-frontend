import React, { useState } from "react";
import MediumText from "../../../atoms/tickets/CreateTicketSuperAdmin/MediumText";
import BlueThemedMediumText from "../../../atoms/tickets/CreateTicketSuperAdmin/BlueThemedMediumText";
import EditIcon from "@mui/icons-material/Edit";
import HorizontalRule from "../../../atoms/tickets/CreateTicketSuperAdmin/HorizontalRule";
import SmallText from "../../../atoms/tickets/CreateTicketSuperAdmin/SmallText";
import LightText from "../../../atoms/tickets/CreateTicketSuperAdmin/LightText";
import UserActivity from "../../../atoms/tickets/CreateTicketSuperAdmin/UserActivity";
import { useSelector } from "react-redux";
import { getDateFromDateTime } from "../../../../helpers/date-manipulation";
import EditableFields from "../../users/CustomerSuperAdmin/EditableFields";
import { Button } from "@mui/material";
import SplitButtonDropdown from "../../../atoms/users/CustomerSuperAdmin/SplitButtonDropdown";

const ProductDetails = () => {
	const [showEditableFields, setShowEditableFields] = useState(false);
	const [selectedCustomer, setSelectedCustomer] = useState(null);

	const customer = useSelector((state) => state.ticketCreation.customer);
	const { company_name, first_name, last_name, email, phone_number, datetime, status } = customer;

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
		setShowEditableFields(true);
	};

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
					<></>
					<SplitButtonDropdown
						status={customer.status}
						customerId={customer.user_id}
						onUpdateStatus={(newStatus, comment) =>
							handleUpdateStatus(customer.user_id, newStatus, comment)
						}
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
					<SmallText>{phone_number}</SmallText>
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
			{showEditableFields && (
				<EditableFields
					open={true}
					onClose={() => console.log("Closed")}
					customer={selectedCustomer}
					onClick={() => console.log("Clicked")}
				/>
			)}
		</>
	);
};

export default ProductDetails;

import React from 'react'
import MediumText from '../../../atoms/tickets/CreateTicketSuperAdmin/MediumText';
import BlueThemedMediumText from '../../../atoms/tickets/CreateTicketSuperAdmin/BlueThemedMediumText';
import EditIcon from "@mui/icons-material/Edit";
import HorizontalRule from '../../../atoms/tickets/CreateTicketSuperAdmin/HorizontalRule';
import SmallText from '../../../atoms/tickets/CreateTicketSuperAdmin/SmallText';
import LightText from '../../../atoms/tickets/CreateTicketSuperAdmin/LightText';
import UserActivity from '../../../atoms/tickets/CreateTicketSuperAdmin/UserActivity';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
	const data = useSelector(state => state.authUser.data)
	const {workspaceName, firstName, lastName, email, phoneNumber} = data

  return (
		<>
			<div className="grid grid-cols-2 gap-x-[7rem]">
				<div className="">
					<MediumText>Profile Details</MediumText>
				</div>
				<div className="flex items-center justify-between gap-[1.25rem]">
					<BlueThemedMediumText>
						Edit Fields <EditIcon />{" "}
					</BlueThemedMediumText>
					<></>
				</div>
			</div>
			<HorizontalRule />
			<div className="grid grid-cols-2 gap-x-[7rem] gap-y-[2.5rem]">
				<div className="">
					<LightText>Company Name</LightText>
					<SmallText>{workspaceName}</SmallText>
				</div>
				<div className="">
					<LightText>Company Rep Full Name</LightText>
					<SmallText>{firstName} {lastName}</SmallText>
				</div>
				<div className="">
					<LightText>Company Rep Email</LightText>
					<SmallText>{email}</SmallText>
				</div>
				<div className="">
					<LightText>Company Rep Phone Number</LightText>
					<SmallText>{phoneNumber}</SmallText>
				</div>
				<div className="">
					<LightText>Date Created</LightText>
					<SmallText>22/06/2023</SmallText>
				</div>
				<div className="">
					<LightText>Status</LightText>
					<UserActivity status={true} />
				</div>
			</div>
		</>
	);
}

export default ProductDetails
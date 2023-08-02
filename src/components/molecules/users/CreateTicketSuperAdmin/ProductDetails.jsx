import React from 'react'
import MediumText from '../../../atoms/users/CreateTicketSuperAdmin/MediumText';
import BlueThemedMediumText from '../../../atoms/users/CreateTicketSuperAdmin/BlueThemedMediumText';
import EditIcon from "@mui/icons-material/Edit";
import HorizontalRule from '../../../atoms/users/CreateTicketSuperAdmin/HorizontalRule';
import SmallText from '../../../atoms/users/CreateTicketSuperAdmin/SmallText';
import LightText from '../../../atoms/users/CreateTicketSuperAdmin/LightText';
import UserActivity from '../../../atoms/users/CreateTicketSuperAdmin/UserActivity';

const ProductDetails = () => {
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
					<SmallText>Servirox Manufacturing</SmallText>
				</div>
				<div className="">
					<LightText>Company Rep Full Name</LightText>
					<SmallText>John Doe</SmallText>
				</div>
				<div className="">
					<LightText>Company Rep Email</LightText>
					<SmallText>Usera@mail.com</SmallText>
				</div>
				<div className="">
					<LightText>Company Rep Phone Number</LightText>
					<SmallText>+234999099876</SmallText>
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
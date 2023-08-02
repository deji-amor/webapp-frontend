import React from "react";
import PropTypes from "prop-types";
import HorizontalRule from "../../../atoms/users/CreateTicketSuperAdmin/HorizontalRule";
import VerticalRule from "../../../atoms/users/CreateTicketSuperAdmin/VerticalRule"
import StatusTab from "../../../atoms/users/CreateTicketSuperAdmin/StatusTab";
import Tabs from "./Tabs";
import CompanyName from "../../../atoms/users/CreateTicketSuperAdmin/CompanyName";
import MediumText from "../../../atoms/users/CreateTicketSuperAdmin/MediumText";
import SmallText from "../../../atoms/users/CreateTicketSuperAdmin/SmallText";
import LightText from "../../../atoms/users/CreateTicketSuperAdmin/LightText";
import BlueThemedMediumText from "../../../atoms/users/CreateTicketSuperAdmin/BlueThemedMediumText";
import UserActivity from "../../../atoms/users/CreateTicketSuperAdmin/UserActivity";
import BlueThemeSmall from "../../../atoms/users/CreateTicketSuperAdmin/BlueThemedSmall";
import EditIcon from "@mui/icons-material/Edit";
import FilterListIcon from "@mui/icons-material/FilterList";

const ModalContent = () => {
	return (
		<div>
			<div className="mb-[2rem]">
				<CompanyName>Servirox Manufacturing</CompanyName>
			</div>
			<div className="flex gap-[1.25rem]">
				<div className="flex-[60%] space-y-[1rem]">
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
				</div>
				<div className="flex-[40%]">
					<div className="mb-[1.25rem]">
						<MediumText>Tickets</MediumText>
					</div>
					<div className="mb-[1.5rem]">
						<Tabs />
					</div>
					<div className="border-[0.5px] solid border-[#B6B6B6] py-[0.75rem] px-[0.875rem]">
						<div className="flex items-center justify-between">
							<SmallText>History</SmallText>
							<BlueThemeSmall>Filters <FilterListIcon/> </BlueThemeSmall>
						</div>
						<div className="relative overflow-x-auto">
							<table className="w-full border-collapse">
								{/* <colgroup>
									<col className="w-[33.33%]"/>
									<col className="w-[33.33%]"/>
									<col className="w-[33.33%]"/>
								</colgroup> */}
								<thead className="border-b-[#B6B6B6]">
									<tr>
										<th className="py-[0.2rem] pr-[1rem] text-left border"> <SmallText>Ticket ID</SmallText> </th>
										<th className="py-[0.2rem] pr-[1rem] text-left border"> <SmallText>Category</SmallText> </th>
										<th className="py-[0.2rem] pr-[1rem] text-left border"> <SmallText>Status</SmallText> </th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="py-[0.4rem] pr-[1rem] text-left border"> <BlueThemeSmall>OlA0123</BlueThemeSmall> </td>
										<td className="py-[0.4rem] pr-[1rem] text-left border"> <SmallText>Break Fix Maintenance</SmallText> </td>
										<td className="py-[0.4rem] pr-[1rem] text-left border"> <StatusTab status="done"/> </td>
									</tr>
									<tr>
										<td className="py-[0.4rem] pr-[1rem] text-left border"> <BlueThemeSmall>OlA0123</BlueThemeSmall> </td>
										<td className="py-[0.4rem] pr-[1rem] text-left border"> <SmallText>Break Fix Maintenance</SmallText> </td>
										<td className="py-[0.4rem] pr-[1rem] text-left border"> <StatusTab status="done"/> </td>
									</tr>
									<tr>
										<td className="py-[0.4rem] pr-[1rem] text-left border"> <BlueThemeSmall>OlA0123</BlueThemeSmall> </td>
										<td className="py-[0.4rem] pr-[1rem] text-left border"> <SmallText>Break Fix Maintenance</SmallText> </td>
										<td className="py-[0.4rem] pr-[1rem] text-left border"> <StatusTab status="done"/> </td>
									</tr>
									<tr>
										<td className="py-[0.4rem] pr-[1rem] text-left border"> <BlueThemeSmall>OlA0123</BlueThemeSmall> </td>
										<td className="py-[0.4rem] pr-[1rem] text-left border"> <SmallText>Break Fix Maintenance</SmallText> </td>
										<td className="py-[0.4rem] pr-[1rem] text-left border"> <StatusTab status="done"/> </td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalContent;

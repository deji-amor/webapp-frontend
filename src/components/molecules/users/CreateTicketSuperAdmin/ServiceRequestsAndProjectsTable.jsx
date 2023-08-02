import React from 'react'
import Tabs from './Tabs';
import MediumText from '../../../atoms/users/CreateTicketSuperAdmin/MediumText';
import SmallText from '../../../atoms/users/CreateTicketSuperAdmin/SmallText';
import BlueThemeSmall from '../../../atoms/users/CreateTicketSuperAdmin/BlueThemedSmall';
import FilterListIcon from "@mui/icons-material/FilterList";
import LightText from '../../../atoms/users/CreateTicketSuperAdmin/LightText';
import StatusTab from '../../../atoms/users/CreateTicketSuperAdmin/StatusTab';

const ServiceRequestsAndProjectsTable = () => {
  return (
		<>
			<div className="mb-[1.25rem]">
				<MediumText>Tickets</MediumText>
			</div>
			<div className="mb-[1.5rem]">
				<Tabs />
			</div>
			<div className="border-[0.5px] solid border-[#B6B6B6] py-[0.75rem] px-[0.875rem]">
				<div className="flex items-center justify-between">
					<SmallText>History</SmallText>
					<BlueThemeSmall>
						Filters <FilterListIcon />{" "}
					</BlueThemeSmall>
				</div>
				<div className="relative overflow-x-auto overflow-y-auto h-[15rem]">
					<table className="w-full border-collapse">
						<thead className="border-b-[#B6B6B6]">
							<tr>
								<th className="py-[0.2rem] pr-[1rem] text-left">
									{" "}
									<SmallText>Ticket ID</SmallText>{" "}
								</th>
								<th className="py-[0.2rem] pr-[1rem] text-left">
									{" "}
									<SmallText>Category</SmallText>{" "}
								</th>
								<th className="py-[0.2rem] pr-[1rem] text-left">
									{" "}
									<SmallText>Status</SmallText>{" "}
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="py-[0.4rem] pr-[1rem] text-left">
									{" "}
									<BlueThemeSmall>OlA0123</BlueThemeSmall>{" "}
								</td>
								<td className="py-[0.4rem] pr-[1rem] text-left">
									{" "}
									<LightText>Break Fix Maintenance</LightText>{" "}
								</td>
								<td className="py-[0.4rem] pr-[1rem] text-left">
									{" "}
									<StatusTab status="done" />{" "}
								</td>
							</tr>
							<tr>
								<td className="py-[0.4rem] pr-[1rem] text-left">
									{" "}
									<BlueThemeSmall>OlA0123</BlueThemeSmall>{" "}
								</td>
								<td className="py-[0.4rem] pr-[1rem] text-left">
									{" "}
									<LightText>Break Fix Maintenance</LightText>{" "}
								</td>
								<td className="py-[0.4rem] pr-[1rem] text-left">
									{" "}
									<StatusTab status="done" />{" "}
								</td>
							</tr>
							<tr>
								<td className="py-[0.4rem] pr-[1rem] text-left">
									{" "}
									<BlueThemeSmall>OlA0123</BlueThemeSmall>{" "}
								</td>
								<td className="py-[0.4rem] pr-[1rem] text-left">
									{" "}
									<LightText>Break Fix Maintenance</LightText>{" "}
								</td>
								<td className="py-[0.4rem] pr-[1rem] text-left">
									{" "}
									<StatusTab status="done" />{" "}
								</td>
							</tr>
							<tr>
								<td className="py-[0.4rem] pr-[1rem] text-left">
									{" "}
									<BlueThemeSmall>OlA0123</BlueThemeSmall>{" "}
								</td>
								<td className="py-[0.4rem] pr-[1rem] text-left">
									{" "}
									<LightText>Break Fix Maintenance</LightText>{" "}
								</td>
								<td className="py-[0.4rem] pr-[1rem] text-left">
									{" "}
									<StatusTab status="done" />{" "}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default ServiceRequestsAndProjectsTable
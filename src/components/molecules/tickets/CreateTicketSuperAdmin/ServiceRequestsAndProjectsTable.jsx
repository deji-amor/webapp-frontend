import React, {useMemo} from 'react'
import Tabs from './Tabs';
import MediumText from '../../../atoms/tickets/CreateTicketSuperAdmin/MediumText';
import SmallText from '../../../atoms/tickets/CreateTicketSuperAdmin/SmallText';
import BlueThemeSmall from '../../../atoms/tickets/CreateTicketSuperAdmin/BlueThemedSmall';
import FilterListIcon from "@mui/icons-material/FilterList";
import LightText from '../../../atoms/tickets/CreateTicketSuperAdmin/LightText';
import StatusTab from '../../../atoms/tickets/CreateTicketSuperAdmin/StatusTab';
import { useSelector } from 'react-redux';
import { v4 } from "uuid";

const ServiceRequestsAndProjectsTable = () => {
	const { showServiceRequestsTab, showProjectsTab, customer } = useSelector((state) => state.ticketCreation);
	const tickets = useSelector((state) => state.tickets.tickets);
	const { customers} = useSelector((state) => state.customers);

	const filteredActiveTickets = useMemo(() => {
		return tickets
			.filter((ticket) => {
				if (showServiceRequestsTab) {
					return ticket.ticket_type === "service ticket";
				}
				if (showProjectsTab) {
					return ticket.ticket_type === "project ticket";
				}
			})
			.filter((ticket) => {
				const customerExist = customers.find((customer) => +customer.id === +ticket.customer_id);
				return customerExist ? true : false;
			})
			.filter((ticket) => {
				return +ticket.customer_id === +customer.id
			});
	}, [showServiceRequestsTab, showProjectsTab, tickets]);

	const list = filteredActiveTickets.map((ticket, ind) => (
		<tr key={`${ticket.id}_${v4()}`}>
			<td className="py-[0.4rem] pr-[1rem] text-left">
				<BlueThemeSmall>{ticket.id}</BlueThemeSmall>
			</td>
			<td className="py-[0.4rem] pr-[1rem] text-left">
				<LightText>{ticket.ticket_form}</LightText>
			</td>
			<td className="py-[0.4rem] pr-[1rem] text-left">
				<StatusTab status="done" />
			</td>
		</tr>
	));

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
							{list}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default ServiceRequestsAndProjectsTable
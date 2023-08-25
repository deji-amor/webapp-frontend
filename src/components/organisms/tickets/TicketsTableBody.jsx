import React, { useEffect, useMemo } from "react";
import RecentTicketTableText from "../../atoms/Dashboard/RecentTicketTableText";
import StatusTab from "../../atoms/tickets/StatusTab";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ticketsActions } from "../../../state-manager/reducers/tickets/tickets";
import { getDateFromDateTime } from "../../../helpers/date-manipulation";
import { v4 } from "uuid";

const Edit = styled("p")`
	color: #2b2e72;
	font-family: Poppins;
	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	line-height: 2.25rem; /* 225% */
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 0.2rem;
`;

const TicketsTableBody = () => {
	const {
		tickets,
		loading: ticketsLoading,
		searchTicketsValue,
		showServiceRequestsTab,
		showProjectsTab,
		activeTicketsStartPoint,
		activeTicketsEndPoint,
		filterByStatus,
		sortByAscending,
	} = useSelector((state) => state.tickets);

	const {customers, loading: customersLoading} = useSelector((state) => state.customers);
	const {users, loading: usersLoading} = useSelector((state) => state.users)
	const dispatch = useDispatch()

	const filteredActiveTickets = useMemo(() => {
		let filteredTickets = tickets
			.filter((ticket) => {
				if (showServiceRequestsTab) {
					return ticket.ticket_type === "service ticket";
				}
				if (showProjectsTab) {
					return ticket.ticket_type === "project ticket";
				}
			})
			.filter(ticket => {
				if(filterByStatus.toLowerCase() === "all") return true
				return ticket.status.toLowerCase() === filterByStatus.toLowerCase()
			});

		if(!sortByAscending) filteredTickets = filteredTickets.reverse()
		return filteredTickets
	}, [showServiceRequestsTab, showProjectsTab, tickets, filterByStatus, sortByAscending]);

	const filteredSearchTickets = useMemo(() => {
		return filteredActiveTickets
		.filter(ticket => {
			const customerExist = customers.find(
				(customer) => +customer.id === +ticket.customer_id
			);
			return customerExist ? true : false
		})
		.filter((ticket) => {
			if(!searchTicketsValue) return true
			const companyName = customers.find((customer) => +customer.id === +ticket.customer_id).company_name // FOR CUSTOMER
			const superAdminOrAdminEmail = users.find((user) => +user.id === +ticket.user_id)?.email // FOR ADMINS
			const ticketForm = ticket.ticket_form;
			const searchString = ` ${companyName} ${superAdminOrAdminEmail} ${ticketForm}`.toLowerCase()
			const includes = searchString.includes(searchTicketsValue.trim().toLowerCase());
			return includes
		})
	}, [searchTicketsValue, filteredActiveTickets, customers, users]);

	useEffect(() => {
		dispatch(ticketsActions.updateField({ key: "activeTickets", value: filteredSearchTickets }));
	}, [filteredSearchTickets, dispatch])

	if(customersLoading || ticketsLoading || usersLoading) return <tbody></tbody>

	const list = filteredSearchTickets
		.slice(activeTicketsStartPoint, activeTicketsEndPoint)
		.map((ticket) => (
			<tr
				key={`${ticket.id}${ticket.user_id}${ticket.customer_id}${ticket.workspace_id}${v4()}`}
				className="bg-white border-b hover:bg-gray-50"
			>
				<RecentTicketTableText>
					{customers.find((customer) => +customer.id === +ticket.customer_id)?.company_name}
				</RecentTicketTableText>
				<RecentTicketTableText className="max-w-[10rem] border truncate">
					{ticket.ticket_form}
				</RecentTicketTableText>
				<RecentTicketTableText>
					{users.find((user) => +user.id === +ticket.user_id)?.email}
				</RecentTicketTableText>
				<RecentTicketTableText>
					<StatusTab status={ticket.status} />
				</RecentTicketTableText>
				<RecentTicketTableText>{getDateFromDateTime(ticket.created_at)}</RecentTicketTableText>
				<RecentTicketTableText>
					<Edit className="justify-center items-center cursor-pointer hover:underline">
						<span>Edit Ticket</span> <EditIcon fontSize="small" />
					</Edit>
				</RecentTicketTableText>
			</tr>
		));
	return <tbody>{list}</tbody>;
};

export default TicketsTableBody;

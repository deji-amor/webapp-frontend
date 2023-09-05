import React, { useEffect, useMemo} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ticketsActions } from "../../../state-manager/reducers/tickets/tickets";
import { UIActions } from "../../../state-manager/reducers/UI/ui";
import { v4 } from "uuid";
import TicketsTableBodyItem from "./TicketsTableBodyItem";

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

	const { data, error, successful, errorMessage } = useSelector(
		(state) => state.ticketDetails
	);

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
				return (
					ticket.status.toLowerCase().replaceAll("-", "") ===
					filterByStatus.toLowerCase().replaceAll("-", "")
				);
			});
		
		if(!sortByAscending) filteredTickets = filteredTickets.reverse()
		return filteredTickets
	}, [showServiceRequestsTab, showProjectsTab, tickets, filterByStatus, sortByAscending]);

	const filteredSearchTickets = useMemo(() => {
		return filteredActiveTickets
		.filter((ticket) => {
			if(!searchTicketsValue) return true
			const companyName = customers.find((customer) => +customer.user_id === +ticket.customer_id)?.company_name // FOR CUSTOMER
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

		useEffect(() => {
			if (successful === true) {
				if (data) dispatch(ticketsActions.replaceTicket(data));
				dispatch(
					UIActions.showToasts({
						message: "The Ticket Status Was Updated Successfully",
						title: "Ticket Status Change successful",
						type: "successful",
					})
				);
			}
			if (error === true) {
				dispatch(
					UIActions.showToasts({
						message: errorMessage,
						title: "Ticket Status Change Unsuccessful",
						type: "error",
					})
				);
			}
		}, [successful, error, data, errorMessage, dispatch]);

	if(customersLoading || ticketsLoading || usersLoading) return <tbody></tbody>

	const list = filteredSearchTickets
		.slice(activeTicketsStartPoint, activeTicketsEndPoint)
		.map((ticket) => <TicketsTableBodyItem key={v4()} ticket={ticket}/>);
	return <tbody>{list}</tbody>;
};

export default TicketsTableBody;

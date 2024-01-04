import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import TicketDetailItem from "../../../molecules/Tickets/TicketDetails/TicketDetailItem";
import { NavLink, useParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import TicketDetailContainer from "../../../molecules/Tickets/TicketDetails/TicketDetailContainer";

const EditIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
		<path
			d="M0.667969 16.2904H1.81934C2.08301 16.2904 2.18848 16.2377 2.38184 16.0883L2.9707 15.6401C3.2959 15.9652 3.7793 16.0356 4.2627 15.8246L7.17188 14.6117C7.3916 14.5238 7.50586 14.436 7.64648 14.2953L16.1367 5.86662C16.9805 5.02287 16.9805 4.01212 16.1279 3.1508L14.2207 1.23478C13.3682 0.382241 12.3574 0.373452 11.5137 1.2172L3.02344 9.63712C2.87402 9.78654 2.79492 9.89201 2.69824 10.1205L1.46777 13.0209C1.26562 13.4867 1.31836 13.9438 1.64355 14.3041L0.37793 15.6137C0.105469 15.9037 0.237305 16.2904 0.667969 16.2904ZM12.4893 2.37736C12.7178 2.15763 12.9902 2.14884 13.2012 2.36857L14.9941 4.17033C15.2139 4.39005 15.2051 4.65373 14.9678 4.88224L14.3965 5.45353L11.9092 2.95744L12.4893 2.37736ZM4.5791 10.2436L10.96 3.90665L13.4385 6.40275L7.06641 12.7397L4.5791 10.2436ZM4.08691 14.269C3.91992 14.3305 3.80566 14.3305 3.65625 14.1811L3.10254 13.6361C2.96191 13.4955 2.96191 13.3637 3.02344 13.2143L3.81445 11.3774L5.92383 13.5043L4.08691 14.269ZM0.369141 19.4106H17.2354C17.6572 19.4106 18 19.0502 18 18.6283C18 18.2065 17.6572 17.8549 17.2354 17.8549H0.369141C-0.0615234 17.8549 -0.404297 18.2065 -0.404297 18.6283C-0.404297 19.0502 -0.0527344 19.4106 0.369141 19.4106Z"
			fill="#2B2E72"
		/>
	</svg>
);

const Info = ({ className, children }) => (
	<p
		className={twMerge(
			`text-[#2B2E72] text-base not-italic font-normal leading-5 tracking-[0.00938rem] ${className}`
		)}
	>
		{children}
	</p>
);

const Edit = ({ className, to, children }) => (
	<NavLink
		to={to}
		className={twMerge(
			`text-[#2B2E72] text-base not-italic font-semibold leading-5 tracking-[0.00938rem] ${className}`
		)}
	>
		{children}
	</NavLink>
);

const TicketDetail = () => {
	const params = useParams();
	const { ticketId } = params;
	const { tickets, loading: ticketsLoading } = useSelector((state) => state.tickets);
	// const { customers, loading: customersLoading } = useSelector((state) => state.customers);
	const { users, loading: usersLoading } = useSelector((state) => state.users);
	const { data } = useSelector((state) => state.authUser);
		const userType = data.user_type;
		const isCustomer = userType === "customer";


	let ticket = tickets.find((tic) => +tic.id === +ticketId);
	if (ticketsLoading || !ticket || usersLoading) return <></>;

	let customer;
	customer = users.find((user) => +user.id === +ticket.user_id);
	console.log(ticket);

	return (
		<div>
			<div className="flex items-center justify-between mb-[1rem]">
				<Info>Ticket Information</Info>
				<Edit className="flex items-center gap-[0.5rem] hover:underline">
					<EditIcon />
					<span>Edit Ticket</span>
				</Edit>
			</div>
			<div className="mb-[1.2rem]">
				<span className="text-[#706E6E] text-sm not-italic font-normal leading-5 tracking-[0.00938rem] ">
					Created by:{" "}
					<span className="text-[#333] text-sm not-italic font-medium leading-5 tracking-[0.00938rem]">
						{customer?.first_name} {customer?.last_name} ({customer?.email})
					</span>
				</span>
			</div>
			<TicketDetailContainer ticket={ticket}/>
		</div>
	);
};

Info.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

Edit.propTypes = {
	to: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
};

export default TicketDetail;

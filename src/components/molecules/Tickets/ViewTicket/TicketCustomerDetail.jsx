import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Customer = ({ children, className }) => (
	<p
		className={twMerge(
			`flex w-[15.3125rem] h-[1.125rem] flex-col justify-center text-[#706E6E] text-xl not-italic font-semibold leading-[2.57006rem] ${className}`
		)}
	>
		{children}
	</p>
);
const CustomerName = ({ children, className }) => (
	<p
		className={twMerge(
			`flex w-[11.1875rem] h-[1.6875rem] flex-col justify-center text-[#2B2E72] text-2xl not-italic font-semibold leading-[2.57006rem] ${className}`
		)}
	>
		{children}
	</p>
);
const CustomerEmail = ({ children, className }) => (
	<p
		className={twMerge(
			`flex w-[14.375rem] h-[1.6875rem] flex-col justify-center text-[#706E6E] text-lg not-italic font-normal leading-[2.57006rem] ${className}`
		)}
	>
		{children}
	</p>
);

const TicketCustomerDetail = ({ className, ticket }) => {
  console.log(ticket);

	return <div className={twMerge(`${className}`)}>
    <Customer className="mb-[1rem]">Customer</Customer>
    <CustomerName className="">{ticket.first_name} {ticket.last_name}</CustomerName>
    <CustomerEmail className="">{ticket.email}</CustomerEmail>
  </div>;
};

Customer.propTypes = {
	children: PropTypes.node,
  className: PropTypes.string
};
CustomerName.propTypes = {
	children: PropTypes.node,
  className: PropTypes.string
};
CustomerEmail.propTypes = {
	children: PropTypes.node,
  className: PropTypes.string
};
TicketCustomerDetail.propTypes = {
	ticket: PropTypes.object,
	className: PropTypes.string,
};

export default TicketCustomerDetail;

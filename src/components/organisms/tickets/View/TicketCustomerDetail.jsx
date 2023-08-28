import React from 'react'
import { styled } from '@mui/material'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Customer = styled("p")`
	display: flex;
	width: 15.3125rem;
	height: 1.125rem;
	flex-direction: column;
	justify-content: center;
	color: #706e6e;
	font-family: Poppins;
	font-size: 1.25rem;
	font-style: normal;
	font-weight: 600;
	line-height: 2.57006rem; /* 205.603% */
`;

const CustomerName = styled("p")`
	display: flex;
	width: 11.1875rem;
	height: 1.6875rem;
	flex-direction: column;
	justify-content: center;
	color: #2b2e72;
	font-family: Poppins;
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 600;
	line-height: 2.57006rem; /* 171.336% */
`;

const CustomerEmail = styled("p")`
	display: flex;
	width: 230px;
	height: 27px;
	flex-direction: column;
	justify-content: center;
	color: #706e6e;
	font-family: Poppins;
	font-size: 1.125rem;
	font-style: normal;
	font-weight: 400;
	line-height: 2.57006rem; /* 228.448% */
`;

const TicketCustomerDetail = () => {
		const params = useParams();
		const { ticketId } = params;
		const { tickets } = useSelector((state) => state.tickets);
		const {customers} = useSelector(state => state.customers)
		const ticketToEdit = tickets.find((ticket) => +ticket.id === +ticketId);

		const customer = customers.find(customer => customer.id === ticketToEdit.customer_id)
		if (!customer) return <></>
		const {first_name, last_name, company_email} = customer

  return (
		<div>
			<Customer className='mb-[1rem]'>Customer</Customer>
			<CustomerName className='mb-[0.12rem]'>{first_name} {last_name}</CustomerName>
			<CustomerEmail>{company_email}</CustomerEmail>
		</div>
	);
}

export default TicketCustomerDetail
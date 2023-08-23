import React from 'react'
import { styled } from '@mui/material'

const Customer = styled("p")`
	display: flex;
	width: 245px;
	height: 18px;
	flex-direction: column;
	justify-content: center;
	color: #706e6e;
	font-family: Poppins;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 41.121px; /* 205.603% */
`;

const CustomerName = styled("p")`
	display: flex;
	width: 179px;
	height: 27px;
	flex-direction: column;
	justify-content: center;
	color: #706e6e;
	font-family: Poppins;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 41.121px; /* 205.603% */
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
  return (
		<div>
			<customer>Customer</customer>
			<CustomerName>John Doe</CustomerName>
			<CustomerEmail>J.Doe@company.com</CustomerEmail>
		</div>
	);
}

export default TicketCustomerDetail
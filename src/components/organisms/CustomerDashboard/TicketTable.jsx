import React from "react";
import CustomerTicketTableHeadRow from "../../molecules/CustomerDashboard/CustomerTicketTableHeadRow";
import CustomerTicketTableList from "../../molecules/CustomerDashboard/CustomerTicketTableList";
import { styled } from "@mui/material";

const CustomerTicketTable = () => {
	const Wrapper = styled("div")`
		position: relative;
		overflow-x: auto;

		table {
			border-bottom: 1px solid #828282;
			background: #fff;
			width: 100%;
			text-align: left;
			padding: 0.8rem;
			border-radius: 0.75rem 0.75rem 0rem 0rem;
		}
	`;

	const Typography = styled("div")`
	color: #000;
	font-family: Poppins;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 36px;
		}
	`;

	return (
		<Wrapper className="">
			<table className="">
				<CustomerTicketTableHeadRow />
				<tbody>
					<CustomerTicketTableList />
				</tbody>
			</table>
		</Wrapper>
	);
};

export default CustomerTicketTable;

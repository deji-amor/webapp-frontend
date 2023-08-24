import React from "react";
import RecentTicketTableHeadRow from "../../molecules/Dashboard/RecentTicketTableHeadRow";
import RecentTicketTableList from "../../molecules/Dashboard/RecentTicketTableList";
import { styled } from "@mui/material";

const RecentTicketTable = () => {
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
			<Typography>Most Recent Tickets</Typography>
			<table className="">
				<RecentTicketTableHeadRow />
				<tbody>
					<RecentTicketTableList />
					<RecentTicketTableList />
					<RecentTicketTableList />
				</tbody>
			</table>
		</Wrapper>
	);
};

export default RecentTicketTable;

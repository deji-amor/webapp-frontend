import React, { useState } from "react";
import CustomerTicketTableHeadRow from "../../molecules/CustomerDashboard/CustomerTicketTableHeadRow";
import CustomerTicketTableList from "../../molecules/CustomerDashboard/CustomerTicketTableList";
import { styled } from "@mui/material";
import { useSelector } from "react-redux";
import Pagination from "../../atoms/users/CustomerSuperAdmin/UserPagination";

const CustomerTicketTable = ({ allTickets }) => {
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

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 8;

	const getPaginatedTickets = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return allTickets.slice(startIndex, endIndex);
	};

	const totalTickets = allTickets.length;
	const totalPages = Math.ceil(totalTickets / itemsPerPage);

	const handlePageChange = (event, page) => {
		setCurrentPage(page);
	};

	return (
		<Wrapper className="">
			<table className="">
				<CustomerTicketTableHeadRow />
				<tbody>
					<CustomerTicketTableList tickets={getPaginatedTickets(allTickets)} />
				</tbody>
			</table>
			<Pagination
				totalResults={totalTickets}
				resultsPerPage={itemsPerPage}
				currentPage={currentPage}
				onPageChange={handlePageChange}
				sx={{
					"& .MuiPaginationItem-root": { color: "#2b2e72", backgroundColor: "transparent" },
				}}
			/>
		</Wrapper>
	);
};

export default CustomerTicketTable;

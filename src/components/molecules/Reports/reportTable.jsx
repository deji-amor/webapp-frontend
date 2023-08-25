import React, { useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import PropTypes from "prop-types";
import ReportTableHeadRow from "../../atoms/Reports/reportTableHeadRow";
import ReportTableBodyRow from "../../atoms/Reports/reportTableBodyRow";
import Pagination from "../../atoms/users/CustomerSuperAdmin/UserPagination";
import ReportTableTecHeadRow from "../../atoms/Reports/reportTableTecHeadRow";
import ReportTableTecBodyRow from "../../atoms/Reports/reportTableTecBodyRow";

const ReportTableWrapper = styled("div")(() => ({
	borderRadius: "12px",
	background: "white",
	padding: "5px",
	overflowX: "auto",

	".content-table": {
		borderCollapse: "collapse",
		width: "1252px",
		borderRadius: "120px",
	},
}));

const ReportTable = ({ filteredReports }) => {
	const [page, setPage] = useState(1);
	const { customerReport } = useSelector((state) => state.reports);

	const customersPerPage = 8;
	const indexOfFirstCustomer = (page - 1) * customersPerPage;
	const indexOfLastCustomer = indexOfFirstCustomer + customersPerPage;
	const currentTickets = filteredReports.slice(indexOfFirstCustomer, indexOfLastCustomer);
	const totalTickets = filteredReports.length;

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	return (
		<ReportTableWrapper>
			<table className="content-table">
				{(customerReport && <ReportTableTecHeadRow />) || (
					<thead>
						<ReportTableHeadRow />
					</thead>
				)}
				<tbody>
					{
						customerReport && (
							currentTickets.map((ticket) => (
								<ReportTableTecBodyRow key={ticket.id} ticket={ticket} />
							))
						) || (
							currentTickets.map((ticket) => (
								<ReportTableBodyRow key={ticket.id} ticket={ticket} />
							))
						)
					}
				</tbody>
			</table>
			<Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
				<Pagination
					totalResults={totalTickets}
					resultsPerPage={customersPerPage}
					currentPage={page}
					onPageChange={handlePageChange}
					sx={{ "& .MuiPaginationItem-root": { color: "#2b2e72", backgroundColor: "transparent" } }}
				/>
			</Box>
		</ReportTableWrapper>
	);
};

ReportTable.propTypes = {
	filteredReports: PropTypes.array,
};

export default ReportTable;

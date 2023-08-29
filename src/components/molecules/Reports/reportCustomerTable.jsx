import React, { useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import PropTypes from "prop-types";
import Pagination from "../../atoms/users/CustomerSuperAdmin/UserPagination";
import ReportTableCustomerHeadRow from "../../atoms/Reports/reportTableCustomerHeadRow";
import ReportTableCustomerBodyRow from "../../atoms/Reports/reportTableCustomerBodyRow";

const ReportCustomerTableWrapper = styled("div")(() => ({
	borderRadius: "12px",
	background: "white",
	padding: "0px 0px",
	overflowX: "auto",

	".content-table": {
		borderCollapse: "collapse",
		width: "100%",
		borderRadius: "120px",
	},
}));

const ReportCustomerTable = () => {
	const [page, setPage] = useState(1);
	const { filteredCustomers, filteredCustomersByDate, filteredCustomersByStatus } = useSelector(
		(state) => state.customerReports
	);

	const filteredReports =
		filteredCustomersByStatus.length != 0 && filteredCustomersByDate.length === 0
			? filteredCustomersByStatus
			: filteredCustomersByDate.length != 0
			? filteredCustomersByDate
			: filteredCustomers;

	console.log({filteredCustomers, filteredCustomersByDate, filteredCustomersByStatus})

	const customersPerPage = 8;
	const indexOfFirstCustomer = (page - 1) * customersPerPage;
	const indexOfLastCustomer = indexOfFirstCustomer + customersPerPage;
	const currentReports = filteredReports.slice(indexOfFirstCustomer, indexOfLastCustomer);
	const totalCustomers = filteredReports.length;

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	return (
		<ReportCustomerTableWrapper>
			<table className="content-table">
				<thead>
					<ReportTableCustomerHeadRow />
				</thead>
				<tbody>
					{currentReports.map((customer) => (
						<ReportTableCustomerBodyRow key={customer.id} ticket={customer} />
					))}
				</tbody>
			</table>
			<Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
				<Pagination
					totalResults={totalCustomers}
					resultsPerPage={customersPerPage}
					currentPage={page}
					onPageChange={handlePageChange}
					sx={{
						"& .MuiPaginationItem-root": { color: "#2b2e72", backgroundColor: "transparent" },
					}}
				/>
			</Box>
		</ReportCustomerTableWrapper>
	);
};

ReportCustomerTable.propTypes = {};

export default ReportCustomerTable;

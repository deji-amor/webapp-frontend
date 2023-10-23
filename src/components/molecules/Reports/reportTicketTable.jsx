import React, { useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import PropTypes from "prop-types";
import ReportTableHeadRow from "../../atoms/Reports/reportTableHeadRow";
import ReportTableBodyRow from "../../atoms/Reports/reportTableBodyRow";
import Pagination from "../../atoms/users/CustomerSuperAdmin/UserPagination";
import Placeholder from "../general/Placeholder";

const ReportTicketTableWrapper = styled("div")(() => ({
	borderRadius: "12px",
	background: "white",
	padding: "0px 0px",
	overflowX: "auto",

	".content-table": {
		borderCollapse: "collapse",
		width: "100%",
		borderRadius: "120px",
	},

	".ticket:hover": {
		background: "green",
		color: "white",
	},
}));

const ReportTicketTable = () => {
	const [page, setPage] = useState(1);
	const [projectPage, setProjectPage] = useState(1);
	const { reportTabIndex } = useSelector((state) => state.ticketReports);
	const {
		filteredTickets,
		filteredTicketsByDate,
		filteredTicketsByStatus,
		filteredProjectTickets,
		filteredProjectTicketsByDate,
		filteredProjectTicketsByStatus,
	} = useSelector((state) => state.ticketReports);

	const filteredReports =
		filteredTicketsByStatus.length === 0 && filteredTicketsByDate.length === 0
			? filteredTickets
			: filteredTicketsByDate.length != 0 && filteredTicketsByStatus.length === 0
			? filteredTicketsByDate
			: filteredTicketsByStatus;

	const ticketsPerPage = 8;
	const indexOfFirstCustomer = (page - 1) * ticketsPerPage;
	const indexOfLastCustomer = indexOfFirstCustomer + ticketsPerPage;
	const currentReports = filteredReports.slice(indexOfFirstCustomer, indexOfLastCustomer);
	const totalTickets = filteredReports.length;

	const filteredProjectReports =
		filteredProjectTicketsByStatus.length === 0 && filteredProjectTicketsByDate.length === 0
			? filteredProjectTickets
			: filteredProjectTicketsByDate.length != 0 && filteredProjectTicketsByStatus.length === 0
			? filteredProjectTicketsByDate
			: filteredProjectTicketsByStatus;

	const projectTicketPage = 8;
	const indexOfFirstProject = (projectPage - 1) * projectTicketPage;
	const indexOfLastProject = indexOfFirstProject + projectTicketPage;
	const currentProjects = filteredProjectReports.slice(indexOfFirstProject, indexOfLastProject);
	const totalProjectsTickets = filteredProjectReports.length;

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	const handleProjectPageChange = (newPage) => {
		setProjectPage(newPage);
	};

	return (
		<ReportTicketTableWrapper>
			{(reportTabIndex === 0 &&
				((currentReports.length != 0 && (
					<>
						<table className="content-table">
							<thead>
								<ReportTableHeadRow />
							</thead>
							<tbody>
								{currentReports.map((ticket) => (
									<ReportTableBodyRow key={ticket.id} ticket={ticket} />
								))}
							</tbody>
						</table>
						<Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
							<Pagination
								totalResults={totalTickets}
								resultsPerPage={ticketsPerPage}
								currentPage={page}
								onPageChange={handlePageChange}
								sx={{
									"& .MuiPaginationItem-root": { color: "#2b2e72", backgroundColor: "transparent" },
								}}
							/>
						</Box>
					</>
				)) || (
					<Placeholder
						messageHeader="seems you don’t have anything here yet!"
						messageParagraph="Once a report is generated for you, you will be able to view the data here."
					/>
				))) ||
				(currentProjects.length != 0 && (
					<>
						<table className="content-table">
							<thead>
								<ReportTableHeadRow />
							</thead>
							<tbody>
								{currentProjects.map((tech) => (
									<ReportTableBodyRow key={tech.id} ticket={tech} />
								))}
							</tbody>
						</table>

						<Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
							<Pagination
								totalResults={totalProjectsTickets}
								resultsPerPage={projectTicketPage}
								currentPage={projectPage}
								onPageChange={handleProjectPageChange}
								sx={{
									"& .MuiPaginationItem-root": { color: "#2b2e72", backgroundColor: "transparent" },
								}}
							/>
						</Box>
					</>
				)) || (
					<Placeholder
						messageHeader="seems you don’t have anything here yet!"
						messageParagraph="Once a report is generated for you, you will be able to view the data here."
					/>
				)}
		</ReportTicketTableWrapper>
	);
};

ReportTicketTable.propTypes = {};

export default ReportTicketTable;


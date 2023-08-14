import React, { useEffect, useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Box,
	IconButton,
	FormControl,
	Select,
	MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import Pagination from "../../../atoms/users/CustomerSuperAdmin/UserPagination";
import MoreOptionsDropdown from "../../../atoms/users/CustomerSuperAdmin/MoreOptionsDropdown";
import { useSelector, useDispatch } from "react-redux";
import { createTicketActions } from "../../../../state-manager/reducers/tickets/ticketCreation";
import { fetchCustomers } from "../../../../state-manager/reducers/users/customers/customers";

const statusColors = {
	Active: "rgba(18, 133, 26, 0.20)",
	Inactive: "rgba(237, 117, 56, 0.20)",
	Suspended: "rgba(204, 150, 29, 0.20)",
};

const statusStyles = {
	Active: {
		color: "#04850D",
		fontWeight: "600",
	},
	Inactive: {
		color: "#ED5A11",
		fontWeight: "600",
	},
	Suspended: {
		color: "#CC961D",
		fontWeight: "600",
	},
};

const CustomTableCell = ({ children, status }) => {
	const statusColor = statusColors[status] || "transparent";
	const statusStyle = statusStyles[status] || {};

	const textColor = [
		"Company Name",
		"Representative Name",
		"Representative Email",
		"Status",
	].includes(children)
		? "#333"
		: statusStyle.color || "#333";
	const fontWeight = [
		"Company Name",
		"Representative Name",
		"Representative Email",
		"Status",
	].includes(children)
		? "600"
		: statusStyle.fontWeight || "normal";

	return (
		<TableCell
			sx={{
				padding: "4px 12px",
				fontWeight: fontWeight,
				fontFamily: "Poppins",
				color: textColor,
			}}
		>
			<span
				style={{
					backgroundColor: statusColor,
					color: textColor,
					borderRadius: statusStyle.borderRadius || "16px",
					padding: "4px 12px",
					fontSize: "14px",
					whiteSpace: "nowrap",
				}}
			>
				{children}
			</span>
		</TableCell>
	);
};

const CustomerTable = ({ filteredCustomers, handleUpdateStatus }) => {
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(fetchCustomers());
	// }, [dispatch]);
	console.log(filteredCustomers);

	const [filter, setFilter] = useState("All");
	const [page, setPage] = useState(1);
	const customersPerPage = 6;

	const handleFilterChange = (event) => {
		const selectedStatus = event.target.value;
		setFilter(selectedStatus);
		setPage(1);
	};

	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	const showEditUserHandler = (customer) => {
		console.log(customer);
		dispatch(
			createTicketActions.updateField({
				key: "customerId",
				value: customer.id,
			})
		);
		dispatch(createTicketActions.goBackToAddTicketModal(customer));
	};

	const {
		loading: customersLoading,
		customers,
		successful,
		error,
		errorMessage,
	} = useSelector((state) => state.customers);

	const indexOfFirstCustomer = (page - 1) * customersPerPage;
	const indexOfLastCustomer = indexOfFirstCustomer + customersPerPage;
	const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);
	const totalCustomers = filteredCustomers.length;

	const filteredCustomersByStatus = currentCustomers.filter(
		(customer) => filter === "All" || customer.status === filter
	);

	const [unsuspendModalOpen, setUnsuspendModalOpen] = useState(false);
	const [selectedCustomer, setSelectedCustomer] = useState(null);

	const handleUnsuspendConfirmation = (customer) => {
		setSelectedCustomer(customer);
		setUnsuspendModalOpen(true);
	};

	return (
		<React.Fragment>
			<TableContainer component={Paper} sx={{ boxShadow: "none", margin: 0, alignItems: "center" }}>
				<Table>
					<TableHead>
						<TableRow>
							<CustomTableCell>Company Name</CustomTableCell>
							<CustomTableCell>Representative Name</CustomTableCell>
							<CustomTableCell>Representative Email</CustomTableCell>
							<CustomTableCell>Status</CustomTableCell>
							<CustomTableCell>
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<span
										style={{
											marginRight: "4px",
											color: "#2B2E72",
											fontSize: "16px",
											fontWeight: "600",
											fontFamily: "Poppins",
										}}
									>
										Filter By:
									</span>
									<FormControl size="small">
										<Select
											value={filter}
											onChange={handleFilterChange}
											sx={{
												border: "1px solid transparent",
												"& .MuiOutlinedInput-input": {
													borderColor: "#2b2e72",
												},
											}}
										>
											<MenuItem value="All">All</MenuItem>
											<MenuItem value="Active">Active</MenuItem>
											<MenuItem value="Inactive">Inactive</MenuItem>
											<MenuItem value="Suspended">Suspended</MenuItem>
										</Select>
									</FormControl>
								</Box>
							</CustomTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{filteredCustomersByStatus.map((customer) => (
							<TableRow key={customer.id}>
								<CustomTableCell>{customer.companyName}</CustomTableCell>
								<CustomTableCell>{customer.representativeName}</CustomTableCell>
								<CustomTableCell>{customer.representativeEmail}</CustomTableCell>
								<CustomTableCell status={customer.status}>{customer.status}</CustomTableCell>
								<CustomTableCell>
									<Box sx={{ display: "flex", alignItems: "center", gap: "1", flex: "1 0 0" }}>
										<Link
											onClick={() => showEditUserHandler(customer)}
											style={{
												color: "#2B2E72",
												fontWeight: "600",
												textDecoration: "none",
											}}
										>
											<IconButton aria-label="edit">
												<EditIcon sx={{ color: "#2B2E72", fontWeight: "600" }} />
											</IconButton>
											Edit Customer Profile
										</Link>
										{customer.status !== "Inactive" && (
											<MoreOptionsDropdown
												status={customer.status}
												customerId={customer.id}
												onUpdateStatus={(newStatus, comment) =>
													handleUpdateStatus(customer.id, newStatus, comment)
												}
											/>
										)}
									</Box>
								</CustomTableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
				<Pagination
					totalResults={totalCustomers}
					resultsPerPage={customersPerPage}
					currentPage={page}
					onPageChange={handlePageChange}
					sx={{ "& .MuiPaginationItem-root": { color: "#2b2e72", backgroundColor: "transparent" } }}
				/>
			</Box>
			{selectedCustomer !== null && (
				<UnsuspendConfirmationModal
					open={unsuspendModalOpen}
					onClose={() => setUnsuspendModalOpen(false)}
					onConfirm={() => handleUnsuspendConfirmation(selectedCustomer)}
				/>
			)}
		</React.Fragment>
	);
};

export default CustomerTable;

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
import { useDispatch } from "react-redux";
import { createTicketActions } from "../../../../state-manager/reducers/tickets/ticketCreation";
// IMPORT import { fetchCustomers } from "../../../../state-manager/reducers/users/customers/customers";
import Placeholder from "../../../molecules/general/Placeholder";
import CustomeTableRow from "../../../atoms/users/CustomerSuperAdmin/TableRow";
import { getAuthToken } from "../../../../utilis";

const statusColors = {
	active: "rgba(18, 133, 26, 0.20)",
	inactive: "rgba(237, 117, 56, 0.20)",
	suspend: "rgba(204, 150, 29, 0.20)",
};

const statusStyles = {
	active: {
		color: "#04850D",
		fontWeight: "600",
	},
	inactive: {
		color: "#ED5A11",
		fontWeight: "600",
	},
	suspend: {
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
		dispatch(
			createTicketActions.updateField({
				key: "customerId",
				value: customer.id,
			})
		);
		console.log(customer);
		dispatch(createTicketActions.goBackToAddTicketModal(customer));
	};

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
                                            <MenuItem value="active">active</MenuItem>
                                            <MenuItem value="inactive">inactive</MenuItem>
                                            <MenuItem value="suspend">suspend</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredCustomersByStatus.map((customer) => (
                            <CustomeTableRow key={customer.id} customer={customer} showEditUserHandler={showEditUserHandler} handleUpdateStatus={handleUpdateStatus} />
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
                    onConfirm={handleUnsuspendConfirmation}
                    selectedCustomer={selectedCustomer}
                />
            )}
        </React.Fragment>
    );
};

export default CustomerTable;
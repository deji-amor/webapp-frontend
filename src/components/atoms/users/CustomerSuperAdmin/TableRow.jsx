import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";
import { TableRow, Box, IconButton, TableCell } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MoreOptionsDropdown from "./MoreOptionsDropdown";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { 
    fetchCustomers,
	suspendUnsuspend
} from "../../../../state-manager/reducers/users/customers/customers";

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

const CustomeTableRow = ({ customer, showEditUserHandler, handleUpdateStatus  }) => {
	const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchCustomers());
// }, [dispatch])

    const handleUnsuspend = (selectedCustomer, customerId) => {
		dispatch(suspendUnsuspend({ customerId, actionType: "unsuspend" }));
	};

	return (
		<TableRow key={customer.id}>
			<CustomTableCell>{customer.company_name}</CustomTableCell>
			<CustomTableCell>
				{customer.first_name} {customer.last_name}
			</CustomTableCell>
			<CustomTableCell>{customer.email}</CustomTableCell>
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
					<MoreOptionsDropdown
						status={customer.status}
						customerId={customer.user_id}
						email={customer.email}
						onUpdateStatus={(newStatus, comment) =>
							handleUpdateStatus(customer.user_id, newStatus, comment)
						}
                        handleUnsuspend={handleUnsuspend}
					/>
				</Box>
			</CustomTableCell>
		</TableRow>
	);
};

CustomeTableRow.propTypes = {
	customer: PropTypes.object,
	showEditUserHandler: PropTypes.func,
	handleUpdateStatus: PropTypes.func,
};

export default CustomeTableRow;

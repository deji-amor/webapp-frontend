import React, { useState } from "react";
import { TableCell, Menu, MenuItem, IconButton, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SuspendModal from "./SuspendModal";
import SuspendConfirmationModal from "./SuspendConfirmationModal";
import UnsuspendConfirmationModal from "./UnsuspendConfirmationModal";
import { resendVerification, suspendUnsuspend } from "../../../../state-manager/reducers/users/customers/customers";
import { useDispatch, useSelector } from "react-redux";


const MoreOptionsDropdown = ({ status, customerId, onUpdateStatus }) => {

	const dispatch = useDispatch();

	const {
		loading: customersLoading,
		customers: allCustomers,
		successful,
		error,
		errorMessage,
	} = useSelector((state) => state.customers);


	const [anchorEl, setAnchorEl] = useState(null);
	const [isSuspendConfirmationModalOpen, setIsSuspendConfirmationModalOpen] = useState(false);
	const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
	const [suspendComment, setSuspendComment] = useState("");
	const [isUnsuspendConfirmationModalOpen, setIsUnsuspendConfirmationModalOpen] = useState(false);

	const [currentCustomerId, setCurrentCustomerId] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleSuspendClick = () => {
		setIsSuspendConfirmationModalOpen(true);
		handleClose();
	};

	const handleUnsuspendConfirmationClose = () => {
		setIsUnsuspendConfirmationModalOpen(false);
	};

	const handleUnsuspendConfirmationYes = (customerId) => {
		dispatch(suspendUnsuspend(customerId));
		onUpdateStatus(currentCustomerId, "active");
		setIsUnsuspendConfirmationModalOpen(false);
	};

	const handleUnsuspendClick = () => {
		setIsUnsuspendConfirmationModalOpen(true);
		handleClose();
	};

	const handleSuspendConfirmationClose = () => {
		setIsSuspendConfirmationModalOpen(false);
	};

	const handleSuspendConfirmationYes = () => {
		setIsSuspendConfirmationModalOpen(false);
		setIsSuspendModalOpen(true);
	};

	const handleSuspendModalClose = () => {
		setIsSuspendModalOpen(false);
		setSuspendComment("");
	};

	const handleSuspendCommentChange = (event) => {
		setSuspendComment(event.target.value);
	};

	const handleSuspend = (customerId) => {
		setIsSuspendModalOpen(true);
		setCurrentCustomerId(customerId);
		dispatch(suspendUnsuspend(customerId));
		handleClose();
	};

	
	const handleResendVerification = async (email) => {
		dispatch(resendVerification(email));
    handleClose();
  };

	return (
		<TableCell sx={{ borderBottom: "none", padding: 0 }}>
			<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
				<IconButton aria-label="more" onClick={handleClick}>
					<MoreVertIcon />
				</IconButton>
				<Menu
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					PaperProps={{
						sx: {
							borderRadius: "10px",
							padding: "6px 12px",
						},
					}}
				>
					{status === "active" && (
						<MenuItem
							sx={{ borderRadius: "5px", padding: "12px 16px" }}
							onClick={handleSuspendClick}
						>
							Suspend
						</MenuItem>
					)}
					{status === "suspended" && (
						<MenuItem
							sx={{ borderRadius: "5px", padding: "12px 16px" }}
							onClick={handleUnsuspendClick}
						>
							Unsuspend
						</MenuItem>
					)}
						{status === "inactive" && (
					<MenuItem
					sx={{ borderRadius: "5px", padding: "12px 16px" }}
					onClick={handleResendVerification}
					>
					Resend Verification Link
					</MenuItem>
				)}
				</Menu>
			</Box>
			<UnsuspendConfirmationModal
				open={isUnsuspendConfirmationModalOpen}
				onClose={handleUnsuspendConfirmationClose}
				onConfirm={handleUnsuspendConfirmationYes}
			/>
			<SuspendConfirmationModal
				open={isSuspendConfirmationModalOpen}
				onClose={handleSuspendConfirmationClose}
				onConfirm={handleSuspendConfirmationYes}
			/>
			<SuspendModal
				open={isSuspendModalOpen}
				onClose={handleSuspendModalClose}
				suspendComment={suspendComment}
				onSuspendCommentChange={handleSuspendCommentChange}
				onSuspend={handleSuspend}
				onCancel={handleSuspendModalClose}
			/>
		</TableCell>
	);
};

export default MoreOptionsDropdown;

import React, { useState } from "react";
import { TableCell, Menu, MenuItem, IconButton, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SuspendModal from "./SuspendModal";
import SuspendConfirmationModal from "./SuspendConfirmationModal";
import UnsuspendConfirmationModal from "./UnsuspendConfirmationModal";

const MoreOptionsDropdown = ({ status, customerId, onUpdateStatus }) => {
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

	const handleUnsuspendConfirmationYes = () => {
		onUpdateStatus(currentCustomerId, "Active");
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

	const handleSuspend = () => {
		setIsSuspendModalOpen(true);
		setCurrentCustomerId(customerId);
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
					{status === "Active" && (
						<MenuItem
							sx={{ borderRadius: "5px", padding: "12px 16px" }}
							onClick={handleSuspendClick}
						>
							Suspend
						</MenuItem>
					)}
					{status === "Suspended" && (
						<MenuItem
							sx={{ borderRadius: "5px", padding: "12px 16px" }}
							onClick={handleUnsuspendClick}
						>
							Unsuspend
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

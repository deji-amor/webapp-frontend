import React from "react";
import { Button, styled, Dialog, DialogContent, Box, TextField } from "@mui/material";
import WarningIcon from "../../../../assets/user/CustomerOnboarding/warning.png";

const SuspendModal = ({
	open,
	onClose,
	suspendComment,
	onSuspendCommentChange,
	onSuspend,
	onCancel,
	customerId,
}) => {
	const Typography = styled("h3")`
		color: #2b2e72;
		text-align: center;
		font-family: Poppins;
		font-size: 20px;
		font-style: normal;
		font-weight: 600;
		line-height: 28px; /* 140% */
	`;

	const Text = styled("p")`
		color: #828282;
		text-align: center;
		font-family: Poppins;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px; /* 142.857% */
	`;

	const wordCount = suspendComment.trim().split(/\s+/).length;
	const isSuspendButtonDisabled = wordCount <= 1;

	const handleSuspend = (id) => {
		if (!isSuspendButtonDisabled) {
			console.log("SUSPENDED");
			onSuspend(id);
			onClose();
		}
	};

	const cancelButtonStyles = {
		color: "#2b2e72",
		borderColor: "#2b2e72",
		textTransform: "none",
		width: "100%",
		"&:hover": {
			backgroundColor: "transparent",
			color: "#2b2e72",
			borderColor: "#2b2e72",
		},
	};

	const suspendButtonStyles = {
		background: "#2b2e72",
		textTransform: "none",
		width: "100%",
		"&:hover": {
			backgroundColor: "#2b2e72",
		},
	};

	return (
		<Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
			<DialogContent
				sx={{
					padding: "24px 32px",
					display: "flex",
					fontFamily: "Poppins",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: "20px",
					borderRadius: "12px",
				}}
			>
				<img src={WarningIcon} style={{ width: "56px", flexShrink: 0 }} />
				<div>
					<Typography variant="h6">Suspend Customer</Typography>
					<Text>Please enter the reason(s) for suspension and any additional comments.</Text>
				</div>
				<TextField
					placeholder="Enter Comments..."
					multiline
					rows={3}
					value={suspendComment}
					onChange={onSuspendCommentChange}
					fullWidth
					sx={{
						mb: "0.5rem",
						color: "#000",
						fontSize: "14px",
						fontWeight: "400",
						"& .MuiOutlinedInput-root": {
							borderRadius: "6px",
							fontSize: "15px",
							fontWeight: "400",
							background: "#EEE",
						},
						"& .MuiOutlinedInput-notchedOutline": {
							borderColor: "#EEEEEE",
							borderWidth: "1px",
							borderStyle: "solid",
						},
						"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
							borderColor: "#2B2E72",
						},
						"& .MuiOutlinedInput-input": {
							borderRadius: "6px",
							color: "#2B2E72",
						},
					}}
				/>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						mt: 3,
						gap: "16px",
						alignItems: "flex-start",
						width: "100%",
						fontFamily: "Poppins",
					}}
				>
					<Button onClick={onCancel} variant="outlined" sx={cancelButtonStyles}>
						Cancel
					</Button>
					<Button
						onClick={() => handleSuspend(customerId)}
						variant="contained"
						sx={suspendButtonStyles}
						disabled={isSuspendButtonDisabled}
					>
						Confirm Suspension
					</Button>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default SuspendModal;

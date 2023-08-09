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

	return (
		<Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
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
				<img src={WarningIcon} style={{ width: "56px", flexShrink: "0" }} />
				<div>
					<Typography variant="h6">Suspend Customer</Typography>
					<Text>
						Please enter the reason(s) for suspension and any additional <br /> comments.
					</Text>
				</div>
				<TextField
					label="Enter Comments"
					multiline
					rows={3}
					value={suspendComment}
					onChange={onSuspendCommentChange}
					fullWidth
				/>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						mt: 3,
						gap: "16px",
						alignItems: "flex-start",
						width: "100%",
					}}
				>
					<Button
						onClick={onCancel}
						variant="outlined"
						sx={{
							color: "#2b2e72",
							borderColor: "#2b2e72",
							textTransform: "none",
							width: "100%",
							"&:hover": {
								backgroundColor: "transparent",
								color: "#2b2e72",
								borderColor: "#2b2e72",
							},
						}}
					>
						Cancel
					</Button>
					<Button
						onClick={onSuspend}
						variant="contained"
						sx={{
							background: "#2b2e72",
							fontFamily: "Poppins",
							textTransform: "none",
							width: "100%",
							"&:hover": {
								backgroundColor: "#2b2e72",
							},
						}}
					>
						Suspend
					</Button>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default SuspendModal;

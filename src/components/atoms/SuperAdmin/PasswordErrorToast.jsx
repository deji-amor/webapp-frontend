import React from "react";
import {
	Snackbar,
	IconButton,
	ListItem,
	ListItemIcon,
	ListItemText,
	styled,
	Typography,
} from "@mui/material";
import { Error as ErrorIcon } from "@mui/icons-material";

const PasswordErrorToast = ({ open, onClose }) => {
	const ListItem = styled("p")`
		display: flex;
		width: 400px;
		padding: 12px 16px;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		background: rgba(215, 61, 61, 0.1);
	`;

	const Typography = styled("p")`
		color: #d73d3d;
		font-family: Poppins;
		font-size: 16px;
		font-style: normal;
		font-weight: 700;
		line-height: 24px; /* 150% */
	`;

	return (
		<Snackbar
			open={open}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			autoHideDuration={4000}
			onClose={onClose}
		>
			<ListItem>
				<ListItemIcon>
					<ErrorIcon sx={{ color: "#D73D3D" }} />
				</ListItemIcon>
				<ListItemText
					primary={<Typography>Password Errors</Typography>}
					secondary={
						<ul style={{ color: "rgba(215, 61, 61, 0.50)", fontSize: "12px", fontWeight: "500" }}>
							<li>Minimum of 1 uppercase letter</li>
							<li>Minimum of 1 lowercase letter</li>
							<li>Minimum of 1 special character</li>
							<li>Minimum of 1 number</li>
							<li>Minimum of 8 characters.</li>
						</ul>
					}
				/>
			</ListItem>
		</Snackbar>
	);
};

export default PasswordErrorToast;

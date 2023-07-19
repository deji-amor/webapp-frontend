import React from "react";
import { Snackbar, IconButton, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Error as ErrorIcon } from "@mui/icons-material";

const PasswordErrorToast = ({ open, onClose }) => {
	return (
		<Snackbar
			open={open}
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			autoHideDuration={4000} // Adjust the duration as needed
			onClose={onClose}
		>
			<ListItem
				sx={{
					backgroundColor: "#F4BDBD",
					color: "#D73D3D",
					borderRadius: "8px",
					fontWeight: "bolder",
				}}
			>
				<ListItemIcon>
					<ErrorIcon sx={{ color: "#D73D3D" }} />
				</ListItemIcon>
				<ListItemText
					primary="Password Errors"
					secondary={
						<ul style={{ color: "#C45555" }}>
							<li>Must contain at least 8 characters</li>
							<li>Must contain at least one uppercase letter</li>
							<li>Must contain at least one lowercase letter</li>
							<li>Must contain at least one number</li>
							<li>Must contain at least one special character</li>
						</ul>
					}
				/>
			</ListItem>
		</Snackbar>
	);
};

export default PasswordErrorToast;

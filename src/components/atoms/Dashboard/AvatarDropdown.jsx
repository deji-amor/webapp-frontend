import React from "react";
import { Box, Avatar, styled } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";

const AvatarDropdown = ({ onEditClick }) => {
	const Typography = styled("h2")`
		color: #2b2e72;
		font-family: Poppins;
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 20px; /* 111.111% */
	`;
	const Text = styled("p")`
		color: #333;
		font-family: Poppins;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px; /* 111.111% */
	`;
	const Emails = styled("p")`
		color: #333;
		font-family: Poppins;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px; /* 111.111% */
	`;

	const { firstName, lastName, email, userType } = useSelector((state) => state.authUser.data);

	return (
		<Box p={3}>
			<Box display="flex" flexDirection="column" alignItems="center" gap="6px">
				<Avatar
					alt="User Profile"
					variant="circular"
					style={{ background: "#2b2e72", width: "100px", height: "100px", marginBottom: "10px" }}
				>
					<PersonIcon style={{ fontSize: 100 }} />
				</Avatar>
				<Typography variant="h2">
					{firstName} {lastName}
				</Typography>
				<Text variant="p">{userType}</Text>
				<Box display="flex" alignItems="center">
					<MailOutlineIcon style={{ width: "19.749px", height: "15.442px", color: "#706E6E" }} />
					<Emails variant="p">{email}</Emails>
				</Box>
				<Box
					mt={1}
					display="flex"
					alignItems="center"
					onClick={onEditClick}
					style={{ cursor: "pointer" }}
				>
					<EditIcon style={{ width: "28px", height: "28px", color: "#2B2E72" }} />
					<Typography variant="body2">Edit Profile</Typography>
				</Box>
			</Box>
			<Box mt={3}>
				<Typography variant="body1">Recent Activity</Typography>
				{/* Replace with Recent Activity components */}
			</Box>
		</Box>
	);
};

export default AvatarDropdown;

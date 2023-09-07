import React from "react";
import { Box, Avatar, styled } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useSelector } from "react-redux";
import RecentActivities from "../../molecules/Dashboard/RecentActivities";

const AvatarDropdown = ({ onEditClick }) => {
	const Typography = styled("h2")`
		color: #2b2e72;
		font-family: Poppins;
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 20px;
	`;
	const Recent = styled("h2")`
		color: #333;
		font-family: Poppins;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		padding-bottom: 4px;
		line-height: 20px;
	`;
	const Text = styled("p")`
		color: #333;
		font-family: Poppins;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px;
	`;
	const Emails = styled("p")`
		color: #333;
		font-family: Poppins;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 20px;
	`;

	const { first_name, last_name, email, user_type, profile_picture } = useSelector(
		(state) => state.authUser.data
	);

	return (
		<Box p={3}>
			<Box display="flex" flexDirection="column" alignItems="center" gap="6px">
				<Avatar
					alt="User Profile"
					variant="circular"
					style={{ background: "#2b2e72", width: "100px", height: "100px", marginBottom: "10px" }}
				>
					{profile_picture ? (
						<img
							src={profile_picture}
							alt="Profile Picture"
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
						/>
					) : (
						<PersonIcon style={{ fontSize: 100 }} />
					)}
				</Avatar>
				<Typography variant="h2">
					{first_name} {last_name}
				</Typography>
				{user_type === "superadmin" ? (
					<Text variant="p">Super Admin</Text>
				) : (
					<Text variant="p">{user_type}</Text>
				)}
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
				<Recent variant="body1">Recent Activity</Recent>
				<RecentActivities />
			</Box>
		</Box>
	);
};

export default AvatarDropdown;

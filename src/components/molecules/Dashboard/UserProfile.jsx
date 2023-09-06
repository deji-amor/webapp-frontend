import React from "react";
import { useSelector } from "react-redux";
import { Box, Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";

const UserProfile = ({ onClick }) => {
	const { profile_picture } = useSelector((state) => state.authUser.data);

	return (
		<Box display="flex" alignItems="center" onClick={onClick} style={{ cursor: "pointer" }}>
			<Avatar alt="User Profile" variant="circular" style={{ background: "#2b2e72" }}>
				{profile_picture ? (
					<img
						src={profile_picture}
						alt="Profile Picture"
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
				) : (
					<PersonIcon style={{ fontSize: 30 }} />
				)}
			</Avatar>
			<ArrowDropDownIcon />
		</Box>
	);
};

export default UserProfile;

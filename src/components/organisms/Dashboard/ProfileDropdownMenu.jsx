import React, { useState } from "react";
import { Box, ClickAwayListener } from "@mui/material";
import UserProfile from "../../molecules/Dashboard/UserProfile";
import AvatarDropdown from "../../atoms/Dashboard/AvatarDropdown";
import EditProfileModal from "../../molecules/Dashboard/EditProfileModal";

const ProfileDropdownMenu = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const handleDropdownClick = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleEditClick = () => {
		setIsEditModalOpen(true);
		setIsDropdownOpen(false); // Close the dropdown when edit is clicked
	};

	const closeEditModal = () => {
		setIsEditModalOpen(false);
	};

	const handleClickAway = () => {
		setIsDropdownOpen(false); // Close the dropdown when clicking away
	};

	return (
		<Box>
			<UserProfile onClick={handleDropdownClick} />
			{isDropdownOpen && (
				<ClickAwayListener onClickAway={handleClickAway}>
					<Box
						position="absolute"
						top="10%"
						right={50}
						zIndex={1}
						borderRadius="12px"
						backgroundColor="#FFF"
						boxShadow="0px 0px 20px 0px rgba(37, 36, 33, 0.24)"
                        padding="10px"
					>
						<AvatarDropdown onEditClick={handleEditClick} />
					</Box>
				</ClickAwayListener>
			)}
			<EditProfileModal open={isEditModalOpen} onClose={closeEditModal} />
		</Box>
	);
};

export default ProfileDropdownMenu;

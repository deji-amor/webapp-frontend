import React, { useState, useEffect } from "react";
import useNotifications from "../../../hooks/useNotifications";
import { styled } from "@mui/material";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NavbarDropdown from "./NavbarDropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import ProfileDropdownMenu from "../../organisms/Dashboard/ProfileDropdownMenu";
import { useSelector } from "react-redux";

const NavBarIconList = () => {
	const List = styled("div")`
		display: flex;
		align-items: center;
		gap: 1.5rem /* 24px */;

		.icon {
			color: #2b2e72;
			cursor: pointer;
		}
	`;

	// absolute inline-flex items-center justify-center w-6 h-6 text-[0.75rem] font-[500] text-white bg-[#2B2E72] rounded-full -top-2 -right-2
	const Dot = styled("div")`
		position: absolute;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1.5rem; /* 24px */
		height: 1.5rem; /* 24px */
		font-size: 0.75rem /* 12px */;
		font-weight: 500;
		background-color: #2b2e72;
		border-radius: 9999px;
		color: #fff;
		top: -0.5rem /* -8px */;
		right: -0.5rem /* -8px */;
	`;

	const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
	const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const handleEditClick = () => {
		setIsEditModalOpen(true);
		setIsDropdownOpen(false);
		setShowNotificationDropdown(false);
		setShowLogoutDropdown(false);
	};
	const handleOpen = () => {
		setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
		setShowNotificationDropdown(false);
		setShowLogoutDropdown(false);
	};

	const toggleLogoutHandler = () => {
		setIsDropdownOpen(false);
		setShowNotificationDropdown(false);
		setShowLogoutDropdown((previousValue) => !previousValue);
	};

	const toggleNotificationHandler = () => {
		setIsDropdownOpen(false);
		setShowLogoutDropdown(false);
		setShowNotificationDropdown((previousValue) => !previousValue);
	};

	useEffect(() => {
		const escapeHandler = (e) => {
			if (!e.target.closest("#drop-down")) {
				setShowLogoutDropdown(false);
				setShowNotificationDropdown(false);
				setIsDropdownOpen(false);
			}
		};
		document.addEventListener("click", escapeHandler);
	}, []);

	const closeDropdown = () => {
		setShowNotificationDropdown(false);
		setShowLogoutDropdown(false);
	};

	const authUser = useSelector((state) => state.authUser.data);
	const { id, workspaceId } = authUser;
	// useNotifications(id, workspaceId)

	return (
		<List id="drop-down">
			<div className="relative">
				<span
					className={`w-[2.5rem] h-[2.5rem] rounded-[0.75rem] p-[0.2rem] ${
						showNotificationDropdown && "bg-[rgba(76,111,255,0.12)]"
					}`}
				>
					<span className="relative">
						<Dot>08</Dot>
						<NotificationsNoneSharpIcon
							onClick={toggleNotificationHandler}
							className="icon"
							style={{ fontSize: 30 }}
						/>
					</span>
				</span>
				{showNotificationDropdown && <NotificationsDropdown />}
			</div>
			<div className="relative">
				<span
					className={`w-[2.5rem] h-[2.5rem] rounded-[0.75rem] p-[0.2rem] ${
						showLogoutDropdown && "bg-[rgba(76,111,255,0.12)]"
					}`}
				>
					<SettingsOutlinedIcon
						onClick={toggleLogoutHandler}
						className="icon"
						style={{ fontSize: 30 }}
					/>
				</span>
				{showLogoutDropdown && <NavbarDropdown />}
			</div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<ProfileDropdownMenu
					onClick={handleOpen}
					isDropdownOpen={isDropdownOpen}
					toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}
					isEditModalOpen={isEditModalOpen}
					setIsEditModalOpen={setIsEditModalOpen}
					handleEditClick={handleEditClick}
					closeDropdown={closeDropdown}
				/>
			</div>
		</List>
	);
};

export default NavBarIconList;

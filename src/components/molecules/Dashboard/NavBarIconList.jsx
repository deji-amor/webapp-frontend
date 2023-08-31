import React, { useState, useEffect } from "react";
import { styled } from "@mui/material";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NavbarDropdown from "./NavbarDropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import ProfileDropdownMenu from "../../organisms/Dashboard/ProfileDropdownMenu";

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

	const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
	const [showNotificationDropdown, setShowNotificationDropdown] = useState(false)

	const toggleLogoutHandler = () => {
		setShowLogoutDropdown((previousValue) => !previousValue);
	};

	const toggleNotificationHandler = () => {
		setShowNotificationDropdown((previousValue) => !previousValue);
	};

	useEffect(() => {
		const escapeHandler = (e) => {
			if (!e.target.closest("#drop-down")) {
				setShowLogoutDropdown(false);
				setShowNotificationDropdown(false)
			}
		};
		document.addEventListener("click", escapeHandler);
	}, []);

	return (
		<List id="drop-down">
			<div className="relative">
				<NotificationsNoneSharpIcon onClick={toggleNotificationHandler} className="icon" style={{ fontSize: 30 }} />
				{showNotificationDropdown && <NotificationsDropdown/>}
			</div>
			<div className="relative">
				<SettingsOutlinedIcon onClick={toggleLogoutHandler} className="icon" style={{ fontSize: 30 }} />
				{showLogoutDropdown && <NavbarDropdown />}
			</div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<ProfileDropdownMenu />
			</div>
			{/* <div style={{ display: 'flex', alignItems: 'center' }}>
				<Avatar alt="User Profile" variant="circular" style={{ background: "#2b2e72"}}>
					<PersonIcon style={{ fontSize: 30 }}/>	
				</Avatar>
				<ArrowDropDownIcon />
			</div> */}
		</List>
	);
};

export default NavBarIconList;

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
				<span className={`w-[2.5rem] h-[2.5rem] rounded-[0.75rem] p-[0.2rem] ${showNotificationDropdown && "bg-[rgba(76,111,255,0.12)]"}`}>
					<NotificationsNoneSharpIcon onClick={toggleNotificationHandler} className="icon" style={{ fontSize: 30 }} />
				</span>
				{showNotificationDropdown && <NotificationsDropdown/>}
			</div>
			<div className="relative">
				<span className={`w-[2.5rem] h-[2.5rem] rounded-[0.75rem] p-[0.2rem] ${showLogoutDropdown && "bg-[rgba(76,111,255,0.12)]"}`}>
					<SettingsOutlinedIcon onClick={toggleLogoutHandler} className="icon" style={{ fontSize: 30 }} />
				</span>
				{showLogoutDropdown && <NavbarDropdown />}
			</div>
			<div style={{ display: "flex", alignItems: "center" }}>
				<ProfileDropdownMenu />
			</div>
		</List>
	);
};

export default NavBarIconList;

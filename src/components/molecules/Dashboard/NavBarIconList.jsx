import React, { useState, useEffect } from "react";
import { styled } from "@mui/material";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NavbarDropdown from "./NavbarDropdown";
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

	const [showDropdown, setShowDropdown] = useState(false);

	const toggleHandler = () => {
		setShowDropdown((previousValue) => !previousValue);
	};

	useEffect(() => {
		const escapeHandler = (e) => {
			if (!e.target.closest("#drop-down")) {
				setShowDropdown(false);
			}
		};
		document.addEventListener("click", escapeHandler);
	}, []);

	return (
		<List id="drop-down">
			<div className="">
				<NotificationsNoneSharpIcon className="icon" style={{ fontSize: 30 }} />
			</div>
			<div className="relative">
				<SettingsOutlinedIcon onClick={toggleHandler} className="icon" style={{ fontSize: 30 }} />
				{showDropdown && <NavbarDropdown />}
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

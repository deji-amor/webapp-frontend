import React, { useState, useEffect } from "react";
import { uniqWith, isEqual } from "lodash";
import { styled } from "@mui/material";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NavbarDropdown from "./NavbarDropdown";
import NotificationsDropdown from "./NotificationsDropdown";
import ProfileDropdownMenu from "../../organisms/Dashboard/ProfileDropdownMenu";
import { useSelector, useDispatch } from "react-redux";
import { notificationsActions } from "../../../state-manager/reducers/notifications/notifications";
import useNotifications from "../../../hooks/useNotifications";

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
		
	const dispatch = useDispatch()

	const {data} = useSelector(state => state.authUser)
	const userId = data.id
	const workSpaceId = data.workspaceId;
	const notifications = useNotifications(userId, workSpaceId)
		const uniqueNotifications = uniqWith(notifications, isEqual);
		const numberOfUnReadNotifications = uniqueNotifications.filter(
			(notification) => notification.is_read === 0
		).length;
		const showNotificationDot = numberOfUnReadNotifications > 0;

	console.log(notifications);
	// console.log(data);

	const [showLogoutDropdown, setShowLogoutDropdown] = useState(false);
	const [showNotificationDropdown, setShowNotificationDropdown] = useState(false)

	const toggleLogoutHandler = () => {
		setShowNotificationDropdown(false);
		setShowLogoutDropdown((previousValue) => !previousValue);
	};

	const toggleNotificationHandler = () => {
		setShowLogoutDropdown(false);
		dispatch(notificationsActions.updateField({ key: "currentSearchValue", value: "All" }));
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

	// console.log(notifications);
		// const authUser = useSelector(state => state.authUser.data)
		// const { id, workspaceId } = authUser;
		// useNotifications(id, workspaceId)

	return (
		<List id="drop-down">
			<div className="relative">
				<span className={`w-[2.5rem] h-[2.5rem] rounded-[0.75rem] p-[0.2rem] ${showNotificationDropdown && "bg-[rgba(76,111,255,0.12)]"}`}>
					<span className="relative">
						{showNotificationDot && <Dot>{numberOfUnReadNotifications}</Dot>}
						<NotificationsNoneSharpIcon onClick={toggleNotificationHandler} className="icon" style={{ fontSize: 30 }} />
					</span>
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

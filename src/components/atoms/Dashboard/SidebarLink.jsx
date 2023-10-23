import React from "react";
import { styled } from "@mui/material";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutActions } from "../../../state-manager/reducers/logout/logout";

const SidebarLink = ({ link, icon, name }) => {
	const Link = styled("div")`
		display: flex;
		align-items: center;
		padding-left: 1.62rem;
		width: 100%;
		border-top-right-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
		padding-top: 0.5rem /* 8px */;
		padding-bottom: 0.5rem /* 8px */;
		text-transform: capitalize;
		background: #2b2e72;
		cursor: pointer;

		.active & {
			background: #fff;
		}

		.icon-span {
			margin-right: 0.5rem;
		}

		.icon {
			width: 1.5rem;
			height: 1.5rem;
			color: #fff;
		}

		.active & .icon {
			color: #2b2e72;
		}

		.label {
			color: #fff;
			color: 1rem;
			font-weight: 500;
			font-family: "Poppins", sans-serif;
			color: #fff;
		}

		.active & .label {
			color: #2b2e72;
		}
	`;

	const dispatch = useDispatch();
	const handleShowLogoutModal = () => {
		console.log("7tr5ddd77dd57");
		dispatch(logoutActions.toggleLogoutModal());
	};

	if (link === "logout") {
		return (
			<Link onClick={handleShowLogoutModal} className="">
				<span className="icon-span">{icon}</span>
				<span className="label">{link}</span>
			</Link>
		);
	}

	return (
		<div className="w-[10rem]">
			<NavLink className={({ isActive }) => (isActive ? "active" : "")} to={link} end={link === "dashboard" ? true : false}>
				<Link className="">
					<span className="icon-span">{icon}</span>
					<span className="label">{name}</span>
				</Link>
			</NavLink>
		</div>
	);
};

SidebarLink.propTypes = {
	link: PropTypes.string,
	name: PropTypes.string,
	icon: PropTypes.node,
	isActive: PropTypes.bool,
};

export default SidebarLink;

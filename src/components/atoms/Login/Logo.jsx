import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/login/ProjectInfo.png";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Logo = ({ isAbsolute, className }) => {
	return (
		<NavLink
			className={twMerge(
				`mr-2 bg-[#2B2E72] inline-block p-[0.75rem] z-[10px] rounded cursor-pointer ${
					isAbsolute && "absolute top-[25px] left-[50px] bg-transparent"
				} ${className}`
			)}
			to={"/"}
		>
			<img src={logo} className="mr-2 cursor-pointer" />
		</NavLink>
	);
};

Logo.propTypes = {
	isAbsolute: PropTypes.bool,
	className: PropTypes.string
};

export default Logo;

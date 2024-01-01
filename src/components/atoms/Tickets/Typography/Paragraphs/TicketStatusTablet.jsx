import React from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

function capitalizeFirstLetter(inputString) {
	return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
}

const TicketStatusTablet = ({ children }) => {
	let className = "";
	if (children.toLowerCase() === "done") {
		className = "bg-[rgba(4,133,13,0.14)] text-[#04850D]";
	}
	if (children.toLowerCase() === "in-progress") {
		className = "bg-[rgba(173,158,1,0.14)] text-[#AD9E01]";
	}
	if (children.toLowerCase() === "pending") {
		className = "bg-[rgba(226,116,15,0.14)] text-[#E2740F]";
	}
	if (children.toLowerCase() === "technician enroute") {
		className = "bg-[rgba(233,171,57,0.14)] text-[#E9AB39]";
	}

	let text = children.toLowerCase() === "technician enroute" ? "En Route" : children;

	return (
		<span
			className={twMerge(
				`flex justify-center items-center w-full max-w-[6rem] px-3 py-1 font-poppins rounded-2xl text-center text-sm not-italic font-semibold leading-5 truncate ${className}`
			)}
		>
			{capitalizeFirstLetter(text.replace("-", ""))}
		</span>
	);
};

TicketStatusTablet.propTypes = {
	children: PropTypes.node,
};

export default TicketStatusTablet;

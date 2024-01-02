import React from "react";
import PropTypes from "prop-types";
import GenHR from "../../Hr/GenHR";
import { twMerge } from "tailwind-merge";

const TicketIDHeading = ({ children, className }) => {
	return (
		<div>		
			<div
				className={twMerge(
					`text-[#2B2E72] text-left text-[2rem] not-italic font-medium leading-[2.57006rem] ${className}`
				)}
			>
				ID {children}
			</div>
			<GenHR className="w-[28rem]"/>
		</div>
	);
};

TicketIDHeading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default TicketIDHeading;

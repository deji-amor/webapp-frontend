import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from "tailwind-merge";

const TicketHeading = ({children, className}) => {
  return (
		<h1
			className={twMerge(
				`text-[#2B2E72] text-2xl not-italic font-semibold leading-[normal] font-poppins ${className}`
			)}
		>
			{children}
		</h1>
	);
}

TicketHeading.propTypes = {
  children: PropTypes.node,
	className: PropTypes.string
}

export default TicketHeading
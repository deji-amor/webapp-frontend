import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge';

const TicketStatusTablet = ({className, children}) => {
  return (
		<span
			className={twMerge(
				`flex justify-center items-center px-3 py-1 font-poppins rounded-2xl bg-[#04850D] text-[#04850D] text-center text-sm not-italic font-semibold leading-5 ${className}`
			)}
		>
			{children}
		</span>
	);
}

TicketStatusTablet.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default TicketStatusTablet
import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge';

const TicketTypeTableHeading = ({className, children}) => {
  return (
		<h1
			className={twMerge(
				`text-[#333] text-base not-italic font-medium leading-9 font-poppins ${className}`
			)}
		>
			{children}
		</h1>
	);
}

TicketTypeTableHeading.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default TicketTypeTableHeading

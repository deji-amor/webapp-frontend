import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge';

const TicketTypeTableBodyText = ({className, children}) => {
  return (
		<h1
			className={twMerge(
				`text-[#706E6E] text-base not-italic font-normal leading-9 font-poppins ${className}`
			)}
		>
			{children}
		</h1>
	);
}

TicketTypeTableBodyText.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default TicketTypeTableBodyText
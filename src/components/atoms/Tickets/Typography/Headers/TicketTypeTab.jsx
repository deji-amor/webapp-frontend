import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge';

const TicketTypeTab = ({className, children}) => {
  return (
		<h1
			className={twMerge(`text-[#2B2E72] text-base not-italic font-normal leading-5 font-poppins ${className}`)}
		>
			{children}
		</h1>
	);
}

TicketTypeTab.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

export default TicketTypeTab
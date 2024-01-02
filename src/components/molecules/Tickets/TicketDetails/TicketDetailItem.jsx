import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from "tailwind-merge";


const SideText = ({children}) => (
	<p className="text-[#706E6E] text-sm not-italic font-normal leading-5 tracking-[0.00938rem] font-poppins">
    {children}
  </p>
);

const TicketDetailItem = ({field, value}) => {
  return (
		<div className="flex py-[0.75rem] border-t-[#ECECEC] border-t border-solid">
			<div className="basis-[50%]">
				<SideText>{field}</SideText>
			</div>
			<div className="basis-[50%]">
				<SideText>{value}</SideText>
			</div>
		</div>
	);
}

SideText.propTypes = {
  children: PropTypes.node
}

TicketDetailItem.propTypes = {
	field: PropTypes.node,
	value: PropTypes.node,
};

export default TicketDetailItem
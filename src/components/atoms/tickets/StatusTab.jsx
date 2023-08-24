import React from 'react'
import { styled } from '@mui/material'
import PropTypes from "prop-types";

const Tab = styled("span")`
	display: flex;
	padding: 0.25rem 0.75rem;
	justify-content: center;
	align-items: center;
	border-radius: 1rem;
	color: ${({ color }) => color};
	background: ${({ background }) => background};
	text-align: center;
	font-family: Poppins;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.25rem; /* 142.857% */
`;

const StatusTab = ({status}) => {
	if (status.toLowerCase() === "pending" || status.toLowerCase() === "created") {
		return (
			<Tab className="capitalize" color={"#E2740F"} background={"rgba(226,116,15, 0.14)"}>
				Pending
			</Tab>
		);
	}
	if(status.toLowerCase() === "done"){
		return (
			<Tab className="capitalize" color={"#04850d"} background={"rgba(4, 133, 13, 0.14)"}>
				Done
			</Tab>
		);
	}
	if(status.toLowerCase() === "inprogress"){
		return (
			<Tab className="capitalize" color={"#AD9E01"} background={"rgba(173,158,1,0.14)"}>
				Inprogress
			</Tab>
		);
	}
	if(status.toLowerCase() === "overdue"){
		return (
			<Tab className="capitalize" color={"#922D2D"} background={"rgba(146,45,45,0.14)"}>
				Overdue
			</Tab>
		);
	}

  return (
    <Tab className='capitalize'>Error</Tab>
  )
}

StatusTab.propTypes = {
	status: PropTypes.string
}

export default StatusTab
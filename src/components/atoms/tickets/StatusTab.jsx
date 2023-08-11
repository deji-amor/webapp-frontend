import React from 'react'
import { styled } from '@mui/material'

const Tab = styled("span")`
	display: flex;
	padding: 0.25rem 0.75rem;
	justify-content: center;
	align-items: center;
	border-radius: 1rem;
	background: rgba(4, 133, 13, 0.14);
	color: #04850d;
	text-align: center;
	font-family: Poppins;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.25rem; /* 142.857% */
`;

const StatusTab = props => {
  return (
    <Tab>Done</Tab>
  )
}

StatusTab.propTypes = {}

export default StatusTab
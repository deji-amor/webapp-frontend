import React from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/material"

const StatusTab = ({status}) => {
  const Tab = styled("div")`
		display: flex;
		padding: 0.25rem 0.5625rem;
		justify-content: center;
		align-items: center;
		border-radius: 1rem;
		background: rgba(4, 133, 13, 0.14);
		color: #04850d;
		text-align: center;
		font-family: Poppins;
		font-size: 0.75rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.25rem; /* 166.667% */
	`;

  return (
    <Tab>Done</Tab>
  )
}

StatusTab.propTypes = {
  status: PropTypes.string
}

export default StatusTab
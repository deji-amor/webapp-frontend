import React from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/material"

const Text = styled("p")`
	color: ${({ color }) => color};
	font-family: Poppins;
	font-size: 1rem;
	font-style: normal;
	font-weight: 600;
	line-height: 1.875rem; /* 187.5% */
	text-transform: capitalize;
`;

const UserActivity = ({status}) => {
  let color = "#04850d";
  if(status === "active") color = "#04850D"
  if(status === "inactive") color = "#ED5A11"
  if(status === "suspend") color = "#CC961D"

  if(status === "suspend") {
    return <Text color={color}>Suspended</Text>
  }

  return (
    <Text color={color}>{status}</Text>
  )
}

UserActivity.propTypes = {
  status: PropTypes.bool
}

export default UserActivity
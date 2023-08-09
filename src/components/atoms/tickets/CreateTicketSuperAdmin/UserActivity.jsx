import React from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/material"

const UserActivity = ({status}) => {
  let color = "#04850d";
  if(status === "inactive") color = "red"

  const Text = styled("p")`
		color: ${color};
		font-family: Poppins;
		font-size: 1rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.875rem; /* 187.5% */
	`;


  return (
    <Text>{status === "active" ? "Active" : "Inactive"}</Text>
  )
}

UserActivity.propTypes = {
  status: PropTypes.bool
}

export default UserActivity
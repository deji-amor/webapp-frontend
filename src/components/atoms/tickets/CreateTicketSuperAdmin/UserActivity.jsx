import React from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/material"

const Text = styled("p")`
  color: ${({color}) => color};
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.875rem; /* 187.5% */
`;

const UserActivity = ({status}) => {
  let color = "#04850d";
  if(status === "inactive") color = "red"

  return (
    <Text color={color}>{status === "active" ? "Active" : "Inactive"}</Text>
  )
}

UserActivity.propTypes = {
  status: PropTypes.bool
}

export default UserActivity
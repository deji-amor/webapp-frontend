import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const ForgotPassword = ({children}) => {
  const Paragraph = styled("p")`
  color: #2B2E72;
  font-family: "Poppins", sans-serif;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 0.75rem; /* 100% */
  `

  return (
    <NavLink to="/forgot-password">
      <Paragraph>{children}</Paragraph>
    </NavLink>
  )
}

ForgotPassword.propTypes = {
  children: PropTypes.node
}

export default ForgotPassword
import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const HeadingEmail = ({children}) => {
  const Email = styled("span")`
  color: #2B2E72;
  font-size: 1.5rem/* 24px */;
  line-height: 2rem/* 32px */;
  font-style: normal;
  font-weight: 700;
  font-family: Poppins, sans-serif;
`

  return (
    <Email>{children}</Email>
  )
}

HeadingEmail.propTypes = {
  children: PropTypes.node
}

export default HeadingEmail

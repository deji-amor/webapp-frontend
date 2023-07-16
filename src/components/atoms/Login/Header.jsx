import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const Header = ({children}) => {
  const Header = styled("h1")`
  color: #2B2E72;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 136.023%; /* 3.40056rem */
`

  return (
    <Header>{children}</Header>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

export default Header
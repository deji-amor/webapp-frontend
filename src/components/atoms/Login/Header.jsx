import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const Header = ({children, position}) => {
  let textPosition = "center"

  if(position === "left") {
    textPosition = "left"
  }
  if(position === "right") {
    textPosition = "right"
  }

  const Header = styled("h1")`
  color: #2B2E72;
  text-align: ${textPosition};
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
  children: PropTypes.node,
  position: PropTypes.string
}

export default Header
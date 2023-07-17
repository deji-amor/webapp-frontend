import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const GreetingMessage = ({children}) => {
  const Greeting = styled("span")`
    color: #000;
    font-size: 1.5rem/* 24px */;
    line-height: 2rem/* 32px */;
    font-style: normal;
    font-weight: 700;
    font-family: Poppins, sans-serif;
  `

  return (
    <Greeting>{children}</Greeting>
  )
}

GreetingMessage.propTypes = {
  children: PropTypes.node
}

export default GreetingMessage
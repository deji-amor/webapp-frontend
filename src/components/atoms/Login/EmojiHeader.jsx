import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const EmojiHeader = ({children, position}) => {
  let textPosition = "center"

  if(position === "left") {
    textPosition = "left"
  }
  if(position === "right") {
    textPosition = "right"
  }

  const Header = styled("h1")`
    text-align: ${textPosition};
    font-family: 'Inter', sans-serif;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 136.023%; /* 3.0605rem */
  `

  return (
    <Header>{children}</Header>
  )
}

EmojiHeader.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string
}

export default EmojiHeader
import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const InputLabel = ({children, htmlFor}) => {
  const Label = styled("label")`
  color: #4F4F4F;
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  `

  return (
    <Label>{children}</Label>
  )
}

InputLabel.propTypes = {
  children: PropTypes.string,
  htmlFor: PropTypes.string
}

export default InputLabel
import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const GrayThemedLightText = ({children}) => {
  const Text = styled("p")`
		color: #4f4f4f;
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.25rem; /* 125% */
	`;

  return (
    <Text>{children}</Text>
  )
}

GrayThemedLightText.propTypes = {
  children: PropTypes.node
}

export default GrayThemedLightText
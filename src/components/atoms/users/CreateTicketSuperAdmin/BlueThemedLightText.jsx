import React from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/material"

const BlueThemedLightText = ({children}) => {
  const Text = styled("p")`
		color: #2b2e72;
		font-family: "Poppins", sans-serif;
		font-size: 1.125rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.25rem;
		display: inline-block;
	`;

  return (
    <Text>{children}</Text>
  )
}

BlueThemedLightText.propTypes = {
  children: PropTypes.node
}

export default BlueThemedLightText
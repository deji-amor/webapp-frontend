import React from 'react'
import PropTypes from 'prop-types'
import { styled } from "@mui/material";

const GrayThemedLighterText = ({children}) => {
  const Text = styled("p")`
		color: #4f4f4f;
		font-feature-settings: "clig" off, "liga" off;
		font-family: "Poppins", sans-serif;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	`;

  return (
    <Text>{children}</Text>
  )
}

GrayThemedLighterText.propTypes = {
  children: PropTypes.node
}

export default GrayThemedLighterText
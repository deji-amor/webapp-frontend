import React from 'react'
import PropTypes from 'prop-types'
import { styled } from "@mui/material";

const GrayThemedLightestText = ({children}) => {
  const Text = styled("p")`
		color: #828282;
		font-family: "Poppins", sans-serif;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.25rem; /* 142.857% */
	`;

  return (
    <Text>{children}</Text>
  )
}

GrayThemedLightestText.propTypes = {
  children: PropTypes.node
}

export default GrayThemedLightestText
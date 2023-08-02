import React from 'react'
import PropTypes from 'prop-types'
import { styled } from "@mui/material";

const SmallText = ({children}) => {
  const Text = styled("p")`
		color: #282828;
		font-family: Poppins;
		font-size: 1rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.875rem; /* 187.5% */
	`;

	return <Text>{children}</Text>;
}

SmallText.propTypes = {
  children: PropTypes.node
}

export default SmallText
import React from 'react'
import PropTypes from 'prop-types'
import { styled } from "@mui/material";

const LightText = ({children}) => {
  const Text = styled("p")`
		color: #828282;
		font-family: Poppins;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.875rem; /* 214.286% */
	`;

	return <Text>{children}</Text>;
}

LightText.propTypes = {
	children: PropTypes.node,
};

export default LightText
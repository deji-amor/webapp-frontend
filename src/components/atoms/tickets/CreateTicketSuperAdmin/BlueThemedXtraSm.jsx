import React from 'react'
import PropTypes from 'prop-types'
import { styled } from "@mui/material";

const BlueThemedXtraSm = ({ children }) => {
	const Text = styled("p")`
		display: inline-block;
		color: #2b2e72;
		font-family: "Poppins", sans-serif;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	`;

	return <Text>{children}</Text>;
};

BlueThemedXtraSm.propTypes = {
	children: PropTypes.node,
};

export default BlueThemedXtraSm
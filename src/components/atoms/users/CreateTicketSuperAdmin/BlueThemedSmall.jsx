import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const BlueThemeSmall = ({ children }) => {
	const Text = styled("p")`
		color: #2b2e72;
		font-family: Poppins;
		font-size: 1rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.875rem; /* 187.5% */
		display: inline-block;
	`;

	return <Text>{children}</Text>;
};

BlueThemeSmall.propTypes = {
	children: PropTypes.node,
};

export default BlueThemeSmall;

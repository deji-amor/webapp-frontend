import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const StatsCardValue = ({ children }) => {
	const Paragraph = styled("p")`
		color: #000;
		font-family: Poppins;
		font-size: 48px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	`;

	return <Paragraph>{children}</Paragraph>;
};

StatsCardValue.propTypes = {
	children: PropTypes.node,
};

export default StatsCardValue;

import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const StatsCardHeader = ({ children }) => {
	const Paragraph = styled("p")`
		color: #252421;
		font-family: Poppins;
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	`;

	return <Paragraph>{children}</Paragraph>;
};

StatsCardHeader.propTypes = {
	children: PropTypes.node,
};

export default StatsCardHeader;

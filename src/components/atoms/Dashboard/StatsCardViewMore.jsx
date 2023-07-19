import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const StatsCardViewMore = ({ children }) => {
	const Paragraph = styled("button")`
		color: #2b2e72;
		font-family: Poppins;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		text-decoration-line: underline;
	`;

	return <Paragraph>{children}</Paragraph>;
};

StatsCardViewMore.propTypes = {
	children: PropTypes.node,
};

export default StatsCardViewMore;

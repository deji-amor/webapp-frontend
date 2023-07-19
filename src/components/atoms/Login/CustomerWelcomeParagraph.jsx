import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const CustomerWelcomeParagraph = ({ children }) => {
	const Paragraph = styled("p")`
		color: #fff;
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.875rem; /* 166.667% */
	`;

	return <Paragraph>{children}</Paragraph>;
};

CustomerWelcomeParagraph.propTypes = {
	children: PropTypes.node,
};

export default CustomerWelcomeParagraph;

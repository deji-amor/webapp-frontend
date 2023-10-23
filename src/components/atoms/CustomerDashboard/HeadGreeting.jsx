import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const HeadGreeting = ({ children }) => {
	const Greeting = styled("span")`
		color: #000;
		font-family: Poppins;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	`;

	return <Greeting>{children}</Greeting>;
};

HeadGreeting.propTypes = {
	children: PropTypes.node,
};

export default HeadGreeting;

import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const Title = ({ children }) => {
	const Head = styled("h1")`
		color: var(--gray-900, #101828);
		text-align: center;
		font-family: "Poppins", sans-serif;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.75rem; /* 140% */
	`;

	return <Head>{children}</Head>;
};

Title.propTypes = {
	children: PropTypes.node,
};

export default Title;

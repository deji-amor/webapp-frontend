import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const PaginationText = ({ children }) => {
	const Text = styled("div")`
		color: #706e6e;
		font-family: Poppins;
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: 2.25rem; /* 225% */
		padding: 0.8rem 0.8rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	`;

	return <Text>{children}</Text>;
};

PaginationText.propTypes = {
	children: PropTypes.node,
};

export default PaginationText;

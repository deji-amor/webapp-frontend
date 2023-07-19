import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const RecentTicketsTableHeader = ({ children }) => {
	const Heading = styled("th")`
		color: #1a1a1a;
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.25rem; /* 225% */
		padding: 0.8rem 0.8rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	`;

	return <Heading>{children}</Heading>;
};

RecentTicketsTableHeader.propTypes = {
	children: PropTypes.node,
};

export default RecentTicketsTableHeader;

import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const RecentTicketTableText = ({ children, isID }) => {
	const Text = styled("td")`
		color: ${isID ? "#2B2E72" : "#706E6E"};
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

	return <Text className="max-w-[16rem]">{children}</Text>;
};

RecentTicketTableText.propTypes = {
	children: PropTypes.node,
	isID: PropTypes.bool,
};

export default RecentTicketTableText;

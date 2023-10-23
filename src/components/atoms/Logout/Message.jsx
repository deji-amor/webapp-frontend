import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const Message = ({ children }) => {
	const Paragraph = styled("p")`
		color: #667085;
		text-align: center;
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: 1.25rem; /* 125% */
	`;

	return <Paragraph>{children}</Paragraph>;
};

Message.propTypes = {
	children: PropTypes.node,
};

export default Message;

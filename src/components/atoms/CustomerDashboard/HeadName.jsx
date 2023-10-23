import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const HeadName = ({ children }) => {
	const Name = styled("span")`
		color: #2b2e72;
		font-family: Poppins;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	`;

	return <Name>{children}</Name>;
};

HeadName.propTypes = {
	children: PropTypes.node,
};

export default HeadName;

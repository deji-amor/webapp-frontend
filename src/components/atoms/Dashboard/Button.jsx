import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const Button = ({ children }) => {
	const Button = styled("button")`
		border-radius: 0.5rem;
		background: #2b2e72;
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.24);
		color: #fff;
		font-family: "Poppins", sans-serif;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.25rem; /* 142.857% */
		letter-spacing: 0.00938rem;
		padding: 0.5rem 1rem;
		text-align: center;
	`;

	return <Button>{children}</Button>;
};

Button.propTypes = {
	children: PropTypes.node,
};

export default Button;
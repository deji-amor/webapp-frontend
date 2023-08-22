import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const ButtonUnHighlighted = ({ children, onClick }) => {
	const Button = styled("button")`
		display: flex;
		padding: 0.625rem 1.125rem;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		flex: 1 0 0;
		border-radius: 0.5rem;
		border: 1px solid #d0d5dd;
		background: #fff;
		box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
		color: #344054;
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.5rem; /* 150% */

		&:hover {
			background: #2b2e72;
			color: #fff;
		}
	`;

	return <Button onClick={onClick}>{children}</Button>;
};

ButtonUnHighlighted.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
};

export default ButtonUnHighlighted;

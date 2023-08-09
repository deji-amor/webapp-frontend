import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const IconButton = ({ children, onClick, icon, bolder }) => {
	const Button = styled("button")`
		display: flex;
		padding: 0.375rem 0.75rem;
		align-items: center;
		gap: 0.25rem;
		border-radius: 0.5rem;
		border: 0.5px solid #2b2e72;
		background: #fff;
		color: #2b2e72;
		font-feature-settings: "clig" off, "liga" off;
		font-family: Poppins;
		font-size: ${bolder ? "1rem" : "0.875rem"};
		font-style: normal;
		font-weight: ${bolder ? "600" : "500"};
		line-height: ${bolder ? "1.25rem" : "normal"};
	`;

	return <Button onClick={onClick}>
    {icon}
    {children}
  </Button>;
};

IconButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  onClick: PropTypes.func,
	bolder: PropTypes.bool,
}

export default IconButton
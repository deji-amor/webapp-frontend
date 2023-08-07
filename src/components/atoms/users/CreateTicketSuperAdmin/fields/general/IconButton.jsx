import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const IconButton = ({ children, onClick, icon }) => {
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
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
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
}

export default IconButton
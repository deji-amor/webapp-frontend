import React from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/material"

const MultiplePathButton = ({ children, onClick }) => {
	const Button = styled("button")`
		display: flex;
		width: 100%;
		height: 2.25rem;
		padding: 0.5rem 0.75rem;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		border-radius: 0.5rem;
		background: #2b2e72;
		color: #fff;
	`;

	return <Button onClick={onClick}>{children}</Button>;
};

MultiplePathButton.propTypes = {
  children: PropTypes.node,
	onClick: PropTypes.func
}

export default MultiplePathButton
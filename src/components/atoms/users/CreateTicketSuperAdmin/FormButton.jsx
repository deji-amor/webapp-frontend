import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const FormButton = ({ onClick, highLighted, children, type }) => {
	const HighLighted = styled("button")`
		display: flex;
		padding: 0.625rem 1.5rem;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.75rem;
		background: rgba(43, 46, 114, 0.4);
		color: #fff;
		font-family: "Poppins", sans-serif;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.875rem; /* 214.286% */
		&:hover {
			background: rgba(43, 46, 114, 0.6); /* Lighten the background color on hover */
			cursor: pointer; /* Show a pointer cursor on hover */
			transition: background 0.3s ease-in-out; /* Add a smooth transition effect */
		}
	`;

  const UnHighLighted = styled("button")`
		display: flex;
		padding: 0.625rem 1.5rem;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		border-radius: 4.375rem;
		color: #2b2e72;
		font-family: "Poppins", sans-serif;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.875rem; /* 214.286% */
		&:hover {
			background: #f0f0f0; /* Change the background color on hover */
			cursor: pointer; /* Show a pointer cursor on hover */
			transition: background 0.3s ease-in-out; /* Add a smooth transition effect */
		}
	`;

  if(!highLighted){
    return <UnHighLighted type={type} onClick={onClick}>{children}</UnHighLighted>
  }

	return <HighLighted type={type} onClick={onClick}>{children}</HighLighted>;
};

FormButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.node,
  highLighted: PropTypes.bool
}

export default FormButton
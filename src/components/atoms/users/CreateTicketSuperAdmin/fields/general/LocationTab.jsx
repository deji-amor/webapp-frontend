import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material';

const LocationTab = ({ number, onClick, isActive, isValid }) => {
  const Tablet = styled("button")`
		display: flex;
		padding: 0.625rem 0.75rem;
		justify-content: center;
		align-items: center;
		gap: 0.625rem;
		border-radius: 0.5rem;
		border: 1px solid ${isActive ? "#2b2e72" : "transparent"};
		background: #fff;
		color: ${isValid ? "#2b2e72" : "#828282"};
		font-family: "Poppins", sans-serif;
		font-size: 1rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.25rem; /* 125% */
	`;

	return <Tablet onClick={() => onClick(number-1)}>Location {number}</Tablet>;
};

LocationTab.propTypes = {
  number: PropTypes.number,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  isValid: PropTypes.bool
}

export default LocationTab
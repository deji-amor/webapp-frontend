import React from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/material"

const Tab = ({ children, isActive, onClick }) => {
	const Tablet = styled("div")`
		color: ${isActive ? "#2b2e72" : "#706E6E"};
		font-feature-settings: "salt" on;
		font-family: Poppins;
		font-size: 1rem;
		font-style: normal;
		font-weight: 600;
		line-height: 1.25rem; /* 125% */
		padding-bottom: 1rem;
		border-bottom-width: 2px;
		border-bottom-color: ${isActive ? "#2b2e72" : "transparent"};
		cursor: pointer;
	`;

	return <Tablet onClick={onClick}>{children}</Tablet>;
};

Tab.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
}

export default Tab
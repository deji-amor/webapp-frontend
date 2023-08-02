import React from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/material"

const BlueThemedMediumText = ({children}) => {
  const Text = styled("p")`
		color: #2b2e72;
		font-family: Poppins;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.5rem; /* 200% */
	`;

	return <Text>{children}</Text>;
}

BlueThemedMediumText.propTypes = {
  children: PropTypes.node
}

export default BlueThemedMediumText
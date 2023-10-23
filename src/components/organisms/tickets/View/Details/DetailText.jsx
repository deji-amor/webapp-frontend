import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const DetailText = ({children, bolder}) => {
  const Text = styled("p")`
		color: ${({bolder}) => bolder ? "#333" : "#706e6e"};
		font-family: "Poppins", sans-serif;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: ${({bolder}) => bolder ? "500" : "400"};
		line-height: 1.25rem; /* 142.857% */
		letter-spacing: 0.00938rem;
	`;

  return (
    <Text bolder={bolder}>{children}</Text>
  )
}

DetailText.propTypes = {
  children: PropTypes.node,
  bolder: PropTypes.bool
}

export default DetailText
import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const Text = styled("h1")`
	color: #2b2e72;
	text-align: center;
	font-family: "Poppins", sans-serif;
	font-size: 32px;
	font-style: normal;
	font-weight: 500;
	line-height: 41.121px; /* 128.502% */
`;

const BigBlueText = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

BigBlueText.propTypes = {
  children: PropTypes.node
}

export default BigBlueText
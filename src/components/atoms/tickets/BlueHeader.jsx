import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const BlueHeader = ({children}) => {
  const Head = styled("h1")`
		color: #2b2e72;
		font-family: "Poppins", sans-serif;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	`;

  return (
    <Head>{children}</Head>
  )
}

BlueHeader.propTypes = {
  children: PropTypes.node
}

export default BlueHeader
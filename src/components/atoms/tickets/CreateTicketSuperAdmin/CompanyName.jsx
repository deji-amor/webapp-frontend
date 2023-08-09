import React from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/material"

const CompanyName = ({children}) => {
  const Head = styled("h3")`
		color: #2b2e72;
		font-family: "Poppins", sans-serif;
		font-size: 1.75rem;
		font-style: normal;
		font-weight: 600;
		line-height: 2.5rem; /* 142.857% */
	`;

  return (
    <Head>{children}</Head>
  )
}

CompanyName.propTypes = {
  children: PropTypes.node
}

export default CompanyName
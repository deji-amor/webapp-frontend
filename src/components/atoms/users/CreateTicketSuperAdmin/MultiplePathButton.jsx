import React from 'react'
import PropTypes from 'prop-types'
import {styled} from "@mui/material"

const MultiplePathButton = ({children}) => {
  const Button = styled("button")`
		display: flex;
		width: 8.5625rem;
		height: 2.25rem;
		padding: 0.5rem 0.75rem;
		align-items: center;
		gap: 0.25rem;
		border-radius: 0.5rem;
		background: #2b2e72;
		color: #fff;
	`;

  return (
    <Button>{children}</Button>
  )
}

MultiplePathButton.propTypes = {
  children: PropTypes.node
}

export default MultiplePathButton
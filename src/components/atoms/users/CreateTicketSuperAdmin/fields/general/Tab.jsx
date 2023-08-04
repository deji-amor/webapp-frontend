import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";

const Tab = ({children, onRemove}) => {
  const Tablet = styled("div")`
		display: flex;
		padding: 0.375rem 0.75rem;
		align-items: center;
		gap: 0.25rem;
		border-radius: 0.5rem;
		background: #2b2e72;
		color: #fff;
		font-feature-settings: "clig" off, "liga" off;
		font-family: Poppins;
		font-size: 0.875rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	`;

  return (
    <Tablet>
      {children}
      <CloseIcon onClick={onRemove} fontSize='15' className='cursor-pointer'/>
    </Tablet>
  )
}

Tab.propTypes = {
  children: PropTypes.node,
  onRemove: PropTypes.func
}

export default Tab
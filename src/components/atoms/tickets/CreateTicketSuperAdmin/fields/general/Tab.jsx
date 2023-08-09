import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close";

const Tab = ({children, onRemove}) => {
  const Tablet = styled("button")`
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

	const clickHandler = () => {
		onRemove(children)
	}

  return (
		<button className="inline-flex py-[0.375rem] px-[0.75rem] items-center gap-[0.25rem] bg-[#2b2e72] text-white font-poppins text-[0.875rem] font-[500]">
			{children}
			<CloseIcon onClick={clickHandler} fontSize="15" className="cursor-pointer" />
		</button>
	);
}

Tab.propTypes = {
  children: PropTypes.node,
  onRemove: PropTypes.func
}

export default Tab
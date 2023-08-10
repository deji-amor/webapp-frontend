import React from 'react'
import PropTypes from 'prop-types'
// STYLED
// import { styled } from '@mui/material'

const Checkbox = ({ onChange, isActive, children }) => {
	// BOX
//   const Box = styled("input")`
// 		display: flex;
// 		width: 1.25rem;
// 		height: 1.25rem;
// 		padding: 0.1875rem;
// 		justify-content: center;
// 		align-items: center;
// 		border-radius: 0.375rem;
// 		border: 1px solid #2b2e72;
// 		background: #f9f5ff;
// 	`;

// LABEL
//   const Label = styled("label")`
// 		color: #2b2e72;
// 		font-family: Poppins;
// 		font-size: 0.875rem;
// 		font-style: normal;
// 		font-weight: 500;
// 		line-height: 1.5rem; /* 171.429% */
// 	`;

	return (
		<div className="flex items-center gap-[0.75rem]">
			<input
				type="checkbox"
				checked={isActive}
				className="w-[1.25rem] h-[1.25rem] p-[0.1875rem] rounded-[0.375rem] accent-[#2b2e72] cursor-pointer"
				onChange={() => onChange(children)}
			/>
			<label className="text-[#2b2e72] text-[0.875rem] font-[500] capitalize leading-[1.5rem]">{children}</label>
		</div>
	);
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
  isActive: PropTypes.bool,
  children: PropTypes.node
}

export default Checkbox
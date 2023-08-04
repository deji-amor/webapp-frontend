import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material'

const NumberDropDown = ({min, max, value, onChange}) => {
  const Dropdown = styled("select")`
		border-radius: 0.5rem;
		border: 1px solid rgba(43, 46, 114, 0.4);
		background: #fff;
		box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
		padding: 0.625rem 0.75rem;
		width: 4rem;
		min-width: max-content;
		color: rgb(43, 46, 114);
	`;

  const options = Array.from({length: max - min + 1}, (_, i) => i + min)

  return (
		<Dropdown onChange={(e) => onChange(e.target.value)} value={value} className="outline-none focus:border focus:border-[#2B2E72] max-h-[10rem]">
			{options.map((option) => (
				<option className="text-[rgb(43,46,114)] bg-white accent-[rgb(43,46,114)]" key={option}>
					{option}
				</option>
			))}
		</Dropdown>
	);
}

NumberDropDown.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default NumberDropDown
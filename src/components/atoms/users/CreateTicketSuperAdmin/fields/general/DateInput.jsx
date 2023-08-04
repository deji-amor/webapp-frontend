import React from 'react'
import PropTypes from 'prop-types'

const DateInput = ({ placeholder, min, max, value, onChange, onBlur, hasError, id , type}) => {
	const changeHandler = (e) => onChange(e.target.value);
	const blurHandler = () => onBlur();

	return (
		<div>
			<input
				min={min}
				max={max}
				id={id}
				placeholder={placeholder}
				onChange={changeHandler}
				onBlur={blurHandler}
				type={type}
				value={value}
				className={`w-full accent-[#2b2e72] h-[46px] pl-4 pr-2 pt-3.5 text-[0.875rem] pb-4 rounded-md bg-[#eee] outline-none focus:border focus:border-[#2B2E72] ${
					hasError ? "border border-[#D73D3D]" : ""
				}`}
			/>
		</div>
	);
};

DateInput.propTypes = {
	placeholder: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	hasError: PropTypes.bool,
	id: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string
};

export default DateInput
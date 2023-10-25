import React from 'react'
import PropTypes from 'prop-types'

const EnterFieldInput = ({ placeholder, value, onChange, onBlur, hasError, id,isValid }) => {
  const changeHandler = (e) => onChange(e.target.value);
  const blurHandler = () => onBlur();

	return (
		<input
			id={id}
			placeholder={placeholder}
			onChange={changeHandler}
			onBlur={blurHandler}
			value={value}
			autoComplete="off"
			className={`w-full py-[0.25rem] px-[0.75rem] rounded-[0.25rem] border outline-none border-[#c1c1c1] text-[#706E6E] font-poppins text-sm font-[400] focus:border-[#2B2E72] ${
				isValid && "border border-[#2B2E72]"
			} ${hasError ? "border border-[#D73D3D]" : ""}`}
		/>
	);
};

EnterFieldInput.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	hasError: PropTypes.bool,
	id: PropTypes.string,
	isValid: PropTypes.bool
};

export default EnterFieldInput
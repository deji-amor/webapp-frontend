import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({ placeholder, type, value, onChange, onBlur, hasError, id }) => {
    const changeHandler = (e) => onChange(e.target.value);
		const blurHandler = () => onBlur();

	return (
			<textarea
				id={id}
				placeholder={placeholder}
				onChange={changeHandler}
				onBlur={blurHandler}
				type={type}
				value={value}
				className={`w-full h-full flex pl-4 pr-[50px] text-[0.875rem] py-3.5 rounded-md bg-[#eee] outline-none focus:border focus:border-[#2B2E72] ${
					hasError ? "border border-[#D73D3D]" : ""
				}`}
			/>
	);
};

TextArea.propTypes = {
	placeholder: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	hasError: PropTypes.bool,
	id: PropTypes.string,
};

export default TextArea
import React from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PropTypes from 'prop-types'

const Input = ({ placeholder, type, value, onChange, onBlur, hasError, id }) => {
	const changeHandler = (e) => onChange(e.target.value);
	const blurHandler = () => onBlur();

	return (
		<div>
			<input
				id={id}
				placeholder={placeholder}
				onChange={changeHandler}
				onBlur={blurHandler}
				type={type}
				value={value}
				className={`w-full h-[46px] pl-4 pr-[50px] pt-3.5 text-[0.875rem] pb-4 rounded-md bg-[#eee] outline-none focus:border focus:border-[#2B2E72] ${
					hasError ? "border border-[#D73D3D]" : ""
				}`}
			/>
		</div>
	);
};

Input.propTypes = {
	placeholder: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	hasError: PropTypes.bool,
	id: PropTypes.string,
};

export default Input
import React, {useState} from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PropTypes from "prop-types";
import { styled } from "@mui/material";

const Input = ({ placeholder, type, value, onChange, onBlur, hasError }) => {

  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibilityHandler = () => {
    setShowPassword((previousValue) => !previousValue);
  };

  const changeHandler = (e) => onChange(e.target.value)
  const blurHandler = () => onBlur()

	if (type === "password") {
		return (
			<div className="relative">
				<input placeholder={placeholder} onChange={changeHandler} onBlur={blurHandler} type={showPassword ? "text" : "password"} value={value} className={`w-full flex h-[46px] items-center self-stretch pl-4 pr-[50px] pt-3.5 pb-4 rounded-md bg-[#eee] outline-none focus:border focus:border-[#2B2E72] ${hasError ? "border border-[#D73D3D]" : ""}`} />
        {
          showPassword ? 
          <VisibilityIcon onClick={toggleVisibilityHandler} className="w-5 h-5 z-10 text-gray-900 cursor-pointer dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-2 outline-none"/> : 
          <VisibilityOffIcon onClick={toggleVisibilityHandler} className="w-5 h-5 z-10 text-gray-900 cursor-pointer dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-2 outline-none"/>
        }
			</div>
		);
	}

	return (
		<div>
			<input placeholder={placeholder} onChange={changeHandler} onBlur={blurHandler} type={type} value={value} className={`w-full flex h-[46px] items-center self-stretch pl-4 pr-[50px] pt-3.5 pb-4 rounded-md bg-[#eee] outline-none focus:border focus:border-[#2B2E72] ${hasError ? "border border-[#D73D3D]" : ""}`} />
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
};

export default Input;

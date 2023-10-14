import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import PropTypes from "prop-types";

const DateInput = ({ label, value, onChange, onBlur, hasError, id, isValid, disabled, min, max }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				className={`bg-[#eee] outline-none`}
				value={value}
				onChange={(data) => {
					const newDate = dayjs(data.$d).format("MM-DD-YYYY");
					onChange(newDate);
				}}
				// sx={{
				// 	width: "100%",
				// 	"& .MuiOutlinedInput-notchedOutline": { borderColor: "red" },
				// 	"& .MuiInputLabel-root.Mui-focused": { color: "#2B2E72" }, //styles the label
				// 	"& .MuiOutlinedInput-root": {
				// 		"&:hover > fieldset": { borderColor: "#2B2E72" },
				// 	},
				// }}
				disabled={disabled}
				onBlur={onBlur}
				popperModifiers={{
					flip: {
						behavior: ["bottom-end"],
					},
					preventOverflow: {
						enabled: false,
					},
					hide: {
						enabled: false,
					},
				}}
				minDate={min ? dayjs(min) : null}
				maxDate={max ? dayjs(max) : null}
			/>
		</LocalizationProvider>
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
	max: PropTypes.string,
	isValid: PropTypes.bool,
	disabled: PropTypes.bool,
	label: PropTypes.string,
};

export default DateInput;

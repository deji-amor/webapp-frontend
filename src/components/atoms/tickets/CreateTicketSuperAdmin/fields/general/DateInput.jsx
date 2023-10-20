import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import PropTypes from "prop-types";

const DateInput = ({ label, value, onChange, onBlur, hasError, id, isValid, disabled, min, max }) => {
	const FORMAT = "YYYY-MM-DD";
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				className={`bg-[#eee] outline-none ${disabled && "cursor-not-allowed"}`}
				value={value}
				onChange={(data) => {
					const newDate = dayjs(data.$d).format(FORMAT);
					onChange(newDate);
				}}
				slotProps={{
					textField: {
						error: hasError ? true : false,
					},
				}}
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
				format={FORMAT}
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

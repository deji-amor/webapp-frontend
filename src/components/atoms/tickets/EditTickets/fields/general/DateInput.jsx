import React from 'react'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { isValidDate } from '../../../../../../helpers/validation';
import PropTypes from 'prop-types'

const DateInput = ({ placeholder, min, max, value, onChange, onBlur, hasError, id , type, isValid, disabled}) => {
	const FORMAT = "YYYY-MM-DD";
	// if (isValidDate(value)) console.log("isvalid!!!!!");
		return (
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker
					className={`bg-[#eee] outline-none`}
					value={isValidDate(value) ? dayjs(value) : null}
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
};

export default DateInput
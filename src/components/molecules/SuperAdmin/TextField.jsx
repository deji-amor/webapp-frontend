import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../../../utilis";
import ErrorMessage from "../../atoms/SuperAdmin/ErrorMessage";
import PropTypes from "prop-types";


const TextFields = ({ label, inputProps, control, name, errors, serverError }) => {
	return (
		<FormControl
			fullWidth
			sx={{
				mb: "0.5rem",
				color: "#4F4F4F",
				fontSize: "14px",
				fontWeight: "400",
				"& .MuiOutlinedInput-root": {
					borderRadius: "6px",
					fontSize: "16px",
					fontWeight: "500",
				},
				"& .MuiOutlinedInput-notchedOutline": {
					borderColor: "#EEEEEE",
					borderWidth: "1px",
					borderStyle: "solid",
				},
				"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
					borderColor: "#2B2E72",
				},
				"& .MuiOutlinedInput-input": {
					color: "#828282",
					background: "#EEE",
				},
			}}
		>
			{label}
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<TextField
						{...field}
						{...addErrorIntoField(errors[name])}
						required
						placeholder={label}
						InputProps={inputProps}
					/>
				)}
			/>
			{errors[name] ? <ErrorMessage message={errors[name].message} /> : serverError ? <ErrorMessage message="already exist" /> : null}
		</FormControl>
	);
};

TextFields.propTypes = {
	label: PropTypes.string,
	inputProps: PropTypes.object,
	control: PropTypes.object,
	errors: PropTypes.object,
	serverError: PropTypes.bool,
	name: PropTypes.string,
}

export default TextFields;

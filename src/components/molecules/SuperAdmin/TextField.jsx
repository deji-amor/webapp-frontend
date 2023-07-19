import { FormControl, TextField, styled } from "@mui/material";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../../../utilis";
import ErrorMessage from "../../atoms/SuperAdmin/ErrorMessage";

const TextFields = ({ label, inputProps, control, name, errors }) => {
	return (
		<FormControl
			fullWidth
			sx={{
				mb: "0.5rem",
				color: "#4F4F4F",
				fontSize: "14px",
				"& .MuiOutlinedInput-root": {
					borderRadius: "6px",
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
			{errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
		</FormControl>
	);
};

export default TextFields;

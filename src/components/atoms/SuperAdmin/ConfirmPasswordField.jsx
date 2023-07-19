import { FormControl, IconButton, InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../../../utilis";
import ErrorMessage from "../../atoms/SuperAdmin/ErrorMessage";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const ConfirmPasswordField = ({ label, inputProps, control, name, errors }) => {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};
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
						type={showPassword ? "text" : "password"}
						{...field}
						{...field}
						{...addErrorIntoField(errors[name])}
						required
						placeholder={label}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={togglePasswordVisibility}>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
				)}
			/>
			{errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
		</FormControl>
	);
};

export default ConfirmPasswordField;

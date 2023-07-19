import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ErrorMessage from "./ErrorMessage";
import { addErrorIntoField } from "../../../utilis";
import PasswordErrorToast from "./PasswordErrorToast";

const PasswordField = ({ label, control, name, field, fieldState, errors }) => {
	const [showPassword, setShowPassword] = useState(false);
	const [showErrorToast, setShowErrorToast] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	const handlePasswordChange = (event) => {
		const password = event.target.value;
		setShowErrorToast(password.length < 8);
		field.onChange(event);
	};

	return (
		<>
			<div>
				<label style={{ color: "#425466", fontSize: "14px" }}>{label}</label>
				<TextField
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
					type={showPassword ? "text" : "password"}
					{...field}
					{...field}
					control={control}
					{...addErrorIntoField(errors[name])}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={togglePasswordVisibility}>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
					onChange={handlePasswordChange}
				/>
			</div>
			<PasswordErrorToast open={showErrorToast} onClose={() => setShowErrorToast(false)} />
			{errors[name] ? <ErrorMessage message={errors[name].message} /> : null}
		</>
	);
};

export default PasswordField;

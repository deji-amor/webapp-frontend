import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ErrorMessage from "./ErrorMessage";
import PasswordErrorToast from "./PasswordErrorToast";

const PasswordField = ({ label, name, field, fieldState }) => {
	const [showPassword, setShowPassword] = useState(false);
	const [showErrorToast, setShowErrorToast] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	const handlePasswordChange = (event) => {
		// Implement your password validation logic here.
		// For this example, let's just check if the password length is less than 8 characters to trigger the toast.
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
					error={!!fieldState?.error}
					helperText={fieldState?.error?.message || ""}
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
			{fieldState?.error && <ErrorMessage message={fieldState?.error?.message} />}
			<PasswordErrorToast open={showErrorToast} onClose={() => setShowErrorToast(false)} />
		</>
	);
};

export default PasswordField;

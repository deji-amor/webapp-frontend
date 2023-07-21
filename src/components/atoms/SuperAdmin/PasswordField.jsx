import React, { useState } from "react";
import { FormControl, IconButton, InputAdornment, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { addErrorIntoField } from "../../../utilis";
import ErrorMessage from "../../atoms/SuperAdmin/ErrorMessage";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import PasswordErrorToast from "./PasswordErrorToast";

const PasswordField = ({ label, control, password, errors }) => {
	const [showPasswordInput, setShowPasswordInput] = useState(false);
	const [passwordInput, setPasswordInput] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showErrorToast, setShowErrorToast] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPasswordInput((prevShowPassword) => !prevShowPassword);
	};

	const handlePasswordChange = (event) => {
		setPasswordInput(event.target.value);
		setShowErrorToast(event.target.value.length < 8);
	};

	const handleConfirmPasswordChange = (event) => {
		setConfirmPassword(event.target.value);
	};

	const isPasswordValid = password.length >= 8;

	return (
		<>
			<div>
				<label style={{ mb: "0.5rem", color: "#4F4F4F", fontSize: "14px", fontWeight: "400" }}>
					{label}
				</label>

				<FormControl
					fullWidth
					sx={{
						mb: "0.5rem",
						color: "#4F4F4F",
						fontSize: "14px",
						fontWeight: "400",
						"& .MuiOutlinedInput-root": {
							borderRadius: "6px",
							color: "#828282",
							fontSize: "16px",
							fontWeight: "400",
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
							background: "#F9F8F8",
						},
					}}
				>
					<Controller
						name="password"
						control={control}
						render={({ field }) => (
							<TextField
								type={showPasswordInput ? "text" : "password"}
								{...field}
								value={passwordInput}
								onChange={handlePasswordChange}
								{...addErrorIntoField(errors[password])}
								error={errors[password] && !isPasswordValid}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={togglePasswordVisibility}>
												{showPasswordInput ? <VisibilityOff /> : <Visibility />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						)}
					/>
					{errors[password] && !isPasswordValid && !showErrorToast && (
						<ErrorMessage message={errors[password].message} />
					)}
				</FormControl>
			</div>
			<FormControl
				fullWidth
				sx={{
					mb: "0.5rem",
					color: "#4F4F4F",
					fontSize: "14px",
					fontWeight: "400",
					"& .MuiOutlinedInput-root": {
						borderRadius: "6px",
						color: "#828282",
						fontSize: "16px",
						fontWeight: "400",
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
						background: "#F9F8F8",
					},
				}}
			>
				<label>Confirm Password</label>
				<Controller
					name="confirm_password"
					control={control}
					render={({ field }) => (
						<TextField
							type={showPasswordInput ? "text" : "password"}
							{...field}
							value={confirmPassword}
							onChange={handleConfirmPasswordChange}
							{...addErrorIntoField(errors[`confirm_${password}`])}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={togglePasswordVisibility}>
											{showPasswordInput ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
					)}
				/>
				{confirmPassword !== "" && passwordInput !== confirmPassword && (
					<ErrorMessage message="Passwords do not match" />
				)}
			</FormControl>

			{showErrorToast && (
				<PasswordErrorToast open={showErrorToast} onClose={() => setShowErrorToast(false)} />
			)}
		</>
	);
};

export default PasswordField;

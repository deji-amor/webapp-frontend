import { Box, Button, Typography } from "@mui/material";
import TextFields from "../../molecules/SuperAdmin/TextField";
import SelectFields from "../../atoms/SuperAdmin/SelectField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import CheckboxFields from "../../molecules/SuperAdmin/CheckboxField";
import ForgotPasswordRecoveryInput from "../../molecules/Password/customForgotPasswordRecoveryInput";
import { schema } from "../../atoms/SuperAdmin/Schema";
import { useDispatch, useSelector } from "react-redux";
import { validatePassword } from "../../atoms/Password/validators";
import {
	SET_ERROR_FALSE_ADMIN,
	superAdminCreate,
} from "../../../state-manager/reducers/superAdminOnboarding/superadmin";

const RegisterForm = () => {
	const {
		handleSubmit,
		reset,
		formState: { errors },
		control,
		getValues,
		setValue,
	} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			workspaceName: "",
			email: "",
			country: "",
			state: "",
			mobile: "",
			password: "",
			confirm_password: "",
			privacy: false,
		},
		resolver: yupResolver(schema),
	});

	const [checked, setChecked] = useState(false);
	const [location, setLocation] = useState({ country: "", state: "" });
	const [countryStates, setCountryStates] = useState([]);
	const [error, setError] = useState(false);
	const [validationError, setValidationError] = useState(false);
	const [serverError, setServerError] = useState(false);
	const [match, setMatch] = useState(false);
	const [passwords, setPasswords] = useState({ password: "", confirmPassword: "" });
	const { password, confirmPassword } = passwords;
	const [hasUpper, setHasUpper] = useState(false);
	const [hasLower, setHasLower] = useState(false);
	const [hasSymbol, setHasSymbol] = useState(false);
	const [hasNumber, setHasNumber] = useState(false);
	const [hasEightChar, setHasEightChar] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const serverRecoveryError = useSelector((state) => state.superAdmin.error);

	const validators = [hasUpper, hasLower, hasNumber, hasSymbol, hasEightChar];

	const handlePasswordChange = (e) => {
		setPasswords({ ...passwords, [e.target.name]: e.target.value.trim() });
		setServerError(false);
		setValidationError(false);
	};

	const handleChange = (event) => {
		setLocation({ ...location, [event.target.name]: event.target.value });
	};

	useEffect(() => {
		validatePassword(
			password,
			setHasUpper,
			setHasLower,
			setHasSymbol,
			setHasNumber,
			setHasEightChar
		);

		setValue("password", password);
		setValue("confirm_password", confirmPassword);

		if (password === confirmPassword && password.length === confirmPassword.length) {
			setMatch(true);
			setError(false);
		} else {
			setMatch(false);
			setError(true);
		}

		dispatch(SET_ERROR_FALSE_ADMIN(false));
	}, [
		password,
		confirmPassword,
		hasUpper,
		hasLower,
		hasNumber,
		hasSymbol,
		hasEightChar,
		error,
		match,
		dispatch,
		validationError,
	]);

	useEffect(() => {
		setValue("country", location.country);
		setValue("state", location.state);
		setValue("privacy", checked);
	}, [getValues, location.country, location.state, checked]);

	const onSubmit = (data) => {
		// e.preventDefault();
		// console.log(getValues());

		if (!password && !confirmPassword) return;

		if (!validators.every((each) => each === true)) return setValidationError(true);

		try {
			dispatch(superAdminCreate(data));
		} catch (err) {
			// console.log(err);
		}

		// if (serverRecoveryError) return setServerError(true);

		console.log("Submitting...");

		reset();
		navigate("/super-admin-verify");
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				fontFamily: "Poppins",
				mt: "1rem",
				alignItems: "center",
				justifyContent: "center",
				pb: "0",
				flexShrink: "0",
			}}
		>
			<Typography
				component="h1"
				sx={{
					color: "#2B2E72",
					fontSize: "32px",
					fontWeight: "600",
				}}
			>
				Create your account
			</Typography>

			<Box
				noValidate
				onSubmit={handleSubmit((data) => onSubmit(data))}
				component="form"
				sx={{ width: "100%", mt: "2rem" }}
				style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
			>
				<Box sx={{ display: "flex", gap: "30px" }}>
					<TextFields errors={errors} control={control} name="firstName" label="First Name" />

					<TextFields errors={errors} control={control} name="lastName" label="Last Name" />
				</Box>
				<Box sx={{ display: "flex", gap: "30px" }}>
					<TextFields
						errors={errors}
						control={control}
						name="workspaceName"
						label="Workspace Name"
					/>
					<TextFields errors={errors} control={control} name="email" label="Company Email" />
				</Box>

				<TextFields
					errors={errors}
					control={control}
					name="mobile"
					label="Phone Number"
					inputProps={{
						type: "phone",
					}}
				/>
				<Box sx={{ display: "flex", gap: "30px" }}>
					<SelectFields
						label="Select Country"
						location={location}
						countryStates={countryStates}
						setCountryStates={setCountryStates}
						handleChange={handleChange}
						countryProp="country"
						control={control}
						errors={errors}
					/>
				</Box>

				<ForgotPasswordRecoveryInput
					label="Enter Password"
					placeholder="Password"
					name="password"
					type="password"
					validators={{ hasUpper, hasLower, hasSymbol, hasNumber, hasEightChar }}
					match={match}
					value={password}
					confirm={confirmPassword}
					validationError={validationError}
					handleChange={handlePasswordChange}
				/>

				<ForgotPasswordRecoveryInput
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					label="Confirm Password"
					validators={{ hasUpper, hasLower, hasSymbol, hasNumber, hasEightChar }}
					single={true}
					forgotPasswordRecoveryError={error && confirmPassword.length > 0}
					match={match}
					value={password}
					validationError={validationError}
					confirm={confirmPassword}
					handleChange={handlePasswordChange}
				/>

				<CheckboxFields
					errors={errors}
					control={control}
					name="privacy"
					onClick={() => setChecked((prev) => !prev)}
					checked={checked}
				/>

				<Button
					type="submit"
					// onClick={onSubmit}
					fullWidth
					disableRipple
					disableTouchRipple
					variant="contained"
					sx={{
						mt: 3,
						mb: 2,
						p: "10px 15px",
						fontSize: "20px",
						bgcolor: "#2B2E72",
						"&:hover": {
							backgroundColor: "#2B2E72",
						},
					}}
				>
					Register
				</Button>
			</Box>
		</Box>
	);
};

export default RegisterForm;

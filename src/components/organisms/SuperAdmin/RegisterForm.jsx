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
	SET_RESPONSE_NULL_ADMIN,
	SET_EMAIL_ADMIN,
	superAdminCreate,
} from "../../../state-manager/reducers/superAdminOnboarding/superadmin";
import ErrorCard from "../../molecules/Password/customErrorCard";

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
			companyEmail: "",
			country: "",
			city: "",
			phoneNumber: "",
			password: "",
			confirmPassword: "",
			privacy: false,
		},
		resolver: yupResolver(schema),
	});

	const [checked, setChecked] = useState(false);
	const [checkedError, setCheckedError] = useState(false);
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
	const response = useSelector((state) => state.superAdmin.response);

	const validators = [hasUpper, hasLower, hasNumber, hasSymbol, hasEightChar];

	const handlePasswordChange = (e) => {
		setPasswords({ ...passwords, [e.target.name]: e.target.value.trim() });
		setServerError(false);
		setValidationError(false);
		dispatch(SET_RESPONSE_NULL_ADMIN());
	};

	const handleChange = (event) => {
		setLocation({ ...location, [event.target.name]: event.target.value });
		dispatch(SET_RESPONSE_NULL_ADMIN());
	};

	// Email has already been used!

	const handleCheckChange = () => {
		setChecked((prev) => !prev);
		dispatch(SET_RESPONSE_NULL_ADMIN());
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

		if (checked) setCheckedError(false);

		setValue("country", location.country);
		setValue("city", location.state);
		setValue("privacy", checked);
		setValue("password", password);
		setValue("confirmPassword", confirmPassword);

		if (password === confirmPassword && password.length === confirmPassword.length) {
			setMatch(true);
			setError(false);
		} else {
			setMatch(false);
			setError(true);
		}

		if (
			response === "Email has already been used!" ||
			response === "Workspace name has been used!"
		) {
			const values = getValues();
			reset(values, { keepDefaultValues: true });
			setServerError(true);
		}

		if (response === "Register successfully, verification mail has been send to your email!") {
			const email = getValues().companyEmail;
			dispatch(SET_EMAIL_ADMIN({ email }));
			reset();
			return navigate("/super-admin-verify");
		}
	}, [
		getValues,
		setValue,
		location.country,
		location.state,
		checked,
		checkedError,
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
		navigate,
		reset,
		response,
		validationError,
	]);

	const onSubmit = (data) => {
		if (!password && !confirmPassword) return;

		if (!validators.every((each) => each === true)) return setValidationError(true);

		if (!checked) return setCheckedError(true);

		try {
			dispatch(superAdminCreate(data));
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div style={{marginTop: '100px'}}>
			{response === "Email has already been used!" ? (
				<ErrorCard
					align="left"
					error={serverError}
					titleSize="16px"
					size="14px"
					titleColor="#D73D3D"
					color="rgba(215, 61, 61, 0.50);"
					title="Email has already been used"
					description="The email you entered already exist."
				/>
			) : response === "Workspace name has been used!" ? (
				<ErrorCard
					align="left"
					error={serverError}
					titleSize="16px"
					size="14px"
					titleColor="#D73D3D"
					color="rgba(215, 61, 61, 0.50);"
					title="Workspace already exist"
					description="Workspace name has been used."
				/>
			) : (
				""
			)}

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
							serverError=""
							control={control}
							name="workspaceName"
							label="Workspace Name"
						/>
						<TextFields
							errors={errors}
							serverError=""
							control={control}
							name="companyEmail"
							label="Company Email"
						/>
					</Box>

					<TextFields
						errors={errors}
						control={control}
						name="phoneNumber"
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
						onClick={handleCheckChange}
						checked={checked}
						checkedError={checkedError}
					/>

					<Button
						type="submit"
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
		</div>
	);
};

export default RegisterForm;

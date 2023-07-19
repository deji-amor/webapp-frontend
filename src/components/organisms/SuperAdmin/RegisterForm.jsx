import { Box, Button, Typography } from "@mui/material";
import TextFields from "../../molecules/SuperAdmin/TextField";
import SelectFields from "../../atoms/SuperAdmin/SelectField";
import CheckboxFields from "../../molecules/SuperAdmin/CheckboxField";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { pawdRegExp, phoneRegExp } from "../../../utilis";
import PasswordField from "../../atoms/SuperAdmin/PasswordField";
import ConfirmPasswordField from "../../atoms/SuperAdmin/ConfirmPasswordField";

//schema validation
const schema = yup.object({
	firstName: yup.string().required("First Name is required"),
	lastName: yup.string().required("Last Name is required"),
	workspaceName: yup.string().required("Workspace Name is required"),
	Email: yup.string().required("Company Email is required").email(),
	mobile: yup
		.string()
		.required("Phone Number is required")
		.matches(phoneRegExp, "Phone number is not valid"),
	country: yup.string().required("Country is required"),
	stateCity: yup.string().required("State is required"),
	password: yup
		.string()
		.required("Password is required")
		.matches(
			pawdRegExp,
			"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
		),
	confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password must match"),
	privacy: yup.bool().oneOf([true], "Field must be checked"),
});

const RegisterForm = () => {
	const {
		handleSubmit,
		reset,
		formState: { errors },
		control,
	} = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			workspaceName: "",
			companyEmail: "",
			country: "",
			mobile: "",
			password: "",
			confirmPassword: "",
			privacy: false,
		},
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
		reset();

		return <Link to="/super-admin-onboarding-success" />;
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

			{/* Form */}
			<Box
				noValidate
				component="form"
				onSubmit={handleSubmit(onSubmit)}
				sx={{ width: "100%", mt: "1rem" }}
			>
				<Box sx={{ display: "flex", gap: "20px" }}>
					<TextFields errors={errors} control={control} name="firstName" label="First Name" />

					<TextFields errors={errors} control={control} name="lastName" label="Last Name" />
				</Box>
				<Box sx={{ display: "flex", gap: "20px" }}>
					<TextFields
						errors={errors}
						control={control}
						name="workspaceName"
						label="Workspace Name"
					/>
					<TextFields errors={errors} control={control} name="Email" label="Company Email" />
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
				<Box sx={{ display: "flex", gap: "20px" }}>
					<SelectFields label="Select Country" name="country" control={control} errors={errors} />
				</Box>

				<PasswordField
					errors={errors}
					control={control}
					name="password"
					label="Enter Your Password"
				/>
				<ConfirmPasswordField
					errors={errors}
					control={control}
					name="confirmPassword"
					label="Confirm Password"
				/>

				<div
					style={{
						display: "flex",
						alignItems: "center",
						alignSelf: "stretch",
						justifyContent: "center",
					}}
				>
					<CheckboxFields errors={errors} control={control} name="privacy" />
					<div>
						{" "}
						By creating an account means you agree to the&nbsp;
						<span>
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: "#2B2E72",
									textDecoration: "none",
									fontWeight: "700",
									fontStyle: "normal",
								}}
							>
								Terms and Conditions,
							</a>{" "}
							and our{" "}
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								style={{
									color: "#2B2E72",
									textDecoration: "none",
									fontWeight: "700",
									fontStyle: "normal",
								}}
							>
								{" "}
								Privacy Policy
							</a>
						</span>{" "}
					</div>
				</div>

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
	);
};

export default RegisterForm;

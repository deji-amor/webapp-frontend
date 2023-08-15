import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ForgotEmailWrapper as ForgotPasswordResetWrapper } from "../../../atoms/Password/wrappers";
import {
	setCustomerPassword,
	SET_ERROR_NULL,
	validateToken,
} from "../../../../state-manager/reducers/users/customers/customers";
import ErrorCard from "../../../molecules/Password/customErrorCard";
import CustomButton from "../../../atoms/Password/customButton";
import lockmage from "../../../../assets/password/lock.png";
import { useNavigate, useParams } from "react-router-dom";
import { validatePassword } from "../../../atoms/Password/validators";
import PasswordLinkExp from "./passwordLinkExp";
import ForgotPasswordRecoveryInput from "../../../molecules/Password/customForgotPasswordRecoveryInput";
import { Typography, styled } from "@mui/material";

const CreatePassword = () => {
	const Typography = styled("h3")`
		color: #2b2e72;
		text-align: center;
		font-family: Poppins;
		font-size: 35px;
		font-style: normal;
		font-weight: 600;
		line-height: 136.023%; /* 54.409px */
	`;
	const Text = styled("p")`
		color: #828282;
		text-align: center;
		font-feature-settings: "salt" on;
		font-family: Poppins;
		font-size: 14px;
		font-style: normal;
		font-weight: 500;
		line-height: 162.023%; /* 22.683px */
	`;

	const [error, setError] = useState(false);
	const [validationError, setValidationError] = useState(false);
	const [serverError, setServerError] = useState(false);
	const [match, setMatch] = useState(false);
	const [empty, setEmpty] = useState(false);
	const [loading, setLoading] = useState(false);
	const [passwords, setPasswords] = useState({ password: "", confirmPassword: "" });
	const { password, confirmPassword } = passwords;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { email, token } = useParams();
	const { validationResponse, response } = useSelector((state) => state.customers);

	const [hasUpper, setHasUpper] = useState(false);
	const [hasLower, setHasLower] = useState(false);
	const [hasSymbol, setHasSymbol] = useState(false);
	const [hasNumber, setHasNumber] = useState(false);
	const [hasEightChar, setHasEightChar] = useState(false);

	const validators = [hasUpper, hasLower, hasNumber, hasSymbol, hasEightChar];

	const handleChange = (e) => {
		setPasswords({ ...passwords, [e.target.name]: e.target.value.trim() });
		setServerError(false);
		setValidationError(false);
		dispatch(SET_ERROR_NULL());
		setEmpty(false);
	};

	useEffect(() => {
		dispatch(validateToken({ email, token }));
	}, [validationResponse, dispatch, email, token]);

	useEffect(() => {
		validatePassword(
			password,
			setHasUpper,
			setHasLower,
			setHasSymbol,
			setHasNumber,
			setHasEightChar
		);

		if (password === confirmPassword && password.length === confirmPassword.length) {
			setMatch(true);
			setError(false);
		} else {
			setMatch(false);
			setError(true);
		}

		if (!password && !confirmPassword) dispatch(SET_ERROR_NULL());

		if (response === "Your password has been set successfully! You can login now")
			return navigate("/customer-create-password-success");
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
		navigate,
		validationResponse,
		response,
	]);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(SET_ERROR_NULL());

		if ((!password && !confirmPassword) || !password || !confirmPassword) return setEmpty(true);

		if (!validators.every((each) => each === true)) return setValidationError(true);

		setLoading(true);

		try {
			dispatch(setCustomerPassword({ email, token, password, confirmPassword }));
		} catch (err) {
			// CONSOLE console.log(err);
		}
	};

	return (
		<ForgotPasswordResetWrapper>
			{(validationResponse === "Invalid verification link!" && <PasswordLinkExp email={email} />) || (
				<>
					<ErrorCard
						align="left"
						error={serverError}
						titleSize="16px"
						size="14px"
						titleColor="#D73D3D"
						color="rgba(215, 61, 61, 0.50);"
						title="Password already used"
						description="The password you entered has already been used by you. Please enter a new one."
					/>
					<div style={{ display: "flex", justifyContent: "center" }}>
						<img src={lockmage} style={{ width: "30px", flexShrink: "0" }} />
					</div>
					<div>
						<Typography component={"h3"}>Create Your Password</Typography>
						<Text>
							Hello <span style={{ color: "#2b2e72", fontWeight: "600" }}>{email}</span>, please
							create your password to activate your account and login.
						</Text>
					</div>

					<ForgotPasswordRecoveryInput
						label="Enter New Password"
						placeholder="Password"
						name="password"
						type="password"
						empty={empty}
						validators={{ hasUpper, hasLower, hasSymbol, hasNumber, hasEightChar }}
						match={match}
						value={password}
						confirm={confirmPassword}
						validationError={validationError}
						handleChange={handleChange}
					/>

					<ForgotPasswordRecoveryInput
						type="password"
						empty={empty}
						name="confirmPassword"
						placeholder="Password"
						label="Confirm New Password"
						validators={{ hasUpper, hasLower, hasSymbol, hasNumber, hasEightChar }}
						single={true}
						forgotPasswordRecoveryError={error && confirmPassword.length > 0}
						match={match}
						value={password}
						validationError={validationError}
						confirm={confirmPassword}
						handleChange={handleChange}
					/>

					<CustomButton
						butText="Confirm"
						butType="button"
						onClick={handleSubmit}
						loading={loading}
						error={error}
						serverError={serverError}
						// defaultCursor={serverError || error || validationError || !password || !confirmPassword}
					/>
				</>
			)}
		</ForgotPasswordResetWrapper>
	);
};

export default CreatePassword;

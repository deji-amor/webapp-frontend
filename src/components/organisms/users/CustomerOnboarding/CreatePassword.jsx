import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ForgotEmailWrapper as ForgotPasswordResetWrapper } from "../../../atoms/Password/wrappers";
import {
	setCustomerPassword,
	SET_ERROR_NULL,
	validateToken,
} from "../../../../state-manager/reducers/users/customers/customers";
import CustomButton from "../../../atoms/Password/customButton";
import lockmage from "../../../../assets/password/lock.png";
import { useNavigate, useParams } from "react-router-dom";
import { validatePassword } from "../../../atoms/Password/validators";
import PasswordLinkExp from "./passwordLinkExp";
import ForgotPasswordRecoveryInput from "../../../molecules/Password/customForgotPasswordRecoveryInput";
import { TailSpin } from "react-loader-spinner";
import { styled } from "@mui/material";

const LoadWrapper = styled("div")(() => ({
	width: "100%",
	height: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",

	".tailspain": {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "10px",
	},

	".tailspain h2": {
		color: "#2B2E72",
		textAlign: "center",
		fontFamily: "Poppins",
		fontSize: "24px",
		fontStyle: "normal",
		fontWeight: "700",
		lineHeight: "120%",
		letterSpacing: "0.8px",
		textTransform: "uppercase",
	},
}));

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
	const [match, setMatch] = useState(false);
	const [empty, setEmpty] = useState(false);
	const [loading, setLoading] = useState(false);
	const [load, setLoad] = useState(true);
	const [passwords, setPasswords] = useState({ password: "", confirmPassword: "" });
	const { password, confirmPassword } = passwords;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { email, token } = useParams();
	const { validationResponse, passwordResponse } = useSelector((state) => state.customers);

	const [hasUpper, setHasUpper] = useState(false);
	const [hasLower, setHasLower] = useState(false);
	const [hasSymbol, setHasSymbol] = useState(false);
	const [hasNumber, setHasNumber] = useState(false);
	const [hasEightChar, setHasEightChar] = useState(false);

	const validators = [hasUpper, hasLower, hasNumber, hasSymbol, hasEightChar];

	const handleChange = (e) => {
		setPasswords({ ...passwords, [e.target.name]: e.target.value.trim() });
		setValidationError(false);
		dispatch(SET_ERROR_NULL());
		setEmpty(false);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoad(false);
		}, 5000);

		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		dispatch(validateToken({ email, token }));

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

		if (passwordResponse) setLoading(false);

		if (passwordResponse === "Your password has been set successfully! You can login now") return navigate("/customer-create-password-success");
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
		email,
		token,
		passwordResponse,
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
		<>
			{((validationResponse === "Invalid verification link!" && passwordResponse != "Your password has been set successfully! You can login now") && <PasswordLinkExp email={email} />) ||
				(load && (
					<LoadWrapper>
						<div className="tailspain">
							<h2>Validating Token</h2>
							<TailSpin
								height="100"
								width="100"
								color="#2B2E72"
								ariaLabel="tail-spin-loading"
								radius="1"
								wrapperStyle={{}}
								wrapperClass=""
								visible={true}
							/>
						</div>
					</LoadWrapper>
				)) || (
					<ForgotPasswordResetWrapper>
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
						/>
					</ForgotPasswordResetWrapper>
				)}
		</>
	);
};

export default CreatePassword;

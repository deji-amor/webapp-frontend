import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ForgotEmailWrapper as ForgotPasswordResetWrapper } from "../../atoms/Password/wrappers";
import { forgotpasswordrecovery } from "../../../state-manager/reducers/password/forgotpassword";
import { SET_ERROR_FALSE } from "../../../state-manager/reducers/password/forgotpassword";
import HeaderContent from "../../molecules/Password/customHeaderSection";
import ErrorCard from "../../molecules/Password/customErrorCard";
import CustomButton from "../../atoms/Password/customButton";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import { validatePassword } from "../../atoms/Password/validators";
import ForgotPasswordRecoveryInput from "../../molecules/Password/customForgotPasswordRecoveryInput";

const ForgotPasswordRecover = () => {
	const [error, setError] = useState(false);
	const [validationError, setValidationError] = useState(false);
	const [serverError, setServerError] = useState(false);
	const [match, setMatch] = useState(false);
	const [passwords, setPasswords] = useState({ password: "", confirmPassword: "" });
	const { password, confirmPassword } = passwords;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const serverRecoveryError = useSelector((state) => state.forgotpassword.error);

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

		if (password === confirmPassword && password.length === confirmPassword.length) {
			setMatch(true);
			setError(false);
		} else {
			setMatch(false);
			setError(true);
		}

		dispatch(SET_ERROR_FALSE(false));
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

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!password && !confirmPassword) return;

		if (!validators.every((each) => each === true)) return setValidationError(true);

		try {
			dispatch(forgotpasswordrecovery({ password, confirmPassword }));
		} catch (err) {
			console.log(err);
		}

		// if (serverRecoveryError) return setServerError(true);

		console.log("Submitting...");
		navigate("/password-recovery-success");
	};

	return (
		<ForgotPasswordResetWrapper>
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

			<HeaderContent
				icon={<LockIcon className="icon" />}
				iconSize="36px"
				title="Recover Password"
				description="Enter your new password"
			/>

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
				handleChange={handleChange}
			/>

			<ForgotPasswordRecoveryInput
				type="password"
				name="confirmPassword"
				placeholder="Confirm Password"
				label="Enter Password Again"
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
				butText="Confirm Password Change"
				butType="button"
				onClick={handleSubmit}
				error={error}
				serverError={serverError}
			/>
		</ForgotPasswordResetWrapper>
	);
};

export default ForgotPasswordRecover;

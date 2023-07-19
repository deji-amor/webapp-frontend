import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutActions } from "../../../state-manager/reducers/logout/logout";
import { ResetPasswordWrapper } from "../../atoms/Password/wrappers";
import { forgotpasswordrecovery } from "../../../state-manager/reducers/password/forgotpassword";
import { SET_ERROR_FALSE } from "../../../state-manager/reducers/password/forgotpassword";
import ResetPasswordInputs from "../../molecules/Password/resetpasswordinputs";
import { validatePassword } from "../../atoms/Password/validators";
import Overlay from "../../atoms/Logout/Overlay";

const ResetPassword = () => {
	const [error, setError] = useState(false);
	const [currentError, setCurrentError] = useState(false);
	const [validationError, setValidationError] = useState(false);
	const [serverError, setServerError] = useState(false);
	const [match, setMatch] = useState(false);
	const [passwords, setPasswords] = useState({ current: "", password: "", confirmPassword: "" });
	const { current, password, confirmPassword } = passwords;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const serverRecoveryError = useSelector((state) => state.forgotPassword.error);

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

		if (password === confirmPassword) {
			setMatch(true);
			setError(false);
		} else {
			setMatch(false);
			setError(true);
		}

		if (password === current && password.length > 1 && !confirmPassword) {
			setCurrentError(true);
			setError(true);
		} else {
			setCurrentError(false);
			setError(false);
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
		current,
	]);

	const handleShowResetModal = () => {
		dispatch(logoutActions.toggleResetModal());
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!password && !confirmPassword) return;

		if (password === current) return setCurrentError(true);

		if (error) return;

		if (currentError) return;

		if (!validators.every((each) => each === true)) return setValidationError(true);

		try {
			dispatch(forgotpasswordrecovery({ password, confirmPassword }));
		} catch (err) {
			console.log(err);
		}

		if (serverRecoveryError) return setServerError(true);

		console.log("Submitting...");
		navigate("/reset-password-success");
	};

	return (
		<>
			<Overlay onClick={handleShowResetModal} />
			<ResetPasswordWrapper>
				<ResetPasswordInputs
					hasUpper={hasUpper}
					hasLower={hasLower}
					hasSymbol={hasSymbol}
					hasNumber={hasNumber}
					hasEightChar={hasEightChar}
					handleFormSubmit={handleSubmit}
					handleChange={handleChange}
					forgotPasswordRecoveryError={!match}
					serverError={serverError}
					match={match}
					value={password}
					current={current}
					currentError={currentError}
					validationError={validationError}
					confirm={confirmPassword}
				/>
			</ResetPasswordWrapper>
		</>
	);
};

export default ResetPassword;

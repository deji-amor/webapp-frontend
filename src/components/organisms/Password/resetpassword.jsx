import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutActions, logout } from "../../../state-manager/reducers/logout/logout";
import { ResetPasswordWrapper } from "../../atoms/Password/wrappers";
import {
	resetPassword,
	SET_SERVER_RESET_NULL,
} from "../../../state-manager/reducers/password/resetpassword";
import { getDeviceName } from "../../../utilis";
import ResetPasswordInputs from "../../molecules/Password/resetpasswordinputs";
import { validatePassword } from "../../atoms/Password/validators";
import Overlay from "../../atoms/Logout/Overlay";

const ResetPassword = () => {
	const [error, setError] = useState(false);
	const [currentError, setCurrentError] = useState(false);
	const [validationError, setValidationError] = useState(false);
	const [serverError, setServerError] = useState(false);
	const [match, setMatch] = useState(false);
	const [empty, setEmpty] = useState(false);
	const [loading, setLoading] = useState(false);
	const [passwords, setPasswords] = useState({ current: "", password: "", confirmPassword: "" });
	const { current, password, confirmPassword } = passwords;
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const serverResetResponse = useSelector((state) => state.resetPassword.serverResetResponse);

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
		dispatch(SET_SERVER_RESET_NULL());
		setEmpty(false);
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

		if (!current) dispatch(SET_SERVER_RESET_NULL());

		if (serverResetResponse) setLoading(false);

		if (serverResetResponse === "Invalid current password!") return setServerError(true);

		if (serverResetResponse === "Your password has been changed successfully!") {
			const device = getDeviceName();
			console.log({device});
			dispatch(logoutActions.toggleResetModal());
			dispatch(logout({deviceName: device}));
			return navigate("/reset-password-success");
		}
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
		serverResetResponse,
		navigate,
	]);

	const handleShowResetModal = () => {
		dispatch(logoutActions.toggleResetModal());
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if ((!password && !confirmPassword) || !password || !confirmPassword) return setEmpty(true);

		if (password === current) return setCurrentError(true);

		if (currentError || error) return;

		if (!validators.every((each) => each === true)) return setValidationError(true);

		setLoading(true);

		try {
			dispatch(
				resetPassword({
					currentPassword: current,
					newPassword: password,
					confirmPassword: confirmPassword,
				})
			);
		} catch (err) {
			// console.log(err);
		}
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
					empty={empty}
					match={match}
					value={password}
					current={current}
					loading={loading}
					currentError={currentError}
					validationError={validationError}
					confirm={confirmPassword}
				/>
			</ResetPasswordWrapper>
		</>
	);
};

export default ResetPassword;

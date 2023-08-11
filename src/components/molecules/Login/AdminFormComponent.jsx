import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EmojiHeader from "../../atoms/Login/EmojiHeader";
import Header from "../../atoms/Login/Header";
import Paragraph from "../../atoms/Login/Paragraph";
import InputLabel from "../../atoms/Login/InputLabel";
import Input from "../../atoms/Login/Input";
import Button from "../../atoms/Login/button"
import useBasicInput from "../../../hooks/useBasicInput";
import ValidationErrorText from "../../atoms/Login/ValidationErrorText";
import ForgotPassword from "../../atoms/Login/ForgotPassword";
import { isValidEmail, isNotEmpty } from "../../../helpers/validation";
import { loginAdminActions, loginAdmin } from "../../../state-manager/reducers/login/loginAdmin";
import { authUserActions } from "../../../state-manager/reducers/users/authUser";
import { getDeviceName, getAuthToken } from "../../../utilis";

const AdminFormComponent = () => {
	const {
		loading,
		token,
		errorMessage,
		errorTitle,
		clickIncrement,
		error,
		successful,
		authUserData,
	} = useSelector((state) => state.loginAdmin);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [wasSubmitted, setWasSubmitted] = useState(false);

	const {
		enteredValue: usernameValue,
		errorMessage: usernameErrorMessage,
		setErrorMessage: usernameSetErrorMessage,
		hasError: usernameHasError,
		setHasError: usernameSetHasError,
		valueChangeHandler: usernameChangeHandler,
		valueBlurHandler: usernameBlurHandler,
		valueIsValid: usernameIsValid,
		errorFromServer: usernameErrFromServer,
		setErrorFromServer: usernameSetErrorFromServer,
		id: usernameId,
		reset: usernameReset,
	} = useBasicInput(isValidEmail);

	const {
		enteredValue: passwordValue,
		errorMessage: passwordErrorMessage,
		setErrorMessage: passwordSetErrorMessage,
		hasError: passwordHasError,
		setHasError: passwordSetHasError,
		valueChangeHandler: passwordChangeHandler,
		valueBlurHandler: passwordBlurHandler,
		valueIsValid: passwordIsValid,
		errorFromServer: passwordErrFromServer,
		setErrorFromServer: passwordSetErrorFromServer,
		id: passwordId,
		reset: passwordReset,
	} = useBasicInput(isNotEmpty);

	useEffect(() => {
		if (Object.entries(authUserData).length !== 0) {
			dispatch(authUserActions.setData(authUserData))
		}
	}, [authUserData, dispatch])

	useEffect(() => {
		const getAuthTokenHandler = async () => {
			const to = await getAuthToken(); // auth toKen
			if (successful && to && wasSubmitted) {
				usernameReset()
				passwordReset()
				dispatch(loginAdminActions.resetLoginAdmin());
				return navigate("/app/dashboard");
			}
		};

		getAuthTokenHandler();
		if (error && errorMessage === "Invalid email and/or password!") {
			dispatch(
				loginAdminActions.showToasts({
					message: "The username/password you entered is incorrect, please check again.",
					title: errorMessage,
				})
			);

			usernameSetErrorMessage("Username may be invalid");
			usernameSetHasError(true);
			usernameSetErrorFromServer(true);
			passwordSetErrorMessage("Password may be invalid");
			passwordSetHasError(true);
			passwordSetErrorFromServer(true);
			return navigate("/");
		}

		if (error && errorMessage === "Invalid username!") {
			dispatch(
				loginAdminActions.showToasts({
					message: "The username you entered is incorrect, please check again.",
					title: errorMessage,
				})
			);
			usernameSetErrorMessage(errorMessage);
			usernameSetHasError(true);
			usernameSetErrorFromServer(true);
			return;
		}

		if (error && 
			errorMessage ===
			"You account has been disabled temporarily for multiple login attempt! Try after 20 minutes"
		) {
			dispatch(
				loginAdminActions.showToasts({
					message:
						"You account has been disabled temporarily for multiple login attempt! Try after 20 minutes",
					title: "Temporarily been disabled",
				})
			);
			return;
		}

		if (error && errorMessage && errorTitle) {
			dispatch(
				loginAdminActions.showToasts({
					message: errorMessage,
					title: errorTitle,
				})
			);
		}
	}, [
		token,
		errorMessage,
		errorTitle,
		navigate,
		dispatch,
		usernameSetErrorMessage,
		usernameSetHasError,
		usernameSetErrorFromServer,
		passwordSetErrorMessage,
		passwordSetHasError,
		passwordSetErrorFromServer,
		clickIncrement,
		wasSubmitted,
	]);

	const submitHandler = (e) => {
		e.preventDefault();
		setWasSubmitted(true);
		usernameSetHasError(false);
		passwordSetHasError(false)
		dispatch(loginAdminActions.resetToasts())
		dispatch(
			loginAdmin({
				username: usernameValue,
				password: passwordValue,
				deviceName: getDeviceName(),
			})
		);
	};

	const isButtonDisabled = !(passwordIsValid && usernameIsValid);

	return (
		<form onSubmit={submitHandler} className="">
			<div className="mb-[1.88rem]">
				<EmojiHeader>👋</EmojiHeader>
			</div>
			<Header>Hello!</Header>
			<Paragraph>Login to access your Dashboard.</Paragraph>
			<div className="mt-[3.38rem] space-y-[1.88rem]">
				<div className="">
					<InputLabel htmlFor={usernameId}>Username</InputLabel>
					<Input
						placeholder="Type your registered email"
						type="text"
						value={usernameValue}
						onBlur={usernameBlurHandler}
						onChange={usernameChangeHandler}
						hasError={usernameHasError}
						id={usernameId}
					/>
					{usernameHasError && (
						<ValidationErrorText errorFromServer={usernameErrFromServer}>
							{usernameErrorMessage}
						</ValidationErrorText>
					)}
				</div>
				<div className="">
					<InputLabel htmlFor={passwordId}>Password</InputLabel>
					<Input
						placeholder="Type your password"
						type="password"
						value={passwordValue}
						onBlur={passwordBlurHandler}
						onChange={passwordChangeHandler}
						hasError={passwordHasError}
						id={passwordId}
					/>
					{passwordHasError && (
						<ValidationErrorText errorFromServer={passwordErrFromServer}>
							{passwordErrorMessage}
						</ValidationErrorText>
					)}
					<div className="mt-2">
						<ForgotPassword>Forgot Password?</ForgotPassword>
					</div>
				</div>
				<div className="w-full">
					<Button
						isDisabled={isButtonDisabled || loading}
						type="submit"
						isLoading={loading}
						loadingText="Signing in..."
					>
						Sign in
					</Button>
				</div>
			</div>
		</form>
	);
};

export default AdminFormComponent;

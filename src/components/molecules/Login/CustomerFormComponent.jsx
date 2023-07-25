import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import EmojiHeader from "../../atoms/Login/EmojiHeader";
import Header from "../../atoms/Login/Header";
import Paragraph from "../../atoms/Login/Paragraph";
import InputLabel from "../../atoms/Login/InputLabel";
import Input from "../../atoms/Login/Input";
import Button from "../../atoms/Login/Button";
import useBasicInput from "../../../hooks/useBasicInput";
import ValidationErrorText from "../../atoms/Login/ValidationErrorText";
import ForgotPassword from "../../atoms/Login/ForgotPassword";
import { isValidEmail, isNotEmpty } from "../../../helpers/validation";
import {
	loginCustomerActions,
	loginCustomer,
} from "../../../state-manager/reducers/login/loginCustomer";
import { getAuthToken, getDeviceName } from "../../../utilis";

const CustomerFormComponent = () => {
	const { loading, token, errorMessage, errorTitle, clickIncrement } = useSelector(
		(state) => state.loginCustomer
	);
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
	} = useBasicInput(isNotEmpty);

	useEffect(() => {
		const getAuthTokenHandler = async () => {
			const to = await getAuthToken(); // toKen
			if (to && wasSubmitted) {
				navigate("/app/dashboard");
			}
		};
		getAuthTokenHandler();
		if (errorMessage === "Invalid email and/or password!") {
			dispatch(
				loginCustomerActions.showToasts({
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
			return;
		}
		if (errorMessage === "Invalid username!") {
			dispatch(
				loginCustomerActions.showToasts({
					message: "The username you entered is incorrect, please check again.",
					title: errorMessage,
				})
			);
			usernameSetErrorMessage(errorMessage);
			usernameSetHasError(true);
			usernameSetErrorFromServer(true);
			return;
		}
		if (
			errorMessage ===
			"You account has been disabled temporarily for multiple login attempt! Try after 20 minutes"
		) {
			dispatch(
				loginCustomerActions.showToasts({
					message: "The username you entered is incorrect, please check again.",
					title: "Temporarily been disabled",
				})
			);
			return;
		}
			if (errorMessage && errorTitle) {
				dispatch(
					loginCustomerActions.showToasts({
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
	]);

	const submitHandler = (e) => {
		e.preventDefault();
		setWasSubmitted(true);
		dispatch(
			loginCustomer({
				username: usernameValue,
				password: passwordValue,
				deviceName: getDeviceName(),
			})
		);
	};

	const isButtonDisabled = !(passwordIsValid && usernameIsValid);

	return (
		<form onSubmit={submitHandler} className="max-w-[26.56rem]">
			<div className="mb-[1.2rem]">
				<EmojiHeader position={"left"}>👋</EmojiHeader>
			</div>
			<Header position={"left"}>Welcome back!</Header>
			<Paragraph position={"left"}>Login to your Dashboard</Paragraph>
			<div className="mt-[1rem] space-y-[1rem]">
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
				</div>
				<div className="">
					<ForgotPassword>Forgot Password?</ForgotPassword>
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

export default CustomerFormComponent;

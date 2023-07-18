import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EmojiHeader from "../../atoms/Login/EmojiHeader";
import Header from "../../atoms/Login/Header";
import Paragraph from "../../atoms/Login/Paragraph";
import InputLabel from "../../atoms/Login/InputLabel";
import Input from "../../atoms/Login/Input";
import Button from "../../atoms/Login/button";
import useBasicInput from "../../../hooks/useBasicInput";
import ValidationErrorText from "../../atoms/Login/ValidationErrorText";
import ForgotPassword from "../../atoms/Login/ForgotPassword";
import { isValidEmail, isNotEmpty } from "../../../helpers/validation";
import {loginAdminActions} from "../../../state-manager/reducers/login/loginAdmin"

const AdminFormComponent = () => {
	const loginAdminState = useSelector(state => state.loginAdmin)
	const dispatch = useDispatch()

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


  const submitHandler = (e) => {
		e.preventDefault();
		const err = {message: "The email you entered is not registered with us.", title: "Username Not Found"}
		dispatch(loginAdminActions.showToasts(err))
		usernameSetErrorMessage(err.title)
		usernameSetHasError(true)
		usernameSetErrorFromServer(true)
	};


  const isButtonDisabled = !(passwordIsValid && usernameIsValid)
  // const isButtonDisabled = false

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
          {usernameHasError && <ValidationErrorText errorFromServer={usernameErrFromServer}>{usernameErrorMessage}</ValidationErrorText>}
          
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
          {passwordHasError && <ValidationErrorText>{passwordErrorMessage}</ValidationErrorText>}
				</div>
        <div className="">
          <ForgotPassword>Forgot Password?</ForgotPassword>
        </div>
				<div className="w-full">
					<Button isDisabled={isButtonDisabled}  type="submit" isLoading={false}>
						Sign in
					</Button>
				</div>
			</div>
		</form>
	);
};

export default AdminFormComponent;

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { customerforgotpasswordemail } from "../../../state-manager/reducers/password/forgotpassword";
import {
	SET_EMAIL,
	REMOVE_EMAIL,
	SET_ERROR_FALSE,
} from "../../../state-manager/reducers/password/forgotpassword";
import CustomerBanner from "../../molecules/Password/customerpasswordbanner";
import { CustomerpasswordWrapper } from "../../atoms/Password/wrappers";
import CustomerPasswordForm from "../../molecules/Password/customerpasswordform";
import { validateEmail } from "../../atoms/Password/validators";

const CustomerpasswordBanner = () => {
	const [serverError, setServerError] = useState(false);
	const [forgotPasswordError, setForgotPasswordError] = useState(false);
	const [email, setEmail] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { error } = useSelector((state) => state.forgotPassword);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		setServerError(false);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!email) return;

		try {
			dispatch(SET_EMAIL({ email }));
			dispatch(customerforgotpasswordemail({ email }));
		} catch (err) {
			console.log(err);
		}

		// if (error) return setServerError(true);
		if (!serverError && !forgotPasswordError) return navigate("/forgot-password-success");

		console.log("Submitting");
	};

	useEffect(() => {
		validateEmail(setForgotPasswordError, email);
		dispatch(SET_ERROR_FALSE(false));
	}, [email, dispatch]);

	return (
		<CustomerpasswordWrapper>
			<CustomerBanner
				title="Streamlined IT Service Management."
				description="Our robust solution is built and optimized specifically for IT teams and workflows, influenced by feedback, and centred around end-user and endpoint support.. "
			/>

			<CustomerPasswordForm
				serverError={serverError}
				forgotPasswordError={forgotPasswordError}
				handleEmailChange={handleEmailChange}
				handleFormSubmit={handleFormSubmit}
				defaultCursor={forgotPasswordError || serverError || !email}
			/>
		</CustomerpasswordWrapper>
	);
};

export default CustomerpasswordBanner;

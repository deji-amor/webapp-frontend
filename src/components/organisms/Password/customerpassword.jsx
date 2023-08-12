import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { customerforgotpasswordemail } from "../../../state-manager/reducers/password/forgotpassword";
import {
	SET_EMAIL,
	SET_ERROR_NULL,
} from "../../../state-manager/reducers/password/forgotpassword";
import CustomerBanner from "../../molecules/Password/customerpasswordbanner";
import { CustomerpasswordWrapper } from "../../atoms/Password/wrappers";
import CustomerPasswordForm from "../../molecules/Password/customerpasswordform";
import { validateEmail } from "../../atoms/Password/validators";

const CustomerpasswordBanner = () => {
	const [forgotPasswordError, setForgotPasswordError] = useState();
	const [serverError, setServerError] = useState(false);
	const [email, setEmail] = useState("");
	const [empty, setEmpty] = useState(false);
	const [loading, setLoading] = useState(false)

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const response = useSelector(state => state.forgotPassword.response);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		setServerError(false);
		dispatch(SET_ERROR_NULL());
		setEmpty(false)
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (!email) return setEmpty(true);

		setLoading(true)

		try {
			dispatch(SET_EMAIL({ email }));
			dispatch(customerforgotpasswordemail({ email }));
		} catch (err) {
			// CONSOLE console.log(err);
		}
	};

	useEffect(() => {
		if (email) validateEmail(setForgotPasswordError, email);

		if (response) setLoading(false)

		if (response === "User with the email address not found!") return setServerError(true);

		if (response === "Password reset link has been sent to your email!") return navigate("/forgot-password-success");

	}, [email, dispatch, response, navigate, empty]);

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
				email={email}
				empty={empty}
				loading={loading}
				defaultCursor={forgotPasswordError || serverError || !email}
			/>
		</CustomerpasswordWrapper>
	);
};

export default CustomerpasswordBanner;

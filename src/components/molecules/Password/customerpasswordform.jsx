import PropTypes from "prop-types";
import { ForgotEmailWrapper, CustomerEmailWrapper } from "../../atoms/Password/wrappers";
import ErrorCard from "./customErrorCard";
import HeaderContent from "./customHeaderSection";
import lockImage from "../../../assets/password/lock.png";
import InputButton from "./customForgotPasswordInputSection";

const CustomerPasswordForm = ({
	serverError,
	forgotPasswordError,
	handleEmailChange,
	handleFormSubmit,
	email,
	empty,
	loading
}) => {
	return (
		<CustomerEmailWrapper>
			<ForgotEmailWrapper>
				<ErrorCard
					align="left"
					error={serverError}
					titleSize="16px"
					size="14px"
					titleColor="#D73D3D"
					color="rgba(215, 61, 61, 0.50);"
					title="Email Not Found"
					description="The email you entered is not registered with us."
				/>

				<HeaderContent
					icon={<img src={lockImage} className="icon" />}
					padding={false}
					width="100%"
					align="left"
					iconSize="38px"
					title="Forgot Password"
					description="Enter your email and we will send you a reset link"
				/>

				<InputButton
					type="email"
					butText="Send me the link"
					butType="button"
					placeholder="Type your e-mail"
					label="E-mail"
					empty={empty}
					loading={loading}
					handleEmailChange={handleEmailChange}
					forgotPasswordError={forgotPasswordError}
					errorMessage="Invalid email format"
					serverError={serverError}
					defaultCursor={!email || forgotPasswordError || serverError}
					serverErrorMessage="Email not found"
					note="The recovery link will expire after 48 hrs, please use before then."
					handleFormSubmit={handleFormSubmit}
				/>
			</ForgotEmailWrapper>
		</CustomerEmailWrapper>
	);
};

CustomerPasswordForm.propTypes = {
	serverError: PropTypes.bool,
	empty: PropTypes.bool,
	loading: PropTypes.bool,
	forgotPasswordError: PropTypes.bool,
	handleEmailChange: PropTypes.func,
	handleFormSubmit: PropTypes.func,
	email: PropTypes.string,
};

export default CustomerPasswordForm;

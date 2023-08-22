import ForgotPasswordEmail from "../components/organisms/Password/forgotPasswordEmailInput";
import { ForgotEmailPageWrapper } from "../components/atoms/Password/wrappers";
import CustomLogo from "../components/atoms/Password/customLogo";

const ForgotPassword = () => {
	return (
		<>
			<CustomLogo />
			<ForgotEmailPageWrapper>
				<ForgotPasswordEmail />
			</ForgotEmailPageWrapper>
		</>
	);
};

export default ForgotPassword;

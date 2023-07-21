import ForgotPasswordEmail from "../organisms/Password/forgotPasswordEmailInput";
import { ForgotEmailPageWrapper } from "../atoms/Password/wrappers";
import CustomLogo from "../atoms/Password/customLogo";

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

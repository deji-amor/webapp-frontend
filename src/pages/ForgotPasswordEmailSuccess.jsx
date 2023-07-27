import { ForgotEmailPageWrapper as ForgotEmailSuccessPageWrapper } from "../components/atoms/Password/wrappers";
import ForgotEmailSuccess from "../components/organisms/Password/forgotPasswordEmailSuccess";
import CustomLogo from "../components/atoms/Password/customLogo";

const ForgotPasswordEmailSuccess = () => {
	return (
		<>
			<CustomLogo />
			<ForgotEmailSuccessPageWrapper>
				<ForgotEmailSuccess />
			</ForgotEmailSuccessPageWrapper>
		</>
	);
};

export default ForgotPasswordEmailSuccess;

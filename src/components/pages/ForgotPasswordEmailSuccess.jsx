import { ForgotEmailPageWrapper as ForgotEmailSuccessPageWrapper } from "../atoms/Password/wrappers";
import ForgotEmailSuccess from "../organisms/Password/forgotPasswordEmailSuccess";
import CustomLogo from "../atoms/Password/customLogo";


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

import { ForgotEmailPageWrapper as ResetPasswordSuccessPageWrapper } from "../components/atoms/Password/wrappers";
import ResetPasswordSuccess from "../components/organisms/Password/resetPasswordSuccess";
import CustomLogo from "../components/atoms/Password/customLogo";


const ResetPasswordPageSuccess = () => {
	return (
		<>
			<CustomLogo /> 
			<ResetPasswordSuccessPageWrapper>
				<ResetPasswordSuccess />
			</ResetPasswordSuccessPageWrapper>
		</>
	);
};

export default ResetPasswordPageSuccess;

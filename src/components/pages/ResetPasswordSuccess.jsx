import { ForgotEmailPageWrapper as ResetPasswordSuccessPageWrapper } from "../atoms/Password/wrappers";
import ResetPasswordSuccess from "../organisms/Password/resetPasswordSuccess";
import CustomLogo from "../atoms/Password/customLogo";


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

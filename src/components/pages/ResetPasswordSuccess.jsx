import { ForgotEmailPageWrapper as ResetPasswordSuccessPageWrapper } from "../atoms/Password/wrappers";
import ResetPasswordSuccess from "../organisms/Password/resetPasswordSuccess";

const ResetPasswordPageSuccess = () => {
	return (
		<ResetPasswordSuccessPageWrapper>
			<ResetPasswordSuccess />
		</ResetPasswordSuccessPageWrapper>
	);
};

export default ResetPasswordPageSuccess;

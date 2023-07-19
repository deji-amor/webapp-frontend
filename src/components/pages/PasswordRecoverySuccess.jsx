import { ForgotEmailPageWrapper as ForgotPasswordRecoverySuccessPageWrapper } from "../atoms/Password/wrappers";
import ForgotPasswordRecoverySuccess from "../organisms/Password/forgotPasswordRecoverySuccess";

const PasswordRecoverySuccess = () => {
	return (
		<ForgotPasswordRecoverySuccessPageWrapper>
			<ForgotPasswordRecoverySuccess />
		</ForgotPasswordRecoverySuccessPageWrapper>
	);
};

export default PasswordRecoverySuccess;

import { ForgotEmailPageWrapper as ForgotPasswordRecoverySuccessPageWrapper } from "../atoms/Password/wrappers";
import ForgotPasswordRecoverySuccess from "../organisms/Password/forgotPasswordRecoverySuccess";
import CustomLogo from "../atoms/Password/customLogo";


const PasswordRecoverySuccess = () => {
	return (
		<>
			<CustomLogo /> 
			<ForgotPasswordRecoverySuccessPageWrapper>
				<ForgotPasswordRecoverySuccess />
			</ForgotPasswordRecoverySuccessPageWrapper>
		</>
		
	);
};

export default PasswordRecoverySuccess;

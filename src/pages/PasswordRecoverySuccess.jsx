import { ForgotEmailPageWrapper as ForgotPasswordRecoverySuccessPageWrapper } from "../components/atoms/Password/wrappers";
import ForgotPasswordRecoverySuccess from "../components/organisms/Password/forgotPasswordRecoverySuccess";
import CustomLogo from "../components/atoms/Password/customLogo";


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

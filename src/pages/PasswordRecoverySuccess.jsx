import { ForgotEmailPageWrapper as ForgotPasswordRecoverySuccessPageWrapper } from "../components/atoms/Password/wrappers";
import ForgotPasswordRecoverySuccess from "../components/organisms/Password/forgotPasswordRecoverySuccess";
import Logo from "../components/atoms/Login/Logo";

const PasswordRecoverySuccess = () => {
	return (
		<>
			<Logo className="absolute top-[25px] left-[50px]" />
			<ForgotPasswordRecoverySuccessPageWrapper>
				<ForgotPasswordRecoverySuccess />
			</ForgotPasswordRecoverySuccessPageWrapper>
		</>
	);
};

export default PasswordRecoverySuccess;

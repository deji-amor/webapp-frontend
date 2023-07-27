import ForgotPasswordRecover from "../components/organisms/Password/forgotPasswordRecovery";
import { ForgotEmailPageWrapper as ForgotPasswordRecoverWrapper } from "../components/atoms/Password/wrappers";
import CustomLogo from "../components/atoms/Password/customLogo";

const RecoverPassword = () => {
	return (
		<>
			<CustomLogo /> 
			<ForgotPasswordRecoverWrapper>
				<ForgotPasswordRecover />
			</ForgotPasswordRecoverWrapper>
		</>
	);
};

export default RecoverPassword;

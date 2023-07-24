import ForgotPasswordRecover from "../organisms/Password/forgotPasswordRecovery";
import { ForgotEmailPageWrapper as ForgotPasswordRecoverWrapper } from "../atoms/Password/wrappers";
import CustomLogo from "../atoms/Password/customLogo";

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

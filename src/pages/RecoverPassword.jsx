import ForgotPasswordRecover from "../components/organisms/Password/forgotPasswordRecovery";
import { ForgotEmailPageWrapper as ForgotPasswordRecoverWrapper } from "../components/atoms/Password/wrappers";
import Logo from "../components/atoms/Login/Logo";

const RecoverPassword = () => {
	return (
		<>
			<Logo className="absolute top-[25px] left-[50px]" />
			<ForgotPasswordRecoverWrapper>
				<ForgotPasswordRecover />
			</ForgotPasswordRecoverWrapper>
		</>
	);
};

export default RecoverPassword;

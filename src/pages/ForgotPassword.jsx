import ForgotPasswordEmail from "../components/organisms/Password/forgotPasswordEmailInput";
import { ForgotEmailPageWrapper } from "../components/atoms/Password/wrappers";
import Logo from "../components/atoms/Login/Logo";

const ForgotPassword = () => {
	return (
		<>
			<Logo className="absolute top-[25px] left-[50px]"/>
			<ForgotEmailPageWrapper>
				<ForgotPasswordEmail />
			</ForgotEmailPageWrapper>
		</>
	);
};

export default ForgotPassword;

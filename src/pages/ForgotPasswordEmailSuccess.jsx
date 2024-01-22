import { ForgotEmailPageWrapper as ForgotEmailSuccessPageWrapper } from "../components/atoms/Password/wrappers";
import ForgotEmailSuccess from "../components/organisms/Password/forgotPasswordEmailSuccess";
import Logo from "../components/atoms/Login/Logo";

const ForgotPasswordEmailSuccess = () => {
	return (
		<>
			<Logo className="absolute top-[25px] left-[50px]" />
			<ForgotEmailSuccessPageWrapper>
				<ForgotEmailSuccess />
			</ForgotEmailSuccessPageWrapper>
		</>
	);
};

export default ForgotPasswordEmailSuccess;

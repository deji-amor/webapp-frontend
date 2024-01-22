import { ForgotEmailPageWrapper as ResetPasswordSuccessPageWrapper } from "../components/atoms/Password/wrappers";
import ResetPasswordSuccess from "../components/organisms/Password/resetPasswordSuccess";
import Logo from "../components/atoms/Login/Logo";

const ResetPasswordPageSuccess = () => {
	return (
		<>
			<Logo className="absolute top-[25px] left-[50px]"/>
			<ResetPasswordSuccessPageWrapper>
				<ResetPasswordSuccess />
			</ResetPasswordSuccessPageWrapper>
		</>
	);
};

export default ResetPasswordPageSuccess;

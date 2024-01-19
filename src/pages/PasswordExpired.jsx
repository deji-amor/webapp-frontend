import { ForgotEmailPageWrapper as PasswordExpiredPageWrapper } from "../components/atoms/Password/wrappers";
import PasswordExpired from "../components/organisms/Password/forgotpasswordlinkexp";
import Logo from "../components/atoms/Login/Logo";

const ResetPasswordPageSuccess = () => {
	return (
		<>
			<Logo className="absolute top-[25px] left-[50px]" />
			<PasswordExpiredPageWrapper>
				<PasswordExpired />
			</PasswordExpiredPageWrapper>
		</>
	);
};

export default ResetPasswordPageSuccess;

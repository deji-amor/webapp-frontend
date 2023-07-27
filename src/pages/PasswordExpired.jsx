import { ForgotEmailPageWrapper as PasswordExpiredPageWrapper } from "../components/atoms/Password/wrappers";
import PasswordExpired from "../components/organisms/Password/forgotpasswordlinkexp";
import CustomLogo from "../components/atoms/Password/customLogo";

const ResetPasswordPageSuccess = () => {
	return (
		<>
			<CustomLogo /> 
			<PasswordExpiredPageWrapper>
				<PasswordExpired />
			</PasswordExpiredPageWrapper>
		</>
	);
};

export default ResetPasswordPageSuccess;

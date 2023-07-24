import { ForgotEmailPageWrapper as PasswordExpiredPageWrapper } from "../atoms/Password/wrappers";
import PasswordExpired from "../organisms/Password/forgotpasswordlinkexp";
import CustomLogo from "../atoms/Password/customLogo";

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

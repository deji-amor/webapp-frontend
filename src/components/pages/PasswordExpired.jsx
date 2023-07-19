import { ForgotEmailPageWrapper as PasswordExpiredPageWrapper } from "../atoms/Password/wrappers";
import PasswordExpired from "../organisms/Password/forgotpasswordlinkexp";

const ResetPasswordPageSuccess = () => {
	return (
		<PasswordExpiredPageWrapper>
			<PasswordExpired />
		</PasswordExpiredPageWrapper>
	);
};

export default ResetPasswordPageSuccess;

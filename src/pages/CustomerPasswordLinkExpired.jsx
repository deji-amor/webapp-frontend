import { ForgotEmailPageWrapper as PasswordExpiredPageWrapper } from "../components/atoms/Password/wrappers";
import PasswordLinkExp from "../components/organisms/users/CustomerOnboarding/passwordLinkExp";
import CustomLogo from "../components/atoms/Password/customLogo";

const CustomerPasswordLinkExpired = () => {
	return (
		<>
			<CustomLogo /> 
			<PasswordExpiredPageWrapper>
				<PasswordLinkExp />
			</PasswordExpiredPageWrapper>
		</>
	);
};

export default CustomerPasswordLinkExpired;

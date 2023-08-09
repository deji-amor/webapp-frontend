import { ForgotEmailPageWrapper as ForgotPasswordRecoverWrapper } from "../components/atoms/Password/wrappers";
import CustomLogo from "../components/atoms/Password/customLogo";
import CreatePassword from "../components/organisms/users/CustomerOnboarding/CreatePassword";

const CustomerCreatePassword = () => {
	return (
		<>
			<CustomLogo />
			<ForgotPasswordRecoverWrapper>
				<CreatePassword />
			</ForgotPasswordRecoverWrapper>
		</>
	);
};

export default CustomerCreatePassword;

import { ForgotEmailPageWrapper as ForgotPasswordRecoverWrapper } from "../components/atoms/Password/wrappers";
import CreatePassword from "../components/organisms/users/CustomerOnboarding/CreatePassword";
import Logo from "../components/atoms/Login/Logo";

const CustomerCreatePassword = () => {
	return (
		<>
			<Logo className="absolute top-[25px] left-[50px]" />
			<ForgotPasswordRecoverWrapper>
				<CreatePassword />
			</ForgotPasswordRecoverWrapper>
		</>
	);
};

export default CustomerCreatePassword;

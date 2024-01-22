import { ForgotEmailPageWrapper as ForgotPasswordRecoverySuccessPageWrapper } from "../components/atoms/Password/wrappers";
import Logo from "../components/atoms/Login/Logo";
import CreatePasswordSuccess from "../components/organisms/users/CustomerOnboarding/CreatePasswordSuccess";

const CustomerCreatePasswordSuccess = () => {
	return (
		<>
			<Logo className="absolute top-[25px] left-[50px]" />
			<ForgotPasswordRecoverySuccessPageWrapper>
				<CreatePasswordSuccess />
			</ForgotPasswordRecoverySuccessPageWrapper>
		</>
	);
};

export default CustomerCreatePasswordSuccess;

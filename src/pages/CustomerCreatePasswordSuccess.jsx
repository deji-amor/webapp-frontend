import { ForgotEmailPageWrapper as ForgotPasswordRecoverySuccessPageWrapper } from "../components/atoms/Password/wrappers";
import CustomLogo from "../components/atoms/Password/customLogo";
import CreatePasswordSuccess from "../components/organisms/users/CustomerOnboarding/CreatePasswordSuccess";


const CustomerCreatePasswordSuccess = () => {
	return (
		<>
			<CustomLogo /> 
			<ForgotPasswordRecoverySuccessPageWrapper>
				<CreatePasswordSuccess />
			</ForgotPasswordRecoverySuccessPageWrapper>
		</>
		
	);
};

export default CustomerCreatePasswordSuccess;

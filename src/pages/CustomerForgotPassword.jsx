import CustomerPassword from "../components/organisms/Password/customerpassword";
import { ForgotEmailPageWrapper as ForgotPasswordCustomerEmailPageWrapper } from "../components/atoms/Password/wrappers";
import CustomLogo from "../components/atoms/Password/customLogo";

const CustomerForgotPasswordPage = () => {
	return (
		<>
			<CustomLogo color="#E9E5E5" />
			<ForgotPasswordCustomerEmailPageWrapper>
				<CustomerPassword />
			</ForgotPasswordCustomerEmailPageWrapper>
		</>
	);
};

export default CustomerForgotPasswordPage;

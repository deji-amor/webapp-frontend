import CustomerPassword from "../organisms/Password/customerpassword";
import { ForgotEmailPageWrapper as ForgotPasswordCustomerEmailPageWrapper } from "../atoms/Password/wrappers";
import CustomLogo from "../atoms/Password/customLogo";

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

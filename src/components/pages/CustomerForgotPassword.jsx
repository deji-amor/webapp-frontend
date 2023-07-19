import CustomerPassword from "../organisms/Password/customerpassword";
import { ForgotEmailPageWrapper as ForgotPasswordCustomerEmailPageWrapper } from "../atoms/Password/wrappers";

const CustomerForgotPasswordPage = () => {
	return (
		<ForgotPasswordCustomerEmailPageWrapper>
			<CustomerPassword />
		</ForgotPasswordCustomerEmailPageWrapper>
	);
};

export default CustomerForgotPasswordPage;

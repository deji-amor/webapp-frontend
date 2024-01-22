import CustomerPassword from "../components/organisms/Password/customerpassword";
import { ForgotEmailPageWrapper as ForgotPasswordCustomerEmailPageWrapper } from "../components/atoms/Password/wrappers";
import Logo from "../components/atoms/Login/Logo";

const CustomerForgotPasswordPage = () => {
	return (
		<>
			<Logo className="absolute top-[25px] left-[50px]" />
			<ForgotPasswordCustomerEmailPageWrapper>
				<CustomerPassword />
			</ForgotPasswordCustomerEmailPageWrapper>
		</>
	);
};

export default CustomerForgotPasswordPage;

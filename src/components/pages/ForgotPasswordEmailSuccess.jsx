import { ForgotEmailPageWrapper as ForgotEmailSuccessPageWrapper } from "../atoms/Password/wrappers";
import ForgotEmailSuccess from "../organisms/Password/forgotPasswordEmailSuccess";

const ForgotPasswordEmailSuccess = () => {
	return (
		<ForgotEmailSuccessPageWrapper>
			<ForgotEmailSuccess />
		</ForgotEmailSuccessPageWrapper>
	);
};

export default ForgotPasswordEmailSuccess;

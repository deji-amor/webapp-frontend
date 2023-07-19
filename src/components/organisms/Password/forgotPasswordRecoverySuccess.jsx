import { ForgotEmailWrapper as ForgotPasswordRecoverySuccessWrapper } from "../../atoms/Password/wrappers";
import { useNavigate } from "react-router-dom";
import PasswordSuccess from "../../molecules/Password/customPasswordEmailSuccess";
import CustomButton from "../../atoms/Password/customButton";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const ForgotPasswordRecoverySuccess = () => {
	const navigate = useNavigate();

	const navigateToLoginAdmin = (e) => {
		e.preventDefault();
		navigate("/login-admin");
	};

	return (
		<ForgotPasswordRecoverySuccessWrapper width="550px">
			<PasswordSuccess
				icon={<CheckCircleOutlinedIcon className="icon" />}
				title="Password Recovery Successful."
				iconSize="56px"
				description="Now you can proceed to login to your Account."
				padding={true}
				titleSize="32px"
				size="18px"
				desWidth="100%"
				color="#828282"
			/>

			<CustomButton butText="Proceed to Login" butWidth="80%" onClick={navigateToLoginAdmin} />
		</ForgotPasswordRecoverySuccessWrapper>
	);
};

export default ForgotPasswordRecoverySuccess;

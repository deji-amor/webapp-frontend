import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { forgotpasswordemail } from "../../../state-manager/reducers/password/forgotpassword";
import { ForgotEmailWrapper as ForgotEmailSuccessWrapper } from "../../atoms/Password/wrappers";
import PasswordSuccess from "../../molecules/Password/customPasswordEmailSuccess";
import CustomButton from "../../atoms/Password/customButton";
import AutoShowToast from "../../atoms/SuperAdmin/AutoShowToast"

import MailOutlineIcon from "@mui/icons-material/MailOutline";

const ForgotEmailSuccess = () => {
	const [showToast, setShowToast] = useState(false);
	const { email } = useSelector((state) => state.forgotPassword);
	const dispatch = useDispatch();

	const handleResubmit = (e) => {
		e.preventDefault();
		setShowToast(true);

		try {
			dispatch(forgotpasswordemail(email))
		} catch (err) {
			// console.log(err);
		}
	};

	const handleToastClose = () => {
		setShowToast(false);
	};

	return (
		<div>
			<AutoShowToast
				showToast={showToast}
				message="Recovery link sent successfully!"
				autoHideDuration={5000}
				onClose={handleToastClose}
				/>
			<ForgotEmailSuccessWrapper width="550px">
				<PasswordSuccess
					icon={<MailOutlineIcon className="icon" />}
					title="Password recovery Email has been sent to your Inbox."
					iconSize="56px"
					padding={true}
					description="Note: The recovery link will expire after 48 hrs, please use before then."
					titleSize="32px"
					size="12px"
					desWidth="80%"
					color="#828282"
				/>

				<p style={{ textAlign: "center", fontSize: "18px", marginBottom: "-20px" }}>
					Didn’t receive an email?
				</p>

				<CustomButton butText="Resend Link" butWidth="70%" onClick={handleResubmit} />
			</ForgotEmailSuccessWrapper>
		</div>
	);
};

export default ForgotEmailSuccess;

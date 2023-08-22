import { ForgotEmailWrapper as PasswordExpireWrapper } from "../../../atoms/Password/wrappers";
import PasswordSuccess from "../../../molecules/Password/customPasswordEmailSuccess";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ErrorCard from "../../../molecules/Password/customErrorCard";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { resendMyVerificationLink } from "../../../../state-manager/reducers/users/customers/customers";

const PasswordLinkExp = () => {
	const { email } = useParams();

	const dispatch = useDispatch();

	const { validationResponse } = useSelector((state) => state.customers);

	const handleResendClick = (email) => {
		dispatch(resendMyVerificationLink({ email }));
	};

	return (
		<PasswordExpireWrapper width="550px">
			{validationResponse === "Your account has already been verified!" && (
				<ErrorCard
					icon={<WarningAmberIcon className="icon" />}
					backgroundColor={"#FFBF00"}
					iconColor="white"
					titleColor="white"
					color="white"
					title="Validation link used."
					description="Your account has already been verified!"
				/>
			)}
			<PasswordSuccess
				icon={<ErrorOutlineIcon className="icon" />}
				title="Oops! Password Creation Link Has Expired."
				iconSize="56px"
				description="Please request another password creation link to complete your account activation."
				padding={true}
				titleSize="32px"
				size="18px"
				iconColor="#D73D3D"
				desWidth="100%"
				color="#828282"
			/>

			<div
				style={{
					display: "flex",
					fontFamily: "Poppins",
					textAlign: "center",
					justifyContent: "center",
				}}
			>
				<Button
					onClick={() => handleResendClick(email)}
					variant="contained"
					sx={{
						background: "#2b2e72",
						fontFamily: "Poppins",
						textTransform: "none",
						padding: "10px 18px",
						fontSize: "20px",
						fontWeight: "600",
						borderRadius: "10px",
						width: "80%",
						"&:hover": {
							backgroundColor: "#2b2e72",
						},
					}}
				>
					Request New Link
				</Button>
			</div>
		</PasswordExpireWrapper>
	);
};

export default PasswordLinkExp;

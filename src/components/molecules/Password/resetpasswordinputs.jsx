import PropTypes from "prop-types";
import { ResetPasswordInputWrapper } from "../../atoms/Password/wrappers";
import HeaderContent from "./customHeaderSection";
import lockImage from "../../../assets/password/lock.png";
import ForgotPasswordRecoveryInput from "./customForgotPasswordRecoveryInput";
import CustomButton from "../../atoms/Password/customButton";
import CustomInput from "../../atoms/Password/customInput";
import CustomLabel from "../../atoms/Password/customLabel";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ToolTip from "../../atoms/Password/customInputToolTip";

const ResetPasswordInputs = ({
	hasUpper,
	hasLower,
	hasSymbol,
	hasNumber,
	handleFormSubmit,
	error,
	serverError,
	hasEightChar,
	match,
	value,
	validationError,
	currentError,
	current,
	confirm,
	handleChange,
}) => {
	return (
		<ResetPasswordInputWrapper>
			<HeaderContent
				icon={<img src={lockImage} className="icon" />}
				iconSize="36px"
				title="Reset Password"
				description="Reset your password"
			/>

			<div className="inputs">
				<div>
					<CustomLabel label="Enter Current Password" />
					<CustomInput
						placeholder="Password"
						name="current"
						type="password"
						error={serverError}
						handleChange={handleChange}
					/>
					{serverError && (
						<ToolTip
							toolTipIcon={<ErrorOutlineIcon className="icon" />}
							toolTipText="Invalid Password"
							toolTipColor="#D73D3D"
						/>
					)}
				</div>

				<ForgotPasswordRecoveryInput
					label="Enter New Password"
					placeholder="Password"
					name="password"
					type="password"
					validators={{ hasUpper, hasLower, hasSymbol, hasNumber, hasEightChar }}
					match={match}
					value={value}
					currentError={currentError}
					current={current}
					forgotPasswordRecoveryError={currentError || validationError }
					confirm={confirm}
					validationError={validationError}
					handleChange={handleChange}
				/>

				<ForgotPasswordRecoveryInput
					type="password"
					name="confirmPassword"
					placeholder="Confirm Password"
					label="Confirm New Password"
					validators={{ hasUpper, hasLower, hasSymbol, hasNumber, hasEightChar }}
					single={true}
					match={match}
					value={value}
					currentError={currentError}
					forgotPasswordRecoveryError={!match && confirm.length > 0}
					error={validationError}
					validationError={validationError}
					confirm={confirm}
					handleChange={handleChange}
				/>

				<CustomButton
					butText="Confirm Password Change"
					butType="button"
					onClick={handleFormSubmit}
					validationError={validationError}
					currentError={currentError}
					error={error}
					defaultCursor={!value || !confirm || !current}
					serverError={serverError}
				/>
			</div>
		</ResetPasswordInputWrapper>
	);
};

ResetPasswordInputs.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	butText: PropTypes.string,
	type: PropTypes.string,
	butType: PropTypes.string,
	single: PropTypes.bool,
	match: PropTypes.bool,
	hasSymbol: PropTypes.bool,
	hasUpper: PropTypes.bool,
	hasLower: PropTypes.bool,
	hasNumber: PropTypes.bool,
	hasEightChar: PropTypes.bool,
	validationError: PropTypes.bool,
	note: PropTypes.string,
	confirm: PropTypes.string,
	current: PropTypes.string,
	width: PropTypes.string,
	label: PropTypes.string,
	validators: PropTypes.object,
	placeholder: PropTypes.string,
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	serverError: PropTypes.bool,
	forgotPasswordRecoveryError: PropTypes.bool,
	currentError: PropTypes.bool,
	handleChange: PropTypes.func,
	handleFormSubmit: PropTypes.func,
};

export default ResetPasswordInputs;

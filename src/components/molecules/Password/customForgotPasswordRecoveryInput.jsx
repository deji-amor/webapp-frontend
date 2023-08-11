import PropTypes from "prop-types";
import { InputButtonWrapper } from "../../atoms/Password/wrappers";
import CustomLabel from "../../atoms/Password/customLabel";
import CustomInput from "../../atoms/Password/customInput";
import ToolTip from "../../atoms/Password/customInputToolTip";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const ValueToolTip = ({ condition, text }) => {
	return (
		<ToolTip
			toolTipIcon={
				condition ? (
					<CheckCircleOutlineIcon className="icon" />
				) : (
					<HelpOutlineIcon className="icon" />
				)
			}
			toolTipText={text}
			toolTipColor={condition ? "rgba(18, 133, 37, 0.72)" : ""}
		/>
	);
};

const ValueToolTips = ({ hasUpper, hasLower, hasNumber, hasSymbol, hasEightChar }) => {
	return (
		<>
			<ValueToolTip condition={hasUpper} text="Minimum 1 uppercase letter" />
			<ValueToolTip condition={hasLower} text="Minimum 1 lowercase letter" />
			<ValueToolTip condition={hasSymbol} text="Minimum 1 special letter" />
			<ValueToolTip condition={hasNumber} text="Minimum 1 number" />
			<ValueToolTip condition={hasEightChar} text="Minimum of 8 characters" />
		</>
	);
};

const ValidationErrorToolTip = ({ condition, text }) => (
	<ToolTip
		toolTipIcon={
			condition ? (
				<CheckCircleOutlineIcon className="icon" />
			) : (
				<ErrorOutlineIcon className="icon" />
			)
		}
		toolTipText={text}
		toolTipColor={condition ? "rgba(18, 133, 37, 0.72)" : "rgba(215, 61, 61, 0.72)"}
	/>
);

const ValidationErrorTips = ({ hasUpper, hasLower, hasNumber, hasSymbol, hasEightChar }) => {
	return (
		<>
			<ValidationErrorToolTip condition={hasUpper} text="Minimum 1 uppercase letter" />
			<ValidationErrorToolTip condition={hasLower} text="Minimum 1 lowercase letter" />
			<ValidationErrorToolTip condition={hasSymbol} text="Minimum 1 special letter" />
			<ValidationErrorToolTip condition={hasNumber} text="Minimum 1 number" />
			<ValidationErrorToolTip condition={hasEightChar} text="Minimum of 8 characters" />
		</>
	);
};

const SingleTips = ({ match, confirm, empty, name }) => {
	return !match && confirm.length >= 1 ? (
		<ToolTip
			toolTipIcon={<ErrorOutlineIcon className="icon" />}
			toolTipText="Password does not match new password entered!"
			toolTipColor={"#D73D3D"}
		/>
	) : empty && name === "confirmPassword" && !confirm ? (
		<ToolTip
			toolTipIcon={<ErrorOutlineIcon className="icon" />}
			toolTipText="Confirm password input field cannot be empty!"
			toolTipColor={"#D73D3D"}
		/>
	) : (
		""
	);
};

const PasswordField = ({
	label,
	type,
	width,
	height,
	placeholder,
	empty,
	name,
	value,
	confirm,
	currentError,
	forgotPasswordRecoveryError,
	errorMessage,
	serverRecoveryError,
	handleChange,
}) => {
	return (
		<>
			<CustomLabel label={label} />
			<CustomInput
				type={type}
				width={width}
				height={height}
				placeholder={placeholder}
				label={label}
				empty={empty}
				name={name}
				value={value}
				confirm={confirm}
				currentError={currentError}
				error={forgotPasswordRecoveryError}
				errorMessage={errorMessage}
				serverError={serverRecoveryError}
				handleChange={handleChange}
			/>
		</>
	);
};

const ForgotPasswordRecoveryInput = ({
	type,
	width,
	height,
	name,
	placeholder,
	label,
	validators,
	empty,
	single,
	validationError,
	forgotPasswordRecoveryError,
	errorMessage,
	value,
	match,
	currentError,
	current,
	handleChange,
	serverRecoveryError,
	confirm,
}) => {
	const { hasUpper, hasLower, hasSymbol, hasNumber, hasEightChar } = validators;

	return (
		<InputButtonWrapper error={forgotPasswordRecoveryError}>
			<div>
				<PasswordField
					label={label}
					type={type}
					width={width}
					height={height}
					placeholder={placeholder}
					empty={empty}
					name={name}
					value={value}
					confirm={confirm}
					currentError={currentError}
					forgotPasswordRecoveryError={forgotPasswordRecoveryError}
					errorMessage={errorMessage}
					serverRecoveryError={serverRecoveryError}
					handleChange={handleChange}
				/>
				{single ? (
					<SingleTips match={match} empty={empty} confirm={confirm} name={name} />
				) : (value && !match && !currentError) ? (
					<ValueToolTips
						hasLower={hasLower}
						hasUpper={hasUpper}
						hasNumber={hasNumber}
						hasSymbol={hasSymbol}
						hasEightChar={hasEightChar}
					/>
				) : validationError ? (
					<ValidationErrorTips
						hasLower={hasLower}
						hasUpper={hasUpper}
						hasNumber={hasNumber}
						hasSymbol={hasSymbol}
						hasEightChar={hasEightChar}
					/>
				) : (currentError && current.length > 2) ? (
					<ToolTip
						toolTipIcon={<ErrorOutlineIcon className="icon" />}
						toolTipText="New Password is the same as current password "
						toolTipColor="#D73D3D"
					/>
				) : (empty && !value) ? (
					<ToolTip
						toolTipIcon={<ErrorOutlineIcon className="icon" />}
						toolTipText="Password input field cannot be empty"
						toolTipColor="#D73D3D"
					/>
				) : null}
			</div>
		</InputButtonWrapper>
	);
};

ForgotPasswordRecoveryInput.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	butText: PropTypes.string,
	type: PropTypes.string,
	butType: PropTypes.string,
	single: PropTypes.bool,
	match: PropTypes.bool,
	empty: PropTypes.bool,
	validationError: PropTypes.bool,
	note: PropTypes.string,
	confirm: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	label: PropTypes.string,
	validators: PropTypes.object,
	placeholder: PropTypes.string,
	current: PropTypes.string,
	forgotPasswordRecoveryError: PropTypes.bool,
	currentError: PropTypes.bool,
	serverError: PropTypes.bool,
	errorMessage: PropTypes.string,
	serverRecoveryError: PropTypes.bool,
	handleChange: PropTypes.func,
	handleFormSubmit: PropTypes.func,
};

PasswordField.propTypes = {
	name: PropTypes.string,
	value: PropTypes.string,
	type: PropTypes.string,
	empty: PropTypes.bool,
	width: PropTypes.string,
	height: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	forgotPasswordRecoveryError: PropTypes.bool,
	errorMessage: PropTypes.string,
	serverRecoveryError: PropTypes.bool,
	handleChange: PropTypes.func,
	confirm: PropTypes.string,
	currentError: PropTypes.bool,
};

ValueToolTip.propTypes = {
	text: PropTypes.string,
	condition: PropTypes.bool,
};

ValueToolTips.propTypes = {
	hasLower: PropTypes.bool,
	hasUpper: PropTypes.bool,
	hasNumber: PropTypes.bool,
	hasEightChar: PropTypes.bool,
	hasSymbol: PropTypes.bool,
};

ValidationErrorTips.propTypes = {
	hasLower: PropTypes.bool,
	hasUpper: PropTypes.bool,
	hasNumber: PropTypes.bool,
	hasEightChar: PropTypes.bool,
	hasSymbol: PropTypes.bool,
};

SingleTips.propTypes = {
	name: PropTypes.string,
	match: PropTypes.bool,
	empty: PropTypes.bool,
	confirm: PropTypes.string,
};

ValidationErrorToolTip.propTypes = {
	text: PropTypes.string,
	condition: PropTypes.bool,
};
export default ForgotPasswordRecoveryInput;

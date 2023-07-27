import PropTypes from "prop-types";
import { InputButtonWrapper } from "../../atoms/Password/wrappers";
import CustomLabel from "../../atoms/Password/customLabel";
import CustomInput from "../../atoms/Password/customInput";
import CustomButton from "../../atoms/Password/customButton";
import ToolTip from "../../atoms/Password/customInputToolTip";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import TipNote from "../../atoms/Password/customNote";

const InputButton = ({
	note,
	type,
	butText,
	butType,
	width,
	placeholder,
	label,
	empty,
	forgotPasswordError,
	errorMessage,
	handleEmailChange,
	handleFormSubmit,
	serverError,
	defaultCursor,
	serverErrorMessage,
}) => {
	return (
		<InputButtonWrapper error={forgotPasswordError}>
			<div>
				<CustomLabel label={label} />
				<CustomInput
					type={type}
					width={width}
					placeholder={placeholder}
					label={label}
					empty={empty}
					error={forgotPasswordError}
					errorMessage={errorMessage}
					serverError={serverError}
					defaultCursor={forgotPasswordError || defaultCursor}
					handleChange={handleEmailChange}
				/>

				{	forgotPasswordError ? (
					<ToolTip
						toolTipIcon={<ErrorOutlineIcon className="icon" />}
						toolTipColor="#D73D3D"
						error={forgotPasswordError}
						toolTipText={errorMessage}
					/>
				) : serverError ? (
					<ToolTip
						toolTipIcon={<ErrorOutlineIcon className="icon" />}
						toolTipColor="#D73D3D"
						error={serverError}
						toolTipText={serverErrorMessage}
					/>
				) : empty ? (
					<ToolTip
						toolTipIcon={<ErrorOutlineIcon className="icon" />}
						toolTipColor="#D73D3D"
						error={serverError}
						toolTipText={`${label} input field cannot be empty!`}
					/>
				) : (
					""
				)}
			</div>
			<div>
				<CustomButton
					butText={butText}
					butType={butType}
					error={forgotPasswordError || defaultCursor}
					onClick={handleFormSubmit}
					// defaultCursor={serverError || forgotPasswordError}
				/>
				<TipNote note={note} />
			</div>
		</InputButtonWrapper>
	);
};

InputButton.propTypes = {
	butText: PropTypes.string,
	type: PropTypes.string,
	butType: PropTypes.string,
	note: PropTypes.string,
	width: PropTypes.string,
	label: PropTypes.string,
	empty: PropTypes.bool,
	placeholder: PropTypes.string,
	forgotPasswordError: PropTypes.bool,
	errorMessage: PropTypes.string,
	serverError: PropTypes.bool,
	defaultCursor: PropTypes.bool,
	serverErrorMessage: PropTypes.string,
	handleEmailChange: PropTypes.func,
	handleFormSubmit: PropTypes.func,
};

export default InputButton;

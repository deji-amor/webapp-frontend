import PropTypes from "prop-types";
import { ButtonWrapper } from "./wrappers";

const CustomButton = ({
	butText,
	butWidth,
	butType,
	error,
	serverError,
	validationError,
	currentError,
	onClick,
	defaultCursor,
}) => {

	return (
		<ButtonWrapper
			width={butWidth}
			error={serverError || validationError || currentError || error || defaultCursor}
		>
			<button
				disabled={serverError || validationError || currentError || error || defaultCursor}
				onClick={onClick}
				type={butType}
			>
				{butText}
			</button>
		</ButtonWrapper>
	);
};

CustomButton.propTypes = {
	butText: PropTypes.string,
	butType: PropTypes.string,
	butWidth: PropTypes.string,
	backgroundColor: PropTypes.string,
	onClick: PropTypes.func,
	error: PropTypes.bool,
	serverError: PropTypes.bool,
	currentError: PropTypes.bool,
	defaultCursor: PropTypes.bool,
	validationError: PropTypes.bool,
};

export default CustomButton;

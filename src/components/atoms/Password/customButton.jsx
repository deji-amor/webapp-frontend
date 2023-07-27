import PropTypes from "prop-types";
import { ButtonWrapper } from "./wrappers";
import { ThreeDots, Oval } from "react-loader-spinner";
import { useSelector } from "react-redux";

const CustomButton = ({
	butText,
	butWidth,
	butType,
	error,
	loading,
	name,
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
				// disabled={serverError || validationError || currentError || error || defaultCursor}
				onClick={onClick}
				type={butType}
			>
				{loading ? (
					<span>
						<Oval height={30} width={30} wrapperClass="icon one" color="#fff" secondaryColor="#" />
						{name === "button" ? "Sending" : "Submitting"}
						<ThreeDots height={20} width={20} wrapperClass="icon two" color="#fff" secondaryColor="#" style={{position: 'absolute', top: '30rem'}} />
					</span>
				) : (
					<>{ butText }</>
				)}
			</button>
		</ButtonWrapper>
	);
};

CustomButton.propTypes = {
	butText: PropTypes.string,
	butType: PropTypes.string,
	butWidth: PropTypes.string,
	name: PropTypes.string,
	backgroundColor: PropTypes.string,
	onClick: PropTypes.func,
	loading: PropTypes.bool,
	error: PropTypes.bool,
	serverError: PropTypes.bool,
	currentError: PropTypes.bool,
	defaultCursor: PropTypes.bool,
	validationError: PropTypes.bool,
};

export default CustomButton;

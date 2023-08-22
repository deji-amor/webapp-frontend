import PropTypes from "prop-types";
import { LabelWrapper } from "./wrappers";

const CustomLabel = ({ label }) => {
	return (
		<LabelWrapper>
			<label htmlFor={label}>{label}</label>
		</LabelWrapper>
	);
};

CustomLabel.propTypes = {
	label: PropTypes.string,
};

export default CustomLabel;

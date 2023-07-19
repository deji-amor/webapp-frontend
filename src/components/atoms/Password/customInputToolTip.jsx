import PropTypes from "prop-types";
import Icon from "./customIcon";
import { ToolTipWrapper } from "./wrappers";

const ToolTip = ({ toolTipIcon, toolTipText, error, toolTipColor }) => {
	return (
		<ToolTipWrapper error={error} color={toolTipColor}>
			<Icon icon={toolTipIcon} iconColor={toolTipColor} iconSize="16px" />
			<p>{toolTipText}</p>
		</ToolTipWrapper>
	);
};

ToolTip.propTypes = {
	toolTipIcon: PropTypes.element,
	toolTipText: PropTypes.string,
	error: PropTypes.bool,
	toolTipColor: PropTypes.string,
	success: PropTypes.bool,
};

export default ToolTip;
